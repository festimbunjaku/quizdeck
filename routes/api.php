<?php

use App\Models\Quiz;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuizUserController;
use App\Http\Controllers\LeaderboardController;


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

Route::post('/quiz_results', [QuizUserController::class, 'store']);

Route::get('/leaderboard', [LeaderboardController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user/quizzes', [QuizUserController::class, 'getUserQuizzes']);

Route::middleware('auth:sanctum')->get('/user/completed-quizzes', [QuizUserController::class, 'getCompletedQuizzes']);

Route::get('/leaderboard', [LeaderboardController::class, 'index']);

Route::middleware('auth:sanctum')->put('/user/update-profile', [UserController::class, 'updateProfile']);

Route::middleware('auth:sanctum')->put('/user/update-password', [UserController::class, 'updatePassword']);


Route::post('/register', [AuthController::class, 'register']); 

Route::post('/login', [AuthController::class, 'login']); 

Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'user']);