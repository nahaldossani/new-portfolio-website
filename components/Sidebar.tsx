import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div>
            <img src='avatar.svg' alt='user avatar' className='w-32 h-32 mx-auto rounded-full'></img>
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-green'>
                    Nahal&nbsp;
                </span>
                Dossani</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Web Developer</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' href='/CV.pdf' download><GiTie className="w-6 h-6" /> Download Resume</a>
            {/* Social icons */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href="">
                    <AiFillInstagram className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>

            {/* Address */}
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Karachi, Pakistan</span>
                </div>
                <p className='my-2'>nahal.dossani@gmail.com</p>
                <p className='my-2'>+923362341324</p>
            </div>
            {/* EMAIL BUTTON */}
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={() => window.open('mailto:nahal.dossani@gmail.com')}>Email Me</button>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400' onClick={changeTheme}>Toggle Theme</button>
        </div>
    )
}

export default Sidebar