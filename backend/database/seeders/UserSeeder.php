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
            'first_name' => 'Hoàng Sơn',
            'last_name' => 'Nguyễn',
            'address' => 'Hà Nội, Việt Nam',
            'phone_number' => '09123456789',
            'api_key' => 'KS0Kqr4tBLjH2hT4CD6gHwZXaadx2V3apNqeiW9tnAhceX24Hbqeo9aaZVHLYSKF',
            'secret_key' => 'rdHRqRrY4u6HpeXx01ZoeLsu59EnnKDAlXeO1Umk66HBmKYku4HMv20olDj0rFqC',
       ]);
       User::factory()->create([
            'first_name' => 'Duy Anh',
            'last_name' => 'Đỗ',
            'address' => 'Hà Nội',
            'phone_number' => '09623456789',
            'api_key' => 'hl6IKtPNQX59mjK1VLamKk00hQ9fL3Pirl8ESKpXWP6sH9lOpTvMPx3MoHvbnzDV',
            'secret_key' => 'NtApDfr1qZlRaNFBR3r4AxJETET55l2HtcftTgHJ1AiOV2fDiI5qZWvnMZNdoVFG',
       ]);
       User::factory()->create([
            'first_name' => 'Kỳ Anh',
            'last_name' => 'Phạm Huy',
            'address' => 'Thái Bình',
            'phone_number' => '09623456789',
            'api_key' => 'XEDWPftyltMPwMNBmAYqnxBzv3vt8HjudcjD2W2GpE7ugNYOjh6UAXgHhxrtsiyY',
            'secret_key' => 'KQMpoMzCGt6HL07FaZWa0G9TFa7hkM0yBFo2GMQSmdHROM3oKyAYffyojtegaeBK',
       ]);
       User::factory()->create([
            'first_name' => 'Thành',
            'last_name' => 'Vũ Công',
            'address' => 'Thái Bình',
            'phone_number' => '09623456789',
            'api_key' => 'TZsbbvzltUz8hpvNWN74dh0m3FUzPQxKfgfz0HSyIM13DUDAimZltPTqDmlAGjIa',
            'secret_key' => 'pdRJoAnq8Wbf7DYSUzg3UVKqZLyg45GsQfrww26wHC1qtEfH28BAGjxYCd1NHnwC',
       ]);
       User::factory()->create([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'address' => 'Việt Nam',
            'phone_number' => '09123456789',
       ]);
        // User::factory()->count(18)->create();
    }
}
