<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tapel extends Model
{
    /** @use HasFactory<\Database\Factories\TapelFactory> */
    
    use HasFactory;
    protected $fillable = [
        'tahunawal',
        'tahunakhir',
        'long',
        'short',
        'berlaku_at',
        'kadaluarsa_at',
    ];
    // public $primarykey = 'id';
}
