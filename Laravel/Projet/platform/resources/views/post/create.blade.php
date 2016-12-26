@extends('layout')

@section('sidebar')
Contenu divers et varié…
@endsection

@section('content')
{!! Form::open() !!}

	{{ csrf_field() }}
	{!! Form::textarea('content', old('content')) !!}
	
	{!! Form::submit('Envoyer !') !!}

{!! Form::close() !!}
@endsection