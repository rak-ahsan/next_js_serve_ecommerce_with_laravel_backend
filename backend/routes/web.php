<?php

use App\Http\Controllers\TestController;
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/home', [TestController::class, 'index']);

Route::get('test-email', function () {
    Mail::to('mdmosharoofhossain12@gmail.com')->send(new TestEmail());
});

Route::post('/upload', [TestController::class, 'uploadImages'])->name('upload.image');
Route::get('/upload', function () {
    return view('home');
});

Route::get('/test', [TestController::class, 'test']);
