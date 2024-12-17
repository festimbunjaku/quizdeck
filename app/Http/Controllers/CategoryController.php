<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('categories.index', [
            'categories' => Category::all(),
        ]);
    }    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('categories.create');    
    }



    public function quizQuestions($categoryId, $quizId)
    {
        $category = Category::find($categoryId);

        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        $quiz = $category->quizzes()->where('id', $quizId)->first();

        if (!$quiz) {
            return response()->json(['error' => 'Quiz not found in this category'], 404);
        }

        $questions = $quiz->questions;

        return response()->json([
            'category' => $category->name,
            'quiz' => $quiz->title,
            'questions' => $questions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        if(category::create(['name' => $request->name])){
            return redirect()->route('categories.index'); 
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::with('quizzes.questions')->findOrFail($id);

        return view('categories.show', compact('category'));    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = category::findOrFail($id);
        return view('categories.edit',[
            'category' => $category
        ]);   
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
        ]);
    
        $category = Category::findOrFail($id);
        $category->update(['name' => $request->name]);
    
        return redirect()->route('categories.index');
    }
    
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(category::findOrFail($id)->delete()){
            return redirect()->back(); 
        }
    }
}
