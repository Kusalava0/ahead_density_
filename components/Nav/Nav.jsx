import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='flex flex-row justify-around w-full mb-2 pt-4 pb-4'>
            <div>
                <Image
                    src="/assets/images/logo.png"
                    alt="Image"
                    width={60}
                    height={60}
                    className='object-contain rounded-xl'
                />
            </div>

            <div className='flex flex-row ml-4 mt-4'>
                <Link href="#">
                    <h4 className='nav-div'>Emotions</h4>

                </Link>
                <Link href="#">
                    <h4 className='nav-div'>Manifesto</h4>

                </Link>
                <Link href="#">
                    <h4 className='nav-div'>Self-awareness test</h4>

                </Link>
                <Link href="#">
                    <h4 className='nav-div'>Work With Us</h4>

                </Link>
            </div>

            <div>
                <button
                    type='button'
                    className='black_btn '
                >Download app
                </button>
            </div>
        </nav>
    )
}

export default Nav