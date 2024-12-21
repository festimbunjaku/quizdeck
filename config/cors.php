<?php

return [
    /*
    |----------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |----------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers.
    |
    */
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'], 

    'allowed_origins' => [
        'http://127.0.0.1:8000', 
        'http://localhost:5173',  
        'http://localhost:5174',
        'http://localhost:5175',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];