<?php

namespace App\Http\Controllers;

use App\Models\Identity;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (!auth()->attempt($validator->validated()))
        {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $userId = auth()->user()->user_id;
        $user = User::where('id', $userId)->first();
        $token = auth()->claims(['user_id' => $userId,
                                'first_name' => $user->first_name,
                                'last_name' => $user->last_name,
                                'email' => $user->identity->email,
                                'role' => $user->identity->role,
                                'phone_number' => $user->phone_number,
                                'address' => $user->address,
                                'api_key' => $user->api_key,
                                'secret_key' => $user->secret_key,
                                ])->attempt($validator->validated());

        return $this->createNewToken($token);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:100|unique:identities',
            'password' => 'required|string|min:6',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $validated_user = $validator->safe()->only(['first_name', 'last_name']);
        $validated_identity = $validator->safe()->only(['email']);

        $new_user = User::factory()->create($validated_user);
        $new_identity = Identity::factory()->create(array_merge(
            $validated_identity,
            [
                'password' => bcrypt($request->password),
                'user_id' => $new_user->id,
                'role' => 'USER'
            ]
        ));

        return response()->json([
            'message' => 'User successfully registered',
        ], 201);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function verifyAccessToken() {
        return response()->json(['message' => 'ok']);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){

        // $userId = auth()->user()->user_id;
        // $user = User::where('id', $userId)->first();

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            // 'identity' => auth()->user(),
            // 'user' => $user,
        ]);
    }

    public function changePassWord(Request $request) {
        $validator = Validator::make($request->all(), [
            'old_password' => 'required|string|min:6',
            'new_password' => 'required|string|confirmed|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $userId = auth()->user()->id;

        $user = User::where('id', $userId)->update(
                    ['password' => bcrypt($request->new_password)]
                );

        return response()->json([
            'message' => 'User successfully changed password',
            'user' => $user,
        ], 201);
    }
}
