<?php

use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreateRolesAndPermissions extends Migration
{
    public function up()
{
    // Create permissions if they don't already exist
    Permission::firstOrCreate(['name' => 'view categories']);
    Permission::firstOrCreate(['name' => 'take quizzes']);
    Permission::firstOrCreate(['name' => 'view dashboard']);
    Permission::firstOrCreate(['name' => 'manage quizzes']);
    Permission::firstOrCreate(['name' => 'view leaderboard']);

    // Create roles
    $userRole = Role::firstOrCreate(['name' => 'user']);
    $adminRole = Role::firstOrCreate(['name' => 'admin']);

    // Assign permissions to roles
    $userRole->givePermissionTo(['view categories', 'take quizzes', 'view dashboard']);
    $adminRole->givePermissionTo([
        'manage quizzes',
        'view leaderboard',
        'view categories',
        'take quizzes',
        'view dashboard'
    ]);
}


    public function down()
    {
        // This will revert the migration (if needed)
        Role::where('name', 'user')->delete();
        Role::where('name', 'admin')->delete();
        Permission::whereIn('name', ['view categories', 'take quizzes', 'view dashboard', 'manage quizzes', 'view leaderboard'])->delete();
    }
}
