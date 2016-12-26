<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Laravel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
    <body>
    		<nav><a href="{{ url('/login') }}">Login</a> <a href="{{ url('/register') }}">Inscription</a></nav>
<div class="raw">		
    <div class="col-md-4"> 
	@yield('sidebar')
	</div>
    <div class="col-md-8"> 
	
	{{ var_dump($errors->all()) }}
	@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
	@endif
	@yield('content')
	</div>
	</div>
    </body>
</html>
