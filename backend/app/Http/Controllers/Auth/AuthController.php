<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    // public function login(Request $request)
    // {
    //     if (!Auth::attempt($request->only('email', 'password'))) {
    //         return response()->json(['message' => "invalid"]);
    //     }
    //     try {
    //         $user = Auth::user();
    //         $token = $user->createToken("auth_token")->plainTextToken;

    //         $response = new Response();
    //         $response->cookie('token', $token);
    //         return response()->json([
    //             "message" => "Login successful",
    //             "access_token" => $token,
    //         ])->withCookie(cookie('token', $token));
    //     } catch (\Throwable $th) {
    //         return response()->json([
    //             "error" => "Unauthorized"
    //         ], 401);
    //     }
    // }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['error' => "Invalid credentials"], 401);
        }

        try {
            $user = Auth::user();
            $token = $user->createToken("auth_token")->plainTextToken;
            $response = response()->json([
                "message" => "Login successful",
                "user" => $user,
                "token" => $token,
            ], 200);
            $response->cookie('token', $token);
            return $response;
        } catch (\Throwable $th) {
            return response()->json([
                "error" => "Unauthorized"
            ], 401);
        }
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            if ($request->hasFile('image')) {
                $fileName = time() . '.' . $request->image->getClientOriginalExtension();
                $localPath = $request->image->move(public_path('images'), $fileName);
                $fullPath = asset('images/' . $fileName);
            }

            $data = User::create([
                'email' => $request->email,
                'password' => $request->password,
            ]);

            return response()->json(['message' => 'Record created successfully', 'data' => $data], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'An error occurred while processing your request', $th], 500);
        }
    }

    public function logout()
    {
        $user = Auth::user();

        if ($user) {
            $user->tokens()->delete();
        }

        return response()->json([
            "message" => "Logout successful"
        ]);
    }
}
