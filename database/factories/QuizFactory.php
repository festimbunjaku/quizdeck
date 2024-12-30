<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Quiz;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuizFactory extends Factory
{
    protected $model = Quiz::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'category_id' => Category::inRandomOrder()->first()->id,
        ];
    }
}
