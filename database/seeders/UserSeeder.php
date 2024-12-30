<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $admin = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('123456789'),
        ]);

        $admin->assignRole('admin');

        User::factory(9)->create()->each(function ($user) {
            $user->password = bcrypt('123456789');
            $user->save();
            $user->assignRole('user');
        });
    }
}

