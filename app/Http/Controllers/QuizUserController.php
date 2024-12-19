<?php

namespace App\Http\Controllers;

use App\Models\QuizUser;
use Illuminate\Http\Request;

class QuizUserController extends Controller
{
    /**
     * Store the quiz result in the database.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'quiz_id' => 'required|exists:quizzes,id',
            'score' => 'required|integer',
        ]);

        // Check if the user has already completed this quiz
        $quizUser = QuizUser::updateOrCreate(
            ['user_id' => $validated['user_id'], 'quiz_id' => $validated['quiz_id']],
            [
                'score' => $validated['score'],
                'completed' => true,  // Mark the quiz as completed
            ]
        );

        return response()->json([
            'message' => 'Quiz result saved successfully!',
            'quiz_user' => $quizUser
        ]);
    }

    // Add any other methods if needed, e.g., for retrieving results or handling errors
}
