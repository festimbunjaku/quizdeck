<?php

namespace Database\Seeders;

use App\Models\Leaderboard;
use Illuminate\Database\Seeder;

class LeaderboardSeeder extends Seeder
{
    public function run()
    {
        Leaderboard::factory(5)->create();  
    }
}
