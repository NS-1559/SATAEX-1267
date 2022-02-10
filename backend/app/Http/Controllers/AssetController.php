<?php

namespace App\Http\Controllers;
use App\Models\Asset;

class AssetController extends Controller
{

    // public function __construct() {
    //     $this->middleware('auth:api');
    // }

    public function getAllAssets()
    {
        return Asset::all();
    }
}
