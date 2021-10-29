<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetWallet extends Model
{
    public $timestamps = false;
    use HasFactory;

    public function asset()
    {
        return $this->belongsTo(Asset::class, 'asset_contract', 'contract');
    }
    
    public function wallet()
    {
        return $this->belongsTo(Wallet::class, 'wallet_id', 'id');
    }
}
