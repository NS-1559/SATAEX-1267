<?php

namespace Database\Seeders;

use App\Models\Asset;
use Illuminate\Database\Seeder;

class AssetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // BTC
        Asset::factory()->create([
            'name' => 'Bitcoin',
            'type' => 'BSC',
            'symbol' => 'BTC',
        ]);

        // ETH
        Asset::factory()->create([
            'name' => 'Etherium',
            'type' => 'TRC20',
            'symbol' => 'ETH',
        ]);

        // Asset::factory()->count(18)->create();

    }
}
