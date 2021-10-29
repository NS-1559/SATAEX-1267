<?php

namespace Database\Factories;

use App\Models\Asset;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
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
            'user_id' => User::inRandomOrder()->first()->id,
            'asset_contract' => Asset::inRandomOrder()->first()->contract,
            'type' => $this->faker->randomElement(['BUY', 'SELL']),
            'amount' => $this->faker->randomFloat(),
        ];
    }
}
