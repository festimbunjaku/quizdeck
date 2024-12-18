<?php

use App\Models\quiz;
use App\Models\category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;


Route::get('categories', function(){
    return category::all();
});

Route::get('categories/{id}/quizzes', function ($id) {
    $category = category::findOrFail($id);
    return $category->quizzes;
});

Route::get('quizzes/{id}', function ($id) {
    $quiz = quiz::with('questions')->findOrFail($id);
    return $quiz;
});

Route::get('quizzes/{quiz}/questions', [CategoryController::class, 'quizQuestions']);

Route::get('categories/{categoryId}/quizzes/{quizId}/questions', [CategoryController::class, 'quizQuestions']);

Route::get('quizzes/{quizId}/questions', [CategoryController::class, 'quizQuestions']);

