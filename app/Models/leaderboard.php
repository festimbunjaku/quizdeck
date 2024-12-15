<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class leaderboard extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'total_score',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
