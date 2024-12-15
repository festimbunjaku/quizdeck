<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create Question') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <form action="{{ route('questions.store') }}" method="POST" class="m-2">
                    @csrf
                    
                    <div>
                        <label class="text-gray-700" for="quiz_id">Quiz</label>
                        <select name="quiz_id" id="quiz_id" class="rounded" required>
                            @foreach($quizzes as $quiz)
                                <option value="{{ $quiz->id }}" 
                                    {{ old('quiz_id', $question->quiz_id ?? '') == $quiz->id ? 'selected' : '' }}>
                                    {{ $quiz->title }}
                                </option>
                            @endforeach
                        </select>
                    </div>


                    <div class="mt-4">
                        <label class="text-gray-700" for="question">Question</label>
                        <input id="question" type="text" name="question" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required>
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_a">Option A</label>
                        <input id="option_a" type="text" name="option_a" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required>
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_b">Option B</label>
                        <input id="option_b" type="text" name="option_b" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required>
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_c">Option C</label>
                        <input id="option_c" type="text" name="option_c" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required>
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="option_d">Option D</label>
                        <input id="option_d" type="text" name="option_d" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required>
                    </div>

                    <div class="mt-4">
                        <label class="text-gray-700" for="correct_option">Correct Option</label>
                        <select name="correct_option" id="correct_option" class="rounded" required>
                            <option value="A">Option A</option>
                            <option value="B">Option B</option>
                            <option value="C">Option C</option>
                            <option value="D">Option D</option>
                        </select>
                    </div>

                    <div class="mt-4">
                        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">Create Question</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
