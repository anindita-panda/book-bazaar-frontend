import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, title, imageUrl} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src= {imageUrl} className='h-85' />
      <h2>{title}</h2>
    </div>
  )
}

export default SingleBook;