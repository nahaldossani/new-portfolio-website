import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import React from 'react';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
  <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20'>
    <div className='col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
      <Sidebar/>
    </div>
    <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  </div>
  </ThemeProvider>
  )
}

export default MyApp