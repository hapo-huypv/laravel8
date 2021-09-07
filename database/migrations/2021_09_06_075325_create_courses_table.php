<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('logo_path', 255);
            $table->string('description', 255);
            $table->string('intro', 255);
            $table->integer('learn_time');
            $table->bigInteger('quizzes');
            $table->bigInteger('price');
            $table->integer('deleted_at');
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));;
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP'));;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
