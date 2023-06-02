import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[25rem]'>
            <div>
                <Image
                    src='/assets/images/logo.png'
                    width={75}
                    height={75}
                    className='object-contain'
                />
                <h4 className=' font-semibold text-2xl text-indigo-600'>ahead</h4>
            </div>
            <div className='flex flex-row mr-12'>
                <div className='flex flex-row'>
                    <a href='https://maps.google.com/'>
                        <Image
                            src='/assets/images/location.png'
                            width={50}
                            height={50}
                            className='object-contain rounded-full'
                        />
                    </a>
                    <p className='mt-[18px]'>Augustraβe 26, 10117 Berlin</p>
                </div>
                <div className='flex flex-row mt-[4px] ml-12'>
                    <a href='mailto:hi@ahead-app.com'>
                        <Image
                            src='/assets/images/mail.png'
                            width={50}
                            height={50}
                            className='object-contain'
                        />
                    </a>
                    <p className='mt-[12px]'>hi@ahead-app.com</p>
                </div>
            </div>
            <div>
                <button className='flex items-center justify-center rounded-xl bg-black hover:bg-gray-700 ml-16 mt-12 px-2'>
                    <div>
                        <Image
                            src="/assets/images/apple.png"
                            alt="apple"
                            width={50}
                            height={50}
                            className='object-contain'
                        />
                    </div>
                    <div>
                        <p className='text-white text-xs font-light'>Download on the</p>
                        <p className='btn_text'>App Store</p>
                    </div>
                </button>

                <p className='text-gray-500 text-md font-medium mt-8'>©2022 Ahead app. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer