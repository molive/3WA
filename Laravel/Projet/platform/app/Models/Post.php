<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Post extends Eloquent
{

	protected $with = ['author'];  // A chaque fois qu'on récupérera un post on joindra les infos de son auteur

	public function author()
    {
	
        return $this->belongsTo('App\User');  // Laravel fera une jointure de table pour récupérer les infos de l'auteur associé à la clé étrangère user_id
		
    }
	
}
