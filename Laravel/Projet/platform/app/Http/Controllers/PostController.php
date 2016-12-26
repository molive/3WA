<?php namespace App\Http\Controllers ;
       use Illuminate\Routing\Controller;
       use Illuminate\Http\Request;
       use App\Models\Post;
       use Auth ;
	   use Validator;
       class PostController extends Controller {
  
    public function  create()
    {
        return view('post/create') ;
    }
				
   public function  store(Request $request)
   {

         //$this->validate($request->input('content')
      
                    // Autre façon :
                  
				    $validator = Validator::make($request->all(), ['content' => 'required|max:12']);
				    
					if(!$validator->fails()){
					
						$post = new Post ;
						$post->content = $request->input('content') ;
						$post->user_id = Auth ::Id();
						$post->save() ;
						
						$request->session()->flash('success', 'Message publié avec succès ! ') ;  // On ajoute un message flash qui sera supprimé une fois affiché.
						return redirect('/post/create') ;
					}
					else
					return view('post/create')->withInput()->withErrors($validator);
					
					
					
        }
    }
