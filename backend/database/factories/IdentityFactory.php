<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class IdentityFactory extends Factory
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
            'email' => $this->faker->email(),
            'password' => bcrypt($this->faker->password()),
            'role' => 'USER',
            'two_fa_key' => $this->faker->sha256(),
            'created_at' => now(),
        ];
    }
}
