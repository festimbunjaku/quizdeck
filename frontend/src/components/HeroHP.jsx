import React from 'react';

function HeroComponent() {
  return (
    <>
        <section className="py-10 sm:py-16 lg:py-24 mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Your All in One
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-orange-500"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Learn Platform.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">QuizDeck is a modern platform for interactive learning with quizzes, flashcards, and note-taking. Users can explore diverse categories, track progress, and compete on leaderboards while personalizing their study experience.</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="/login" title="" className="rounded inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button">Log in</a>

                        <a href="register" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                           <svg width="28px" className='mr-2 fill-orange-500' viewBox="-1 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_plus_round [#000000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -2159.000000)" fill="#e09c3e"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M58.0831232,2004.99998 C58.0831232,2002.79398 56.2518424,2000.99998 54,2000.99998 C51.7481576,2000.99998 49.9168768,2002.79398 49.9168768,2004.99998 C49.9168768,2007.20598 51.7481576,2008.99998 54,2008.99998 C56.2518424,2008.99998 58.0831232,2007.20598 58.0831232,2004.99998 M61.9457577,2018.99998 L60.1246847,2018.99998 C59.5612137,2018.99998 59.1039039,2018.55198 59.1039039,2017.99998 C59.1039039,2017.44798 59.5612137,2016.99998 60.1246847,2016.99998 L60.5625997,2016.99998 C61.26898,2016.99998 61.790599,2016.30298 61.5231544,2015.66198 C60.2869889,2012.69798 57.3838883,2010.99998 54,2010.99998 C50.6161117,2010.99998 47.7130111,2012.69798 46.4768456,2015.66198 C46.209401,2016.30298 46.73102,2016.99998 47.4374003,2016.99998 L47.8753153,2016.99998 C48.4387863,2016.99998 48.8960961,2017.44798 48.8960961,2017.99998 C48.8960961,2018.55198 48.4387863,2018.99998 47.8753153,2018.99998 L46.0542423,2018.99998 C44.7782664,2018.99998 43.7738181,2017.85698 44.044325,2016.63598 C44.7874534,2013.27698 47.1076881,2010.79798 50.1639058,2009.67298 C48.7695192,2008.57398 47.8753153,2006.88998 47.8753153,2004.99998 C47.8753153,2001.44898 51.0234032,1998.61898 54.7339414,1999.04198 C57.422678,1999.34798 59.6500217,2001.44698 60.0532301,2004.06998 C60.4002955,2006.33098 59.4560733,2008.39598 57.8360942,2009.67298 C60.8923119,2010.79798 63.2125466,2013.27698 63.955675,2016.63598 C64.2261819,2017.85698 63.2217336,2018.99998 61.9457577,2018.99998 M57.0623424,2017.99998 C57.0623424,2018.55198 56.6050326,2018.99998 56.0415616,2018.99998 L55.2290201,2018.99998 C55.2290201,2019.99998 55.3351813,2020.99998 54.2082393,2020.99998 C53.6437475,2020.99998 53.1874585,2020.55198 53.1874585,2019.99998 L53.1874585,2018.99998 L51.9584384,2018.99998 C51.3949674,2018.99998 50.9376576,2018.55198 50.9376576,2017.99998 C50.9376576,2017.44798 51.3949674,2016.99998 51.9584384,2016.99998 L53.1874585,2016.99998 L53.1874585,2015.99998 C53.1874585,2015.44798 53.6437475,2014.99998 54.2082393,2014.99998 C54.7717103,2014.99998 55.2290201,2015.44798 55.2290201,2015.99998 L55.2290201,2016.99998 L56.0415616,2016.99998 C56.6050326,2016.99998 57.0623424,2017.44798 57.0623424,2017.99998" id="profile_plus_round-[#000000]"> </path> </g> </g> </g> </g></svg>
                            Register
                        </a>
                    </div>
                </div>

                <div>
                    <img src="../images/homeimg.jpg" alt="Student Learning" className='rounded h-[600px] pl-28' />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroComponent;
