<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class WalletFactory extends Factory
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
            'address' => $this->faker->sha256(),
            'total_balance' => $this->faker->randomFloat(),
        ];
    }
}
