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
            $data = File::json(public_path().'/data/bc-ps.txt');
        } else if ($type == 'ps') {
            $data = File::json(public_path().'/data/ps-bc.txt');
        } else if ($type == 'tm') {
            $data = File::json(public_path().'/data/tm-pk.txt');
        } else if ($type == 'pk') {
            $data = File::json(public_path().'/data/pk-tm.txt');
        }

        return response()->json([
            'data' => $data,
            'msg' => "Success"
        ], 200);
    }
}
