<?php

use App\Models\Quiz;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuizUserController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

Route::get('categories', function () {
    return Category::all();
});

Route::get('categories/{id}/quizzes', function ($id) {
    $category = Category::findOrFail($id);
    return $category->quizzes;
});

Route::get('quizzes/{id}', function ($id) {
    $quiz = Quiz::with('questions')->findOrFail($id);
    return $quiz;
});

Route::get('categories/{categoryId}/quizzes/{quizId}/questions', [CategoryController::class, 'quizQuestions']);

Route::post('/quiz_results', [QuizUserController::class, 'store']);  // Consider renaming for clarity

Route::get('/leaderboard', [LeaderboardController::class, 'index']);


Route::post('/register', [AuthController::class, 'register']); 
Route::post('/login', [AuthController::class, 'login']); 
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);
