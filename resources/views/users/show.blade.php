<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('User Details') }}
        </h2>
    </x-slot>

    <div class="container mx-auto mt-8">
        <h1 class="text-4xl font-bold text-center text-black mb-8">User Details</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Left Section: User Info and Edit Button -->
            <div class="bg-white p-6 rounded-lg shadow-md col-span-1">
                <h3 class="text-2xl font-semibold text-gray-500">User Information</h3>
                <div class="mt-4">
                    <p class="text-xl font-semibold">Name: {{ $user->name }}</p>
                    <p class="text-xl font-semibold">Email: {{ $user->email }}</p>
                </div>
                <div class="mt-6">
                    <a href="{{ route('users.edit', $user->id) }}" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800">
                        Edit Password
                    </a>
                </div>
            </div>

            <!-- Right Section: Stats and Completed Quizzes -->
            <div class="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                    <h3 class="text-2xl font-bold text-gray-500">Total Quizzes Taken</h3>
                    <p class="text-4xl font-semibold mt-4">{{ $totalQuizzesTaken->count() }}</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                    <h3 class="text-2xl font-bold text-gray-500">Completed Quizzes</h3>
                    <p class="text-4xl font-semibold mt-4">{{ $completedQuizzes->count() }}</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                    <h3 class="text-2xl font-bold text-gray-500">Leaderboard Rank</h3>
                    <p class="text-4xl font-semibold mt-4">{{ $rank }}</p>
                </div>
            </div>

        </div>

        <!-- Quizzes Table -->
        <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-500">All Quizzes</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full mt-4 text-left border-collapse">
                    <thead>
                        <tr>
                            <th class="border p-2">ID</th>
                            <th class="border p-2">Title</th>
                            <th class="border p-2">Score</th>
                            <th class="border p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($totalQuizzesTaken as $quiz)
                            <tr>
                                <td class="border p-2">{{ $quiz->id }}</td>
                                <td class="border p-2">{{ $quiz->title }}</td>
                                <td class="border p-2">{{ $quiz->pivot->score }}</td>
                                <td class="border p-2">{{ $quiz->pivot->completed ? 'Completed' : 'Not Completed' }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</x-app-layout>
