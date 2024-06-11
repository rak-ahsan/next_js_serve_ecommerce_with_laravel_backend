<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\TestController;
use App\Http\Middleware\AttachTokenCookie;
use App\Mail\TestEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/store', [TestController::class, 'store']);
    Route::get('/get-single-user/{id}', [TestController::class, 'singleUser']);
    Route::delete('/destroy-single-user/{id}', [TestController::class, 'destroy']);
    Route::put('/update-single-user/{id}', [TestController::class, 'update']);
    Route::post('/image-upload', [TestController::class, 'uploadImage']);
    Route::get('/log-out', [AuthController::class, 'logout']);
});


Route::get('/loop', [TestController::class, 'loop']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/registration', [AuthController::class, 'store']);

Route::get('test-email', function () {
    Mail::to('mdmosharoofhossain12@gmail.com')->send(new TestEmail());
});

Route::get('/get', [TestController::class, 'index']);
