<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\QuizUser;
use App\Models\Leaderboard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QuizUserController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'quiz_id' => 'required|exists:quizzes,id',
            'score' => 'required|integer',
        ]);

        $quiz = Quiz::find($validated['quiz_id']);
        $maxScore = $quiz->questions->count() * 5;

        $completed = $validated['score'] === $maxScore;

        $quizUser = QuizUser::updateOrCreate(
            ['user_id' => $validated['user_id'], 'quiz_id' => $validated['quiz_id']],
            [
                'score' => $validated['score'],
                'completed' => $completed,
            ]
        );

        $totalScore = QuizUser::where('user_id', $validated['user_id'])
            ->sum('score');

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
        $quizUser = QuizUser::findOrFail($id);

        Leaderboard::where('user_id', $quizUser->user_id)->delete();

        $quizUser->delete();

        $this->updateLeaderboard($quizUser->user_id);

        return response()->json(['message' => 'Quiz User and associated leaderboard record deleted successfully.']);
    }

    private function updateLeaderboard($userId)
    {
        $totalScore = QuizUser::where('user_id', $userId)->sum('score');

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

        $completedQuizzes = $user->quizzes()->wherePivot('completed', true)->get();

        return response()->json($completedQuizzes);
    }
}
