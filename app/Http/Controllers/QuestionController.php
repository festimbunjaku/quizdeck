<?php

namespace App\Http\Controllers;

use App\Models\quiz;
use App\Models\Category;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::all();
        $quizzes = Quiz::all();
        
        $questions = Question::with('quiz');
        
        if ($request->has('category') && $request->category) {
            $questions->whereHas('quiz', function ($query) use ($request) {
                $query->where('category_id', $request->category);
            });
        }
    
        $questions = $questions->get();
    
        return view('questions.index', [
            'questions' => $questions,
            'quizzes' => $quizzes,
            'categories' => $categories,
            'selectedCategory' => $request->category,
        ]);
    }
    

    // Show the form for creating a new resource.
    public function create()
    {
        $quizzes = Quiz::all(); 
        return view('questions.create', compact('quizzes'));
    }


    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'question' => 'required|string',
            'option_a' => 'required|string',
            'option_b' => 'required|string',
            'option_c' => 'required|string',
            'option_d' => 'required|string',
            'correct_option' => 'required|in:A,B,C,D',
        ]);

        // Create the question
        $question = Question::create($validated);

        // Redirect back with a success message
        return redirect()->route('questions.index')
                         ->with('success', 'Question created successfully!');
    }

    // Update the specified resource in storage.
    public function update(Request $request, Question $question)
    {
        $validated = $request->validate([
            'quiz_id' => 'required|exists:quizzes,id',
            'question' => 'required|string',
            'option_a' => 'required|string',
            'option_b' => 'required|string',
            'option_c' => 'required|string',
            'option_d' => 'required|string',
            'correct_option' => 'required|in:A,B,C,D',
        ]);

        $question->update($validated);

        return redirect()->route('questions.index')->with('success', 'Question updated successfully');
    }

    public function show(string $id)
    {
        $question = Question::findOrFail($id);

        return view('questions.show', compact('question'));
    }



    public function edit(Question $question)
    {
        $quizzes = Quiz::all(); 
        return view('questions.edit', compact('question', 'quizzes'));
    }

    // Remove the specified resource from storage.
    public function destroy(Question $question)
    {
        $quiz_id = $question->quiz->id;
        $question->delete();
    
        return redirect()->route('questions.index', ['quiz_id' => $quiz_id]);
    }
    
}

