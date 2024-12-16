<?php

namespace App\Http\Controllers;

use App\Models\quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('quizes.index', [
            'quizes' => quiz::all(),
        ]);    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = \App\Models\Category::all();

        return view('quizes.create', compact('categories'));    
    }

    /**
     * Store a newly created resource in storage.
     */
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


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $quiz = quiz::with('questions')->findOrFail($id);

        return view('quizes.show', compact('quiz'));    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
        {
            $quiz = quiz::findOrFail($id);
            $categories = \App\Models\Category::all();
            return view('quizes.edit', [
                'quiz' => $quiz,
                'categories' => $categories
            ]);     
        }


    /**
     * Update the specified resource in storage.
     */
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(quiz::findOrFail($id)->delete()){
            return redirect()->route('quizes.index'); 
        }
    }
}
