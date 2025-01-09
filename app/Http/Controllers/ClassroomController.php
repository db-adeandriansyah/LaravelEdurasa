<?php

namespace App\Http\Controllers;


use App\Http\Requests\StoreclassroomRequest;
use App\Http\Requests\UpdateclassroomRequest;
use App\Models\Classroom ;
use Illuminate\Http\Request ;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classroom = Classroom::all();
        return Inertia::render('Manajemen/Kelas',['title'=>'Setting','data'=>$classroom]);
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
    public function store(StoreclassroomRequest $request)
    {
        
        Classroom::create($request->validated());
        return response()->json([
            'data' => Classroom::latest()->first()
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateclassroomRequest $request, Classroom $classroom)
    {
        $classroom->update($request->validated());
        return response()->json([
            'data' => $classroom
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom)
    {
        //
    }
}
