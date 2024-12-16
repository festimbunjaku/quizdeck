<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Questions') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    
                @if($question)
                <section class="container px-4 mx-auto">
                    <div class="mb-6 mt-2 ">
                        <h3 class="text-lg font-medium text-gray-700">Question ID / Title</h3>
                        <p class="text-sm text-gray-600">{{ $question->id }} / {{ $question->question }}</p>
                    </div>
                    <div class="flex flex-col mt-6">
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
                                                    <span>Quiz Name</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Question</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Option A</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Option B</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Option C</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Option D</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                    <span>Correct Option</span>
                                                </th>
                                                <th scope="col" class="py-3.5 px-4 pr-10 text-sm font-normal text-right text-gray-500">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->id }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->quiz->title }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->question }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->option_a }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->option_b }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->option_c }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->option_d }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                    <span>{{ $question->correct_option }}</span>
                                                </td>
                                                <td class="px-4 py-4 text-sm text-right whitespace-nowrap">
                                                    <div class="inline-flex items-center gap-x-4">
                                                        <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                            <a href="{{ route('questions.edit', ['question' => $question->id]) }}">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </a>
                                                        </button>

                                                        <form action="{{ route('questions.destroy', ['question' => $question->id]) }}" method="POST">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button class="text-gray-500 transition-colors duration-200 pr-5 pt-1 hover:text-yellow-500 focus:outline-none" type="submit">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                </svg> 
                                                            </button>
                                                        </form>

                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <a href="{{route('questions.create') }}">
                                    <button class="px-6 py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                        Create Question
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                @else
                <div class="w-full text-white bg-blue-500">
                    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                        <div class="flex">
                            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                                </path>
                            </svg>
                            <p class="mx-3">No questions found!</p>
                        </div>
                        <a href="{{route('questions.create') }}">
                            <button class="px-6 py-2 my-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Create Question
                            </button>
                        </a>
                    </div>
                </div>
                @endif
            </div>
        </div>
    </div>
</x-app-layout>
