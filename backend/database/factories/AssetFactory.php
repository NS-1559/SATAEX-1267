<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AssetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'contract' => $this->faker->sha256(),
            'name' => $this->faker->name(),
            'uri' => $this->faker->imageUrl(640, 480, 'animals'),
            'price' => $this->faker->randomFloat(),
            'type' => $this->faker->randomElement(['BSC', 'TRC20']),
            'symbol' => $this->faker->regexify('[A-Z][A-Z][A-Z]'),
            'amount' => $this->faker->randomFloat(),
        ];
    }
}
