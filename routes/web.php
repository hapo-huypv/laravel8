<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ContactController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/contact', [ContactController::class, 'show']);

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
// Route::get('user/{id?}', function ($id = null) {
//     if (!$id) {
//         return "Xin mời nhập id";
//     }

//     return "User id: $id";
// });
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/hapo', function() {
    return view('index');
});
