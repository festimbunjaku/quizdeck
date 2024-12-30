<?php

namespace Database\Seeders;

use App\Models\Quiz;
use App\Models\User;
use App\Models\QuizUser;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    public function run()
    {
        $quizzes = Quiz::factory(5)->create();

        $users = User::all();
        $users->each(function ($user) use ($quizzes) {
            $quizzes->each(function ($quiz) use ($user) {
                QuizUser::create([
                    'user_id' => $user->id,
                    'quiz_id' => $quiz->id,
                    'completed' => fake()->boolean(),
                    'score' => fake()->numberBetween(0, 100),
                ]);
            });
        });
    }
}
