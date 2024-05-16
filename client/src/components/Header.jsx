import React from 'react'
import {Navbar} from 'flowbite-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className='border-b-2'>
        <Link to={"/"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DC Blogs</span>
        </Link>
    </Navbar>
  )
}

export default Header