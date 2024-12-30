<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Users') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

                @if($users && count($users) > 0)
                <section class="container px-4 mx-auto">
                    <div class="flex flex-col my-6">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-x-auto border border-gray-200 md:rounded-lg">
                                    <table class="w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>ID</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Name</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Email</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 pr-10 text-sm font-normal text-right text-gray-500">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                        @foreach($users as $user)
                                            <tr>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $user->id }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $user->name }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $user->email }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-right whitespace-nowrap">
                                                    <div class="inline-flex items-center gap-x-4">
                                                        <a href="{{ route('users.show', ['user' => $user->id]) }}" class="text-gray-500 hover:text-blue-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5C7.5 4.5 4 8 4 12s3.5 7.5 8 7.5 8-3.5 8-7.5-3.5-7.5-8-7.5zm0 10.5a3 3 0 100-6 3 3 0 000 6z" />
                                                            </svg>
                                                        </a>
                                                        <a href="{{ route('users.edit', ['user' => $user->id]) }}" class="text-gray-500 hover:text-green-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                            </svg>
                                                        </a>
                                                        <form action="{{ route('users.destroy', ['user' => $user->id]) }}" method="POST">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="text-gray-500 hover:text-red-500">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                @else
                <div class="w-full text-white bg-blue-500 mt-4">
                    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                        <div class="flex">
                            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V18.3333H21.6667V28.3333ZM21.6667 14.1666H18.3334V7.49997H21.6667V14.1666Z"/>
                            </svg>
                            <span class="ml-4 font-semibold text-md">No users found</span>
                        </div>
                    </div>
                </div>
                @endif
            </div>
        </div>
    </div>
</x-app-layout>
