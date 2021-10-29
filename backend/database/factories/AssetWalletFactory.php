<?php

namespace Database\Factories;

use App\Models\Asset;
use App\Models\Wallet;
use Illuminate\Database\Eloquent\Factories\Factory;

class AssetWalletFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'asset_contract' => Asset::inRandomOrder()->first()->contract,
            'wallet_id' => Wallet::inRandomOrder()->first()->id,
            'amount' => $this->faker->randomFloat(),
        ];
    }
}
