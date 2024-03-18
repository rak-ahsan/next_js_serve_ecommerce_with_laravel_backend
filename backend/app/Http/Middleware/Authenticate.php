<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo($request): ?string
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        } else {
            return route('login');
        }
    }


    // public function handle($request, Closure $next, ...$guards)
    // {
    //     if ($request->cookie('token')) {
    //         $request->headers->set('Authorization', 'Bearer ' . $request->cookie('token'));
    //     }

    //     $this->authenticate($request, $guards);
    //     return $next($request);
    // }
}
