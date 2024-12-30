<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\QuizSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\CategorySeeder;
use Database\Seeders\QuestionSeeder;
use Database\Seeders\QuizUserSeeder;
use Database\Seeders\LeaderboardSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            CategorySeeder::class,
            QuizSeeder::class,
            QuestionSeeder::class,
            // LeaderboardSeeder::class,
            QuizUserSeeder::class,
        ]);
    }
}
