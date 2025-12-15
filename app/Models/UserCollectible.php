<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCollectible extends Model
{
    //
    protected $fillable = [
        "user_id",
        "collectible_id",
        "collected_at"
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function collectible() {
        return $this->belongsTo(Collectible::class);
    }
}
