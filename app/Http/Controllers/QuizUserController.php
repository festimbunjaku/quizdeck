<?php

namespace App\Http\Controllers;

use App\Models\QuizUser;
use App\Models\Quiz;
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

        return response()->json([
            'message' => 'Quiz result saved successfully!',
            'quiz_user' => $quizUser
        ]);
    }
}

