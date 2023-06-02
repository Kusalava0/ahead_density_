import React from 'react';
import Image from 'next/image';
import './SelfImprove.css'

const SelfImprove = () => {
    return (
        <div className='grid grid-flow-row w-11/12 ml-16 mt-32 mb-32 h-1/4 font-inter font-medium'>
            <div className=' ml-10 text-2xl'>
                <p>Wrong with self-improvement & how we're fixing it.</p>
            </div>
            <div className=' ml-10 text-6xl font-bold flex flex-row'>
                <p>Self-improvement. Ugh. </p>
                <Image
                    src='/assets/images/improve.png'
                    width={100}
                    height={100}
                    className='relative bottom-8'
                />
            </div>
            <div className='flex flex-col items-center mb-20 '>

                <section className='w-[800px] h-1/2'>
                    <div className='sticky top-0 bg-white py-3 z-10 shadow-xl shadow-white'></div>
                    <div className='timeline'>
                        <div className='relative'>
                            <div className='dot'></div>
                            <div className='pl-10'>
                                <h3 className='timeline-title'>It's not as easy as 1-2-3</h3>
                                <p className='text-gray-500'>
                                    The journey of change may be long but our sessions are quick. We get<br />
                                    to the point and tell you what you want to know(and nothing else)<br />
                                </p>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='dot'></div>
                            <div className='pl-10'>
                                <h3 className='timeline-title'>Old habits are hard to break.</h3>
                                <p className='text-gray-500'>
                                    And bad behaviours die hard. Fortunately, we give you great,<br />
                                    science-backed techniques to use.<br />
                                </p>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='dot'></div>
                            <div className='pl-10'>
                                <h3 className='timeline-title'>You and your motivation don't have a long-term relationship.</h3>
                                <p className='text-gray-500'>
                                    Luckily, we can proactively prepare you for the marathon not just the<br />
                                    race. Effective, memorable exercises will help you stick to your globals.<br />
                                </p>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='dot'></div>
                            <div className='pl-10'>
                                <h3 className='timeline-title'>Books just don't offer practical</h3>
                                <p className='text-gray-500'>
                                    Remember when you learned to ride a bike just by reading? Yeah, we don't either.<br />
                                    We help you take concrete small steps towards your goals. Learning just a bit, then <br />
                                    immediately sprinting into action
                                </p>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='dot'></div>
                            <div className='pl-10'>
                                <h3 className='timeline-title'>Inspiration is great. but then what.</h3>
                                <p className='text-gray-500'>
                                    We make sure energy from all the content you consume does not fizzle out.<br />
                                </p>
                            </div>
                        </div>


                    </div>

                </section>

            </div>

        </div>
    )
}

export default SelfImprove



// const timelineData = [
//     {
//       heading: 'It's not as easy as 1-2-3',
//       description: 'The journey of change may be long but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).',
//     },
//     {
//       heading: 'Old habits are hard to break.',
//       description: 'And bad behaviours die hard. Fortunately, we give you great, science-backed techniques to use.',
//     },
//     {
//       heading: 'You and your motivation don't have a long-term relationship.',
//       description: 'Luckily, we can proactively prepare you for the marathon not just the race. Effective, memorable exercises will help you stick to your globals.',
//     },{
//       heading: 'Inspiration is great. but then what.',
//       description: 'We make sure energy from all the content you consume does not fizzle out.',
//     },
//   ];