<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit | Categories') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

            @if($errors->any())
                <div>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

                <form action="{{ route('categories.update', ['category' => $category->id]) }}" method="POST" class="m-2">
                @csrf
                @method('PUT')
                <div>
                    <label class="text-gray-700" for="username">Name</label>
                    <input id="name" type="text" name="name" value="{{$category->name}}" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                </div>   
                    <button type="submit" class="px-6 py-2 my-4 font-medium tracking-wi text-white capitalize transition-colors duration-3transform bg-blue-600 rounded-lg hover:bg-blue-5focus:outline-none focus:ring focus:ring-blue-3focus:ring-opacity-80">
                    Submit</button>
            </div>
        </div>
    </div>
</x-app-layout>
