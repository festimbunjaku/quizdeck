<?php

namespace Database\Factories;

use App\Models\Quiz;
use App\Models\User;
use App\Models\QuizUser;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuizUserFactory extends Factory
{
    protected $model = QuizUser::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'quiz_id' => Quiz::factory(),
            'completed' => fake()->boolean(),
            'score' => fake()->numberBetween(0, 25),
        ];
    }
}
