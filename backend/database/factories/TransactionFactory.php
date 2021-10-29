<?php

namespace Database\Factories;

use App\Models\Asset;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id' => $this->faker->uuid(),
            'asset_contract' => Asset::inRandomOrder()->first()->contract,
            'amount' => $this->faker->randomFloat(),
            'from_address' => $this->faker->sha256(),
            'to_address' => $this->faker->sha256(),
        ];
    }
}
