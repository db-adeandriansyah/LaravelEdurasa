<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::get('/dashboard',function(){
    $menu=[
        //menu untuk developer. by default diarahkan ke setting tapel;
        [
            'title' => 'Setting Aplikasi',
            'uri'   => '/setting-tapel',
            'isReady'=>Route::has('setting.tapel'),
            'urlImage' =>'project-icon-png-15',
            'nameRoute'=>'setting.tapel',
        ],

        // boleh user lain; 
        [
            'title' => 'Manajemen Akun',
            'uri'   => '/manajemen-akun',
            'isReady'=>Route::has('manajemen.akun'),
            'urlImage' =>'PTK',
            'nameRoute'=>'manajemen.akun',
        ],
        [
            'title' => 'Manajemen Siswa',
            'uri'   => '/manajemen-siswa',
            'nameRoute'=>'manajemen.siswa',
            'isReady'=>Route::has('manajemen.siswa'),//($request->route()->getName() ==='manajemen.siswa'),
            'urlImage' =>'absensi-siswa'
        ],
        [
            'title' => 'Manajemen Kelas',
            'uri'   => '/manajemen-kelas',
            'isReady'=>Route::has('manajemen.kelas'),
            'urlImage' =>'arsip',
            'nameRoute'=>'manajemen.kelas',
        ],
    
    ];
    return Inertia::render('Dashboard',['menu' =>$menu]);
})->middleware(['auth', 'verified'])->name('dashboard');