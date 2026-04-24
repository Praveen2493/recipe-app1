import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-4 px-6 shadow bg-gray-900 text-white mb-2'>
        <h1 className='text-2xl font-bold'>🍽️ Recipe App</h1>

        <Link to='/' className='hover:text-yellow-400'>Home</Link>
    </div>
  )
}

export default Navbar
