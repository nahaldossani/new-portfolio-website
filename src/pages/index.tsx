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
  
  return {
    props: {}
  }
}