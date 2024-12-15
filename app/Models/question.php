<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class question extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_id', 'question', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_option',
    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }}
