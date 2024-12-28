<?php

namespace App\Models;

use App\Models\quiz;
use App\Models\User;
use App\Models\leaderboard;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class QuizUser extends Model
{
    use HasFactory;

    protected $table = 'quiz_user'; 
    
    protected $fillable = [
        'user_id',
        'quiz_id',
        'score',
        'completed',
    ];

    protected static function booted()
    {
        static::deleted(function ($quizUser) {
            leaderboard::where('user_id', $quizUser->user_id)->delete();
        });
    }

    public function quiz()
    {
        return $this->belongsTo(quiz::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
