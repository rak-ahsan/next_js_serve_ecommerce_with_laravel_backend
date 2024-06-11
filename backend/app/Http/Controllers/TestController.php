<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Throwable;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // try {
        //     if (Cache::has('test_data')) {
        //         $data = Cache::get('test_data');
        //         return response()->json($data);
        //         // return view('home', compact('data'));
        //     } else {
        //         $data = Test::orderBy('id', 'DESC')->get();
        //         Cache::put('test_data', $data, now()->addMinutes(10));
        //         return response()->json($data);
        //         // return view('home', compact('data'));

        //     }
        //     // return response()->json($data);
        // } catch (\Throwable $th) {
        //     return response()->json(['error', 'internal error']);
        // }

        return response()->json($data = Test::orderBy('id', 'DESC')->limit(100)->get());
        // return view('home', compact('data'));
    }


    public function loop()
    {
        $data = Test::orderBy('id', 'DESC')->paginate(50);
        return response()->json($data);
    }



    public function singleUser($id)
    {
        $data = Test::where('id', $id)->first();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */


    // public function store(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'password' => 'required',
    //         'email' => 'required',
    //         'image' => 'required'
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json(['errors' => $validator->errors()], 422);
    //     }

    //     try {

    //         if ($request->image) {
    //             $fileName = time() . '.' . $request->image->extension();
    //             $localPath = $request->image->move(public_path('images', $fileName));
    //             $fullPath = asset('images/' . $fileName);
    //         }
    //         $data = Test::create([
    //             'email' => $request->email,
    //             'password' => $request->password,
    //             'image' => $fullPath
    //         ]);

    //         return response()->json(['message' => 'Record created successfully', 'data' => $data], 201);
    //     } catch (\Throwable $th) {
    //         throw $th;
    //         return response()->json(['error' => 'An error occurred while processing your request'], 500);
    //     }
    // }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Example validation for image file
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

            $data = Test::create([
                'email' => $request->email,
                'password' => $request->password,
                'image' => $fullPath ?? null, // Use $fullPath if it's set, otherwise default to null
            ]);

            return response()->json(['message' => 'Record created successfully', 'data' => $data], 201);
        } catch (\Throwable $th) {
            // Log the exception for further investigation
            logger()->error($th);
            return response()->json(['error' => 'An error occurred while processing your request'], 500);
        }
    }



    /**
     * Display the specified resource.
     */
    public function show(Test $test)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Test $test)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)

    {
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            $data = Test::findOrFail($id);

            if (!$data) {
                return response()->json(['errors' => 'No Record Found'], 404);
            }
            $data->update([
                'email' => $request->email,
                'password' => $request->password,
            ]);

            return response()->json(['message' => 'Record updated successfully', 'data' => $data], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'An error occurred while processing your request'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $data = Test::findOrFail($id);
            $data->delete();
            return response()->json(['msg' => 'Destroy Successful'], 200);
        } catch (Throwable $th) {
            throw $th;
        }
    }

    public function uploadImage(Request $request)
    {
        try {
            $request->validate([
                'image' => 'required|image|max:1000',
            ]);

            $fileName = time() . '.' . $request->image->extension();
            $filePath = public_path('images/' . $fileName);
            if (file_exists($filePath)) {
                unlink($filePath);
            }
            $request->image->move(public_path('images'), $fileName);
            $path = asset('images/' . $fileName);
            return response()->json([
                'path' => $path,
            ]);
        } catch (Throwable $th) {
            throw $th;
        }
    }
}
