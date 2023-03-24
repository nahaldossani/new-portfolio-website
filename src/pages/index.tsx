import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { services } from '../../data'

const index = ({services}) => {
  console.log(services)
  return (
    <>
      <div>Bye Bye World</div>
    </>
  )
}

export default index

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  //calculation
  const res = await fetch('https://nahaldossani-didactic-fiesta-wqxppvx95wqcq67-3000.preview.app.github.dev/api/services')
  const data = await res.json()
  
  return {
    props: {
      services: data.services,
    }
  }
}