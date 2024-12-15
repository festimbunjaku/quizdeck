<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit | Question') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

            @if($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                        <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md m-2 ">
                            <div class="flex items-center justify-center w-12 bg-red-500">
                            <svg class="w-6 h-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 " stroke="none" fill-rule="evenodd" fill="#ffffff"></path></g></svg>
                            </div>

                            <div class="px-4 py-2 -mx-3">
                                <div class="mx-3">
                                    <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                                    <p class="text-sm text-gray-600 ">
                                        {{$error}}
                                    </p>
                                </div>
                            </div>
                        </div>                        
                        @endforeach
                    </ul>
                </div>
            @endif
                <form action="{{ route('questions.update', ['question' => $question->id]) }}" method="POST" class="m-2">
                    @csrf
                    @method('PUT')

                    <div>
                    <label class="text-gray-700" for="quiz">Quiz</label>
                    <select name="quiz_id" id="quiz_id" class="rounded" required>
                        @foreach($quizzes as $quiz)
                            <option value="{{ $quiz->id }}" 
                                {{ old('quiz_id', $question->quiz_id) == $quiz->id ? 'selected' : '' }}>
                                {{ $quiz->title }}
                            </option>
                        @endforeach
                    </select>
                    <br><br>


                        <label class="text-gray-700" for="question">Question</label>
                        <input id="question" type="text" name="question" value="{{ old('question', $question->question) }}" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                    </div>  

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_a">Option A</label>
                        <input id="option_a" type="text" name="option_a" value="{{ old('option_a', $question->option_a) }}" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_b">Option B</label>
                        <input id="option_b" type="text" name="option_b" value="{{ old('option_b', $question->option_b) }}" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_c">Option C</label>
                        <input id="option_c" type="text" name="option_c" value="{{ old('option_c', $question->option_c) }}" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_d">Option D</label>
                        <input id="option_d" type="text" name="option_d" value="{{ old('option_d', $question->option_d) }}" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="correct_option">Correct Option</label>
                        <select name="correct_option" id="correct_option" class="rounded">
                            <option value="A" {{ old('correct_option', $question->correct_option) == 'A' ? 'selected' : '' }}>Option A</option>
                            <option value="B" {{ old('correct_option', $question->correct_option) == 'B' ? 'selected' : '' }}>Option B</option>
                            <option value="C" {{ old('correct_option', $question->correct_option) == 'C' ? 'selected' : '' }}>Option C</option>
                            <option value="D" {{ old('correct_option', $question->correct_option) == 'D' ? 'selected' : '' }}>Option D</option>
                        </select>
                    </div>

                    <div class="mt-4">
                        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">Update Question</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
