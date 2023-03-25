// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import { services } from '../../data'

const index = () => {
return(
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>As a skilled front-end developer, I have extensive experience in Next.js, Tailwind CSS, and TypeScript. I am currently preparing for my Matric exams in Computer Science, and I am eager to begin college in August. In addition to my proficiency in web development, I am also capable of creating high-quality Shopify eCommerce websites. With a passion for clean code and a keen eye for design, I am committed to delivering exceptional user experiences that help businesses succeed in today's competitive online marketplace.</h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-800' 
      style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I offer:</h6>
        <div className='grid gap-6 lg:grid-cols-2 '>
          {
            services.map(service=>(
              <div className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'>
            <ServiceCard service={service}/>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default index

// export const getStaticProps = async (context:GetStaticPropsContext)=>{
//   //calculation
//   const res = await fetch('https://nahal-dossani.vercel.app/api/services')
//   const data = await res.json()
//   console.log('SERVER', services);
  
//   return {
//     props: {
//       services:data.services,
//     },
//   }
// }