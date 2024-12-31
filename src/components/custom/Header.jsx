import React from 'react'
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {

  const { user, isSignedIn } = useUser();
  const navigate =useNavigate();
  const handleImage =()=>{
    navigate('/');
  }

  return (
    <div className='px-1 p-2 flex justify-between shadow-md text-black'>
      <img onClick={handleImage} className='p-1' src="/logo.svg" height={40} width={40} />

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
            <Button variant="outline" >
              <div className='text-black'>
                Get Started 
              </div>
              </Button>
          </Link>
      }
    </div>


  )
}

export default Header
