<?php

namespace Database\Seeders;

use App\Models\Identity;
use App\Models\User;
use Illuminate\Database\Seeder;

class IdentitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {  
        foreach (User::all() as $user) {
            if (!strcmp($user->last_name, 'EX1')) {
                Identity::factory()->create([
                    'user_id' => $user->id,
                    'email' => 'admin@gmail.com',
                    'password' => bcrypt('123456'),
                    'role' => 'ADMIN'
                ]);
            } elseif (!strcmp($user->last_name, 'EX2')) {
                Identity::factory()->create([
                    'user_id' => $user->id,
                    'email' => 'user@gmail.com',
                    'password' => bcrypt('123456'),
                    'role' => 'USER'
                ]);
            } else {
                Identity::factory()->create([
                    'user_id' => $user->id
                ]);
            }
        }
    }
}
