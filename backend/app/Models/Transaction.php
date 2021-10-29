<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    public $timestamps = false;
    protected $keyType = 'string';
    use HasFactory;

    public function order()
    {
        return $this->hasOne(OrderTransaction::class);
    }

    public function asset()
    {
        return $this->belongsTo(Asset::class, 'asset_contract', 'contract');
    }
}
