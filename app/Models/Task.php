<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //
    protected $fillable = [
        "name",
        "description",
        "type",
        "reward_yield"
    ];

    public function userTasks() {
        return $this->hasMany(UserTask::class);
    }
}
