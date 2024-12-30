<?php

namespace Database\Seeders;

use App\Models\QuizUser;
use Illuminate\Database\Seeder;

class QuizUserSeeder extends Seeder
{
    public function run()
    {
        QuizUser::factory(25)->create(); 
    }
}

