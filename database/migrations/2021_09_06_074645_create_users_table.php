<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email', 255);
            $table->string('password', 255);
            $table->string('name', 255);
            $table->string('avatar', 255);
            $table->string('address', 255);
            $table->integer('phone');
            $table->string('intro', 255);
            $table->integer('deleted_at');
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));;
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP'));;
            $table->date('birthday');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
