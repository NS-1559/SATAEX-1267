<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    public $timestamps = false;
    use HasFactory;

    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'asset_contract', 'contract');
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'asset_contract', 'contract');
    }

    public function wallets()
    {
        return $this->hasMany(AssetWallet::class, 'asset_contract', 'contract');
    }
}
