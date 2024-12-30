<?php

namespace App\Http\Controllers;

use App\Models\quiz;
use App\Models\category;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index(Request $request)
    {
        $categories = category::all();

        $quizes = Quiz::with('category');

        if ($request->has('category') && $request->category) {
            $quizes->where('category_id', $request->category);
        }

        $quizes = $quizes->get();

        return view('quizes.index', [
            'quizes' => $quizes,
            'categories' => $categories,
            'selectedCategory' => $request->category,
        ]);
    }

    public function create()
    {
        $categories = \App\Models\Category::all();

        return view('quizes.create', compact('categories'));    
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category_id' => 'required|exists:categories,id', 
        ]);

        if(quiz::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
        ])){
            return redirect()->route('quizes.index'); 
        }    
    }

    public function show(string $id)
    {
        $quiz = quiz::with('questions')->findOrFail($id);

        return view('quizes.show', compact('quiz'));    
    }

    public function edit(string $id)
    {
        $quiz = quiz::findOrFail($id);
        $categories = \App\Models\Category::all();
        return view('quizes.edit', [
            'quiz' => $quiz,
            'categories' => $categories
        ]);     
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);
    
        $quiz = quiz::findOrFail($id);
        $quiz->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
        ]);
    
        return redirect()->route('quizes.index');    
    }

    public function destroy(string $id)
    {
        if(quiz::findOrFail($id)->delete()){
            return redirect()->route('quizes.index'); 
        }
    }
}
