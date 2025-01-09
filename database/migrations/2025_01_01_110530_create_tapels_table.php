<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tapels', function (Blueprint $table) {
            $table->id();
            $table->year('tahunawal')->unique();
            $table->year('tahunakhir');
            $table->string('short');
            $table->string('long');
            $table->date('berlaku_at');
            $table->date('kadaluarsa_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tapels');
    }
};
