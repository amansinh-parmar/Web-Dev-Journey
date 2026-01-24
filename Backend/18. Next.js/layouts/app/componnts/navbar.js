import React from 'react'


export const Navbar = () => {

  return (
    <>
    <div>
        <ul className='text-2xl bg-purple-400 flex justify-around p-5'>
            <a href="/"><li className='list-none'> Home</li></a>
            <a href="/admin/login"><li className='list-none'> Admin</li></a>
            <a href="/about"><li className='list-none'> About</li></a>
            <a href="/contact"><li className='list-none'> Contact</li></a>
        </ul>
    </div>
    </>
  )
}
