<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Order;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    function index()
    {
        $orders = Order::where('status', '!=', 0)
        ->orderBy('created_at', 'desc')
        ->select('*')
            ->get();
        $total = Order::count();
        $result = [
            'status' => true,
            'orders' => $orders,
            'message' => 'Tai lieu thanh cong',
            'total' => $total
        ];
        return response()->json($result, 200);
    }

    function show($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $result = [
            'status' => true,
            'order' => $order,
            'message' => 'Tai du lieu thanh cong',
        ];
        return response()->json($result, 200);
    }

    function store(Request $request)
    {
        $order = new Order();
        $order->user_id = $request->user_id;
        $order->delivery_name = $request->delivery_name;
        $order->delivery_gender = $request->sort_order;
        $order->delivery_gender = $request->delivery_gender;
        $order->delivery_email = $request->delivery_email;
        $order->delivery_phone = $request->delivery_phone;
        $order->delivery_address = $request->delivery_address;
        $order->note = $request->note;
        $order->created_by = $request->created_by;
        $order->created_at = date('Y-m-d H:i:s');
        $order->status = $request->status;
        if ($order()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Them du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    function update(Request $request, $id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }
        $order->user_id = $request->user_id;
        $order->delivery_name = $request->delivery_name;
        $order->delivery_gender = $request->sort_order;
        $order->delivery_gender = $request->delivery_gender;
        $order->delivery_email = $request->delivery_email;
        $order->delivery_phone = $request->delivery_phone;
        $order->delivery_address = $request->delivery_address;
        $order->note = $request->note;
        $order->updated_by = $request->updated_by;
        $order->status = $request->status;
        $order->updated_at = date('Y-m-d H:i:s');
        if ($order->save()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Cap nha du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    function status($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }
        $order->status = ($order->status == 1) ? 2 : 1;
        $order->updated_at = date('Y-m-d H:i:s');
        $order->updated_by = 1;
        if ($order->save()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Cap nhat du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Khong the cap nhat du lieu',
        ];
        return response()->json($result, 200);
    }

    function destroy($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $result = [
                'status' => false,
                'order' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        if ($order->delete()) {
            $result = [
                'status' => true,
                'order' => $order,
                'message' => 'Cap nha du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'order' => null,
            'message' => 'Khoong the them du lieu',
        ];
        return response()->json($result, 200);
    }

    public function getByUserId($id)
    {
        $userId = $id;

        if (!$userId) {
            return response()->json([
                'status' => false,
                'orders' => [],
                'message' => 'User ID is required',
            ], 400);
        }

        $orders = Order::where('user_id', $userId)
            ->orderBy('created_at', 'desc')
            ->get();

        $result = [
            'status' => true,
            'orders' => $orders,
            'message' => 'Tai du lieu thanh cong',
        ];
        return response()->json($result, 200);
    }

}