import React from 'react'
import Image from 'next/image'

const IntroCard = () => {
    return (
        <section className="w-11/12 h-screen ml-16 intro__card flex flex-row justify-center">
            <div className='text__div w-1/2 ml-16 mt-56 flex flex-col '>
                <div>
                    <div>
                        <h3> Ahead app</h3>
                        <h1 className='head_text'>Master your life<br /> by mastering <br /> emotions</h1>
                    </div>
                    <div className='flex flex-row'>
                        <button className='flex items-center justify-center rounded-xl bg-black hover:bg-gray-700 mt-12 py-3 px-6'>
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
                                <p className='desc'>Download on the</p>
                                <p className='btn_text'>App Store</p>
                            </div>
                        </button>
                        <div className='mt-14 ml-10'>
                            <Image
                                src="/assets/images/stars.png"
                                alt="stars"
                                width={200}
                                height={20}
                                className='object-contain'
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className='image__div w-1/2'>
                <img src='/assets/mobile-1.png' className='absolute bottom-24' />
                <div className="circle">
                </div>
            </div>
        </section>
    )
}

export default IntroCard