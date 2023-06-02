import React from 'react';
import Image from 'next/image';

const Work = () => {
    return (


        <div className='flex flex-row justify-between ahead w-11/12 h-screen ml-16 info__card bg-violet-100'>
            <div className=' ml-14 mt-16 '>
                <h1 className='font-semibold text-6xl '>Work with us</h1>

                <div className='flex flex-col'>
                    <div className='bg-white px-8 py-8 mt-10 rounded-t-3xl'>
                        <Image
                            src='/assets/images/work.png'
                            alt='img'
                            width={75}
                            height={75}
                        />
                        <h3 className='text-2xl font-semibold text-gray-700'>About</h3>
                        <p className='text-2xl text-gray-600'>At ahead ouour goal is to make self-<br />improvement fun and lasting. We know theres<br />a way how t make it work. And thats what<br />aHead is all about!</p>
                    </div>

                    <div className='px-8 py-8 bg-orange-50 rounded-b-3xl'>
                        <h3 className='text-2xl font-semibold text-gray-700'>Product</h3>
                        <p className='text-2xl text-gray-600'>Sure, you could spend ages reading books or <br />sitting in seminars on how to become a better <br />spouse, parent, or manager - like we did...</p>
                    </div>

                </div>
            </div>

            <div className='mr-24 mt-16' >
                <h1 className=' font-semibold text-6xl text-indigo-600 text-end mr-16'>ahead</h1>

                <div className='flex flex-col ahead__flow'>
                    <div className='bg-white px-8 py-8 mt-10 rounded-3xl mr-16'>

                        <h3 className='text-lg font-bold text-gray-700 mb-4'>Power through, even when the <br /> going gets tough </h3>
                        <p className='text-lg font-medium text-gray-500'>We help you spot and work around <br />whatever stands in the way, be it bad<br />habits, feats, etc.</p>
                    </div>

                    <div className='px-8 py-8 bg-white mt-10 rounded-3xl mr-16'>
                        <h3 className='text-lg font-bold text-gray-700 mb-4'>Learn more about who you are <br /> and where you want to go</h3>
                        <p className='text-lg font-medium text-gray-500'>We ask the right questions to help you<br />better understand why you do things the <br />way you do.</p>
                    </div>
                    <div className='bg-white px-8 py-8 mt-10 rounded-3xl mr-16'>

                        <h3 className='text-lg font-bold text-gray-700 mb-4'>Play and grow together with <br /> others on the same journey</h3>
                        <p className=' text-lg font-medium text-gray-500'>Ahead feels like a game, not like a chore<br />See yourself grow everyday towards<br />achieving your goals.</p>
                    </div>

                    <div className='bg-white px-8 py-8 mt-10 rounded-3xl mr-16'>

                        <h3 className='text-lg font-bold text-gray-700 mb-4'>Power through, even when the <br /> going gets tough </h3>
                        <p className='text-lg font-medium text-gray-500'>We help you spot and work around <br />whatever stands in the way, be it bad<br />habits, feats, etc.</p>
                    </div>

                    <div className='px-8 py-8 bg-white mt-10 rounded-3xl mr-16'>
                        <h3 className='text-lg font-bold text-gray-700 mb-4'>Learn more about who you are <br /> and where you want to go</h3>
                        <p className='text-lg font-medium text-gray-500'>We ask the right questions to help you<br />better understand why you do things the <br />way you do.</p>
                    </div>
                    <div className='bg-white px-8 py-8 mt-10 rounded-3xl mr-16'>

                        <h3 className='text-lg font-bold text-gray-700 mb-4'>Play and grow together with <br /> others on the same journey</h3>
                        <p className='text-lg font-medium text-gray-500'>Ahead feels like a game, not like a chore<br />See yourself grow everyday towards<br />achieving your goals.</p>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Work