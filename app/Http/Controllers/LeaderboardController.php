<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class LeaderboardController extends Controller
{
    public function index()
    {
        $leaderboard = DB::table('quiz_user')
            ->join('users', 'quiz_user.user_id', '=', 'users.id')
            ->select('users.name', 'quiz_user.user_id', DB::raw('SUM(quiz_user.score) as total_score'))
            ->groupBy('quiz_user.user_id', 'users.name') 
            ->orderByDesc('total_score') 
            ->limit(10) 
            ->get();

        return response()->json($leaderboard);
    }
}

