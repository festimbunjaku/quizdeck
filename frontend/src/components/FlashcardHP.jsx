import React from 'react'

function FlashcardHP() {
  return (
    <>
         <section className="py-10 sm:py-16 lg:py-24 mt-10 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <svg className='w-[450px]'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f97316"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 17.0601H12" stroke="#f97316" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Master your skills with
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-orange-500"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Flashcards.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">Create, review, and study your own set of flashcards to help reinforce knowledge on various topics, from languages to programming.</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="/flashcards" title="" className="rounded inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Use Flashcards </a>
                    </div>
                </div>

               
            </div>
        </div>
    </section>
    </>
  )
}

export default FlashcardHP
