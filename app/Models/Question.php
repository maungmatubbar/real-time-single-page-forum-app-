<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    //over ride method By model
    protected static function boot()
    {
        //static::bootTraits();
        // User for slug
        parent::boot();
        static::creating(function($question){
            $question->slug = str_slug($question->title);
        });
    }
    public function getRouteKeyName()
    {
//        return parent::getRouteKeyName(); TODO: Change the autogenerated stub
        return 'slug';
    }
    protected $fillable = ['title','slug','body','category_id','user_id'];
    //protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
   }
   public function  replies(){
       return $this->hasMany(Reply::class);
   }
   public function  category(){
        return $this->belongsTo(Category::class);
   }
   public function getPathAttribute(){
        //return asset("api/question/$this->slug");
       // return "api/question/$this->slug";
       return "/question/$this->slug";
   }

    use HasFactory;

}
