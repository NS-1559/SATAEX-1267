<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Identity extends Model
{
    public $timestamps = false;
    protected $keyType = 'string';
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
