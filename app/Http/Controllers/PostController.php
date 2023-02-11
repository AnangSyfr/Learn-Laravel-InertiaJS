<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $posts = Post::latest()->get();
        return inertia('Posts/Index',['posts'=> $posts]);
    }

    public function create(){
        return inertia('Posts/Create');
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        Post::create($request->all());

        return redirect()->route('posts.index')->with('success', 'Data berhasil disimpan!');
    }

    public function edit(Post $post){
        return inertia('Posts/Edit',['post'=>$post]);
    }

    public function update(Request $request, Post $post){
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $post->update($request->all());

        return redirect()->route('posts.index')->with('success', 'Data berhasil diupdate!');
    }

    public function destroy(Post $post){
        $post->delete();

        return redirect()->route('posts.index')->with('success','Data berhasil dihapus!');
    }
}
