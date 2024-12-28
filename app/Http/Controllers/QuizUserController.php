<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\QuizUser;
use App\Models\Leaderboard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QuizUserController extends Controller
{
    /**
     * Store the quiz result in the database and update the leaderboard.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'quiz_id' => 'required|exists:quizzes,id',
            'score' => 'required|integer',
        ]);

        // Get the quiz details
        $quiz = Quiz::find($validated['quiz_id']);
        $maxScore = $quiz->questions->count() * 5;  // Assuming 5 points per question

        // Determine if the quiz is completed (full score)
        $completed = $validated['score'] === $maxScore;

        // Store the quiz result in the `quiz_user` table
        $quizUser = QuizUser::updateOrCreate(
            ['user_id' => $validated['user_id'], 'quiz_id' => $validated['quiz_id']],
            [
                'score' => $validated['score'],
                'completed' => $completed,
            ]
        );

        // Calculate the user's total score by summing scores from all quizzes
        $totalScore = QuizUser::where('user_id', $validated['user_id'])
            ->sum('score'); // Sum up all quiz scores (not just completed ones)

        // Update or create a leaderboard entry for the user
        Leaderboard::updateOrCreate(
            ['user_id' => $validated['user_id']],
            ['total_score' => $totalScore]
        );

        return response()->json([
            'message' => 'Quiz result saved and leaderboard updated successfully!',
            'quiz_user' => $quizUser,
        ]);
    }

    public function deleteQuizUser($id)
    {
        // Find the QuizUser by ID
        $quizUser = QuizUser::findOrFail($id);

        // Delete the associated leaderboard score
        Leaderboard::where('user_id', $quizUser->user_id)->delete();

        // Now delete the QuizUser record
        $quizUser->delete();

        // After deleting, recalculate the leaderboard for the user
        $this->updateLeaderboard($quizUser->user_id);

        return response()->json(['message' => 'Quiz User and associated leaderboard record deleted successfully.']);
    }

    /**
     * Recalculate and update the leaderboard after deletion of a quiz user.
     */
    private function updateLeaderboard($userId)
    {
        // Calculate the user's total score by summing scores from all quizzes
        $totalScore = QuizUser::where('user_id', $userId)->sum('score');

        // Update the leaderboard with the new total score
        Leaderboard::updateOrCreate(
            ['user_id' => $userId],
            ['total_score' => $totalScore]
        );
    }

    public function getUserQuizzes(Request $request)
    {
        $user = $request->user();
        $quizzes = $user->quizzes; 

        return response()->json($quizzes);
    }

    public function getCompletedQuizzes(Request $request)
    {
        $user = $request->user();

        // Fetch completed quizzes with the 'completed' status from the pivot table
        $completedQuizzes = $user->quizzes()->wherePivot('completed', true)->get();

        // Return the completed quizzes with their score
        return response()->json($completedQuizzes);
    }
}
