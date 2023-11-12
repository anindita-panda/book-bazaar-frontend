import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='flex flex-col mt-5'>
      <h1 className='font-bold text-5xl'>Dashboard</h1>
      <hr /> <br />
      <div className='flex justify-center items-center gap-5 mt-5'>
        <img src={user?.photoURL} alt="" className='h-32 w-32 rounded'/>
        <h2 className='font-bold text-4xl text-red-600'>{user?.displayName}</h2>
      </div>
    </div>

  )
}

export default Dashboard