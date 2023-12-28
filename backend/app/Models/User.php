<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
 	use HasApiTokens, HasFactory, Notifiable;
 	protected $table='db_user';
 protected $fillable = [
        'name',
        'email',
        'password',
    ];
 protected $hidden = [
        'password',
        'remember_token',
    ];
 protected $casts = [
 	'email_verified_at' => 'datetime',
    'password' => 'hashed',
 	];
}

