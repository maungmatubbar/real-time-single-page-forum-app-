<?php

namespace App\Exceptions;


use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpFoundation\Response;
use Throwable;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (TokenBlacklistedException $e, $request) {
            return response(['error'=>'Token cannot be used'],Response::HTTP_BAD_REQUEST);

        });
        $this->renderable(function(TokenInvalidException $e, $request){
            //return Response::json(['error'=>'Invalid token'],401);
            return response(['error'=>'Invalid token'],Response::HTTP_BAD_REQUEST);
        });
        $this->renderable(function(TokenExpiredException $e, $request){
            //return Response::json(['error'=>'Invalid token'],401);
            return response(['error'=>'Invalid Expired'],Response::HTTP_BAD_REQUEST);
        });
        $this->renderable(function (JWTException $e, $request) {
           return response(['error'=>'Token is not provided'],Response::HTTP_BAD_REQUEST);
        });
    }


}
