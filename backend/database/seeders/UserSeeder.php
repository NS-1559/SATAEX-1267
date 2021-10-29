<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       User::factory()->create([
            'first_name' => 'SATA',
            'last_name' => 'EX1',
            'address' => 'Vietnam',
            'phone_number' => '09123456789'
       ]);
       User::factory()->create([
            'first_name' => 'SATA',
            'last_name' => 'EX2',
            'address' => 'Ha Noi',
            'phone_number' => '09623456789'
       ]);
       User::factory()->count(18)->create();
    }
}
