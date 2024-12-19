import React from 'react'

function LeaderboardHP() {
  return (
    <div>
       <section className="py-10 sm:py-16 lg:py-24 mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Compete for the top spot on the
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-orange-500"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Leaderboard.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">See how you rank among other users in various quiz categories. Compete, improve your score, and aim for the top of the leaderboard!</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="/leaderboard" title="" className="rounded inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button">Check the Leaderboard</a>
                    </div>
                </div>

                <div>
                <svg className='orange-500' width="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z" stroke="#e08300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.4 21H15V18.1C15 17.7686 15.2686 17.5 15.6 17.5H20.4C20.7314 17.5 21 17.7686 21 18.1V20.4C21 20.7314 20.7314 21 20.4 21Z" stroke="#e08300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 21V16.1C9 15.7686 8.73137 15.5 8.4 15.5H3.6C3.26863 15.5 3 15.7686 3 16.1V20.4C3 20.7314 3.26863 21 3.6 21H9Z" stroke="#e08300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.8056 5.11325L11.7147 3.1856C11.8314 2.93813 12.1686 2.93813 12.2853 3.1856L13.1944 5.11325L15.2275 5.42427C15.4884 5.46418 15.5923 5.79977 15.4035 5.99229L13.9326 7.4917L14.2797 9.60999C14.3243 9.88202 14.0515 10.0895 13.8181 9.96099L12 8.96031L10.1819 9.96099C9.94851 10.0895 9.67568 9.88202 9.72026 9.60999L10.0674 7.4917L8.59651 5.99229C8.40766 5.79977 8.51163 5.46418 8.77248 5.42427L10.8056 5.11325Z" stroke="#e08300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default LeaderboardHP
