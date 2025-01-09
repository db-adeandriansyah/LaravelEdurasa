<?php

namespace App\Http\Controllers;

use App\Models\Tapel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class TapelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
            $tapel = Tapel::orderBy('tahunawal','asc')->get();
            return Inertia::render('Manajemen/Tapel',['title'=>'Setting','data'=>$tapel]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) 
    {
       
        // dd($request);
        // $validator = Validator::make($request->all(),[
        //     'tahunawal'=>'required|min_digits:5',
        //     'tahunakhir' =>'required|max_digits:4',
        //     'long' =>'required|string',
        //     'short' =>'required|string',
        //     'berlaku_at' =>'required|date',
        //     'kadaluarsa_at' =>'required|date'
        // ]);
        // if($validator->fails()){
        //    return redirect('/settiing-tapel')->withErrors($validator);
        // };
        // $validated = $validator->validate();
        // Tapel::create($validated);
        // return response(Tapel::all());

        $valid = $request->validate([
            'tahunawal'=>'required|min_digits:4',
            'tahunakhir' =>'required|max_digits:4',
            'long' =>'required|string',
            'short' =>'required|string',
            'berlaku_at' =>'required|date',
            'kadaluarsa_at' =>'required|date'
        ]);

        Tapel::create($valid);
       
        return response()->json([
            'data'=>Tapel::latest()->first()
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tapel $tapel)
    {
        dd($tapel);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tapel $tapel)
    {
        
        $tapel->update($request->validate([
            'tahunawal'=>'required|min_digits:4',
            'tahunakhir' =>'required|max_digits:4',
            'long' =>'required|string',
            'short' =>'required|string',
            'berlaku_at' =>'required|date',
            'kadaluarsa_at' =>'required|date'
        ]));
        
        return response()->json([
            'state'=>true,
            'data' => $tapel,

        ]);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tapel $tapel)
    {
        $tapel->delete();
        return response()->json([
            'state'=>true,
            'data' => $tapel,

        ]);
    }
}
