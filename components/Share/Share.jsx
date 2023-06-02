import React from 'react';
import Image from 'next/image';
import './Share.css';

const Share = () => {
    return (
        <div className='flex flex-col items-center w-11/12 h-screen ml-16 mt-20 info__card bg-blue-50'>
            <div className='flex items-center mt-24'>
                <p className=' text-2xl text-gray-600'>Let your friends, family, and co-workers (anonymously) rate your social skills.
                </p>
            </div>
            <div className='flex items-center'>
                <h1 className=' mt-20 text-6xl font-bold text-black'>Ever wondered what others think of you?</h1>

            </div>
            <div className='flex flex-row items-center justify-between gap-24 mt-16'>
                <div className='flex flex-col items-center strike-through'>
                    <Image
                        src='/assets/images/badge.png'
                        width={100}
                        height={100}
                        className='object-contain rounded-full'
                    />
                    <p className='text-center'>Answer questions on you social skills</p>
                </div>
                <div className='flex flex-col items-center strike-through'>
                    <Image
                        src='/assets/images/badge.png'
                        width={100}
                        height={100}
                        className='object-contain rounded-full'
                    />
                    <p className='text-center'>Let others anonymously answer the same <br /> questions about you</p>

                </div>
                <div className='flex flex-col items-center strike-through'>
                    <Image
                        src='/assets/images/badge.png'
                        width={100}
                        height={100}
                        className='object-contain rounded-full'
                    />
                    <p className='text-center'>Find out where you and others see things <br /> the same way - and where not!</p>
                </div>



            </div>
            <div className='mt-10'>
                <div className="time-line">
                    <div className="timeline-content bg-purple-700 text-white">
                        <div className="timieline-title">You</div>
                    </div>
                    <div className="timeline-content bg-blue-400 text-white">
                        <div className="timieline-title">Anonymous 1</div>
                    </div>
                    <div className="timeline-content bg-amber-400 text-white">
                        <div className="timieline-title">Anonymous 2</div>
                    </div>
                    <div className="timeline-content bg-emerald-400 text-white">
                        <div className="timieline-title">Anonymous 3</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Share