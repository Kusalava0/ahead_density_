import React from 'react'

const Privacy = () => {
    return (
        <div className='flex flex-col items-center w-11/12 h-screen ml-16 mt-20 font-satoshi info__card bg-white'>
            <div>
                <p className=' mt-24 text-2xl font-medium text-gray-800'>We take privacy seriously</p>
            </div>
            <div>
                <p className=' mt-12 font-bold text-4xl text-gray-800'>Before you get started</p>
            </div>
            <div>
                <p className=' mt-6 text-2xl font-medium text-gray-600'>"We won't share your answers with anyone (and won't ever tell</p>
            </div>
            <div>
                <p className='text-2xl font-medium text-gray-600'> you which friends said what about you)"</p>

            </div>
            <div className=' mt-12 font-medium text-2xl text-gray-800'>
                with love, Team ahead
            </div>
            <div className=' mt-12 text-2xl text-gray-800'>
                <button
                    type='button'
                    className='black_btn '
                >Start a text
                </button>
            </div>
            <div>
                <p className=' mt-2 font-medium text-lg text-gray-600'>Take only 5 minutes</p>
            </div>
        </div>
    )
}

export default Privacy