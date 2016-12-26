<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/categories', 'CategoryController@index');	


Route::group(['middleware' => ['web']], function () 
{  
	
	Route::get('/post/create', 'PostController@create'); 
	Route::post('/post/create', 'PostController@store'); 
	 
});

Route::auth();

Route::get('/home', 'HomeController@index');
