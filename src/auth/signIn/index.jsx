import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

function SignInPage() {
  return (
    <div className='flex justify-center items-center h-dvh'>
      <SignIn/>
    </div>
  )
}

export default SignInPage
