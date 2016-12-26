<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Category extends Eloquent
{


	protected $with = ['children'];

	public function children()
    {
	
        return $this->hasMany(Category::class, 'parent_id')->orderBy('name');
		
    }

	public function dady()
    {
	
        return $this->belongsTo(Category::class,'parent_id');
		
    }
	
    public function scopeRoot($query)
    {
        return $query->where('parent_id', null)->orderBy('name');
    }
	
}
