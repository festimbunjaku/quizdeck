<?php
namespace App\Http\Controllers;


use App\Models\Leaderboard;
use App\Models\QuizUser;
use App\Models\User;
use Illuminate\Http\Request;

class LeaderboardController extends Controller
{
    public function index()
    {
        $leaderboard = User::withSum('quizUsers', 'score')
            ->orderByDesc('quiz_users_sum_score')
            ->get()
            ->map(function ($user) {
                return [
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'total_score' => $user->quiz_users_sum_score,
                ];
            });

        return response()->json($leaderboard);
    }

    
}

