<?php

namespace App\Http\Controllers;

use App\Models\quiz;
use App\Models\Category;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $questions = Question::with('quiz')->get();
        return view('questions.index', [
            'questions' => $questions,
        ]);
    }

    // Show the form for creating a new resource.
    public function create($quiz_id)
    {
        $categories = Category::all();
        $quiz = \App\Models\Quiz::findOrFail($quiz_id); // Ensure the quiz exists

        return view('questions.create', compact('categories', 'quiz'));
    }

    // Store a newly created resource in storage.
    public function store(Request $request, $quiz_id)
    {
        $request->validate([
            'question' => 'required',
            'option_a' => 'required',
            'option_b' => 'required',
            'option_c' => 'required',
            'option_d' => 'required',
            'correct_option' => 'required|in:A,B,C,D',
        ]);

        $quiz = \App\Models\Quiz::findOrFail($quiz_id);

        $question = new Question([
            'quiz_id' => $quiz->id,
            'question' => $request->question,
            'option_a' => $request->option_a,
            'option_b' => $request->option_b,
            'option_c' => $request->option_c,
            'option_d' => $request->option_d,
            'correct_option' => $request->correct_option,
        ]);

        $question->save();

        return redirect()->route('questions.index', ['quiz_id' => $quiz->id])
                         ->with('success', 'Question created successfully!');
    }

    // Show the form for editing the specified resource.
    public function edit(Question $question)
    {
        $categories = Category::all();
        $quizzes = quiz::all();

        return view('questions.edit', compact('question', 'quizzes'));
    }

    // Update the specified resource in storage.
    public function update(Request $request, Question $question)
        {
            $validated = $request->validate([
                'quiz_id' => 'required|exists:quizzes,id',  // Ensure the quiz exists
                'question' => 'required|string',
                'option_a' => 'required|string',
                'option_b' => 'required|string',
                'option_c' => 'required|string',
                'option_d' => 'required|string',
                'correct_option' => 'required|string',
            ]);

            // Update the question with the validated data
            $question->update($validated);

            return redirect()->route('questions.index')->with('success', 'Question updated successfully');
        }


    // Remove the specified resource from storage.
    public function destroy(Question $question)
    {
        $quiz_id = $question->quiz->id;
        $question->delete();

        return redirect()->route('questions.index', ['quiz_id' => $quiz_id]);
    }
}

