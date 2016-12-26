<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

use App\Models\Category;

class CategoryController extends BaseController
{
    
	
	public function index()
	{
			
	
		$category = Category::where('id',5)->with('dady')->first();
		echo $category->dady->name;
	
	
		$categories = Category::root()->get();
		
		
		
		echo '<ul>';
		foreach($categories as $category){
		
			echo '<li>'.$category->name.'<ul>';
			
			foreach($category->children as $children) {
			
				echo '<li>'.$children->name.'</li>';
				
			}
			echo '</ul></li>';
		
		}
		
	}
	
}