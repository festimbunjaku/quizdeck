<?php

namespace Database\Seeders;

use App\Models\Quiz;
use App\Models\Question;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    public function run()
    {
        $quizzes = Quiz::all();

        foreach ($quizzes as $quiz) {
            Question::factory(5)->create([
                'quiz_id' => $quiz->id,
            ]);
        }
    }
}
