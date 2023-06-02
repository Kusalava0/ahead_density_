'use client'
import React, { useState } from 'react';
import './Vacancies.css'

const Vacancies = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleClick = (index) => {
        setExpandedCard((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='flex flex-col w-11/12 h-[540px] justify-center mt-24 mb-24 ml-16'>
            <div className='ml-12'>
                <h1 className='text-4xl font-bold'>Open Vacancies</h1>
            </div>

            <div className='flex flex-row justify-around'>
                <div
                    className={`bg-orange-50 px-8 py-8 mt-10 rounded-3xl vacancy__card ${expandedCard === 0 ? 'expanded' : ''
                        }`}
                    onClick={() => handleClick(0)}
                >
                    <h3 className='text-xl font-semibold text-gray-800'>Senior Full-Stack Engineer</h3>
                    <br />
                    <ul className='list-disc ml-6'>
                        <li>Full-time position</li>
                        <li>Berlin or remote</li>
                        <li>€65k-85k, 0.5-1.50% equity share options</li>
                    </ul>

                    {expandedCard === 0 && (
                        <button className='flex items-center justify-center rounded-xl black_btn mt-12 py-3 px-6'>
                            <p>See details</p>
                        </button>
                    )}
                </div>
                <div className={`bg-orange-50 px-8 py-8 mt-10 rounded-3xl vacancy__card ${expandedCard === 0 ? 'expanded' : ''
                    }`}
                    onClick={() => handleClick(0)}>

                    <h3 className='text-xl font-semibold text-gray-800'>Senior Designer</h3>
                    <br />

                    <ul className='list-disc ml-6'>
                        <li> Full-time position</li>
                        <li> Berlin or remote</li>
                        <li> €40k-55k, 0.5-1.50% equity share options </li>
                    </ul>
                    {expandedCard === 0 && (
                        <button className='flex items-center justify-center rounded-xl black_btn mt-12 py-3 px-6'>
                            See details
                        </button>
                    )}
                </div>
                <div className={`bg-orange-50 px-8 py-8 mt-10 rounded-3xl vacancy__card ${expandedCard === 0 ? 'expanded' : ''
                    }`}
                    onClick={() => handleClick(0)}>

                    <h3 className='text-xl font-semibold text-gray-800'>Superstar Intern</h3>
                    <br />
                    <ul className='list-disc ml-6'>
                        <li> Full-time position</li>
                        <li> Berlin or remote</li>
                        <li> €20k-24k, 0.5-1.50% equity share options </li>
                    </ul>
                    {expandedCard === 0 && (
                        <button className='flex items-center justify-center rounded-xl black_btn mt-12 py-3 px-6'>
                            See details
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Vacancies

