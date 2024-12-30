<div class="p-6 lg:p-8 bg-white  border-gray-200 flex gap-10">
    <x-application-mark class="block w-auto h-9" />

    <h1 class="mt-4  text-2xl font-medium text-gray-900">
        Welcome to QuizDeck Admin Panel!
    </h1>

   
</div>

<div class="px-6 pb-4">
<p class="text-gray-500 leading-relaxed">
        The QuizDeck Admin Panel is where you can efficiently manage categories, quizzes, questions. With an intuitive interface, you can oversee all aspects of content creation and user management to ensure an optimal experience for your users.
    </p>
</div>

<div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
    <div>
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-6 stroke-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <h2 class="ms-3 text-xl font-semibold text-gray-900">
                Quizzes Management
            </h2>
        </div>

        <p class="mt-4 text-gray-500 text-sm leading-relaxed">
            Create and manage quizzes, assign categories, and set up quiz timings. As an admin, you can oversee all quiz content and ensure that quizzes are appropriately structured for users to test their knowledge.
        </p>

        <p class="mt-4 text-sm">
            <a href="{{ route('quizes.index') }}" class="inline-flex items-center font-semibold text-indigo-700">
                Manage Quizzes

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 size-5 fill-indigo-500">
                    <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                </svg>
            </a>
        </p>
    </div>

    <div>
        <div class="flex items-center">
        <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13" stroke="#aaacb1" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="12" cy="16" r="1" fill="#aaacb1"></circle> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#aaacb1" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            <h2 class="ms-3 text-xl font-semibold text-gray-900">
                Question Management
            </h2>
        </div>

        <p class="mt-4 text-gray-500 text-sm leading-relaxed">
            Manage and categorize quiz questions. You can add, update, or delete questions, assign them to appropriate quizzes, and ensure the quality of the questions for each category.
        </p>

        <p class="mt-4 text-sm">
            <a href="{{ route('questions.index') }}" class="inline-flex items-center font-semibold text-indigo-700">
                Manage Questions

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 size-5 fill-indigo-500">
                    <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                </svg>
            </a>
        </p>
    </div>

    
</div>
