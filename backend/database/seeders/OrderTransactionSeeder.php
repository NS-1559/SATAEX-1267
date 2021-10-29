<?php

namespace Database\Seeders;

use App\Models\OrderTransaction;
use Illuminate\Database\Seeder;

class OrderTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OrderTransaction::factory()->count(20)->create();
    }
}
