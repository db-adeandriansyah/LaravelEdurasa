<?php

use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\TapelController;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    
    Route::get('/manajemen-siswa',function()
        {
        return Inertia::render('Manajemen/Siswa');
        })->name('manajemen.siswa');
    Route::get('/manajemen-kelas',function()
        {
        return Inertia::render('Manajemen/Siswa');
        })->name('manajemen.kelas');
    
    Route::get('/manajemen-akun',function(){
        
        return Inertia::render('Manajemen/Akun',['users'=>User::All()]);
    })->name('manajemen.akun');
    
    //setting Aplikasi:
    Route::get('/setting-tapel',[TapelController::class,'index'])->name('setting.tapel');
    Route::post('/setting-tapel',[TapelController::class,'create'])->name('setting.create');
    Route::put('/setting-tapel/{tapel}',[TapelController::class,'update'])->name('setting.update');
    Route::delete('/setting-tapel/{tapel}',[TapelController::class,'destroy'])->name('setting.delete');
    
    //setting kelas

    Route::get('/setting-kelas',[ClassroomController::class,'index'])->name('setting.kelas');
    Route::post('/setting-kelas',[ClassroomController::class,'store'])->name('kelas.store');
    Route::put('/setting-kelas/{classroom}',[ClassroomController::class,'update'])->name('kelas.update');
    Route::delete('/setting-kelas/{classroom}',[ClassroomController::class,'destroy'])->name('kelas.delete');

    Route::get('/setting-mapel',function(){
        return Inertia::render('Manajemen/Kelas',['title'=>'Setting']);
    })->name('setting.mapel');
});
