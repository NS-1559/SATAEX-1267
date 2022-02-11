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
            if (!strcmp($user->first_name, 'Hoàng Sơn')) {
                Identity::factory()->create([
                    'user_id' => $user->id,
                    'email' => 'hoangson@gmail.com',
                    'password' => bcrypt('hoangson123'),
                    'role' => 'USER'
                ]);
            } elseif (!strcmp($user->first_name, 'Duy Anh')) {
                Identity::factory()->create([
                    'user_id' => $user->id,
                    'email' => 'duyanh@gmail.com',
                    'password' => bcrypt('duyanh123'),
                    'role' => 'USER'
                ]);
            } elseif (!strcmp($user->first_name, 'Kỳ Anh')) {
                Identity::factory()->create([
                    'user_id' => $user->id,
                    'email' => 'kyanh@gmail.com',
                    'password' => bcrypt('kyanh123'),
                    'role' => 'USER'
                ]);
            } elseif (!strcmp($user->first_name, 'Công Thành')) {
                Identity::factory()->create([
                    'user_id' => $user->id,
                    'email' => 'congthanh@gmail.com',
                    'password' => bcrypt('congthanh123'),
                    'role' => 'USER'
                ]);
            } elseif (!strcmp($user->first_name, 'Admin')) {
                Identity::factory()->create([
                    'user_id' => $user->id,
                    'email' => 'admin@gmail.com',
                    'password' => bcrypt('admin123456'),
                    'role' => 'ADMIN'
                ]);
            } else {
                Identity::factory()->create([
                    'user_id' => $user->id
                ]);
            }
        }
    }
}
