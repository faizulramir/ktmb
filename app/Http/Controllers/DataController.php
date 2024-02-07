<?php

namespace App\Http\Controllers;

use File;
class DataController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function getData($type)
    {
        if ($type == 'bc') {
            $data = File::json('data/bc-t.txt');
        } else if ($type == 'tm') {
            $data = File::json('data/tm-pk.txt');
        }

        return response()->json([
            'data' => $data,
            'msg' => "Success"
        ], 200);
    }
}
