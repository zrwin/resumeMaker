import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {

  const { user, isSignedIn } = useUser();

  return (
    <div className='px-1 p-2 flex justify-between shadow-md'>
      <img className='p-1' src="/logo.svg" height={40} width={40} />

      {
        isSignedIn ?
        <div className='flex gap-2 p-2'>
          <Link to={'/dashboard'}>
            <Button>Dashboard</Button>
          </Link>
            <UserButton/>
        </div>
          :
          <Link to={'auth/signIn'}>
            <Button variant="outline">Get Started</Button>
          </Link>
      }
    </div>


  )
}

export default Header
