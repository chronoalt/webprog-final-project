<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collectible extends Model
{
    //
    protected $fillable = [
        "name",
        "rarity",
        "image_path"
    ];

    public function userCollectibles() {
        return $this->hasMany(UserCollectible::class);
    }
}
