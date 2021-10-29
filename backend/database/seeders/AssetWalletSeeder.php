<?php

namespace Database\Seeders;

use App\Models\Wallet;
use App\Models\AssetWallet;
use Illuminate\Database\Seeder;

class AssetWalletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AssetWallet::factory()->count(20)->create();
    }
}
