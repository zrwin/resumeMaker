import React, { useContext, useState } from 'react'
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext'

function PersonalDetailsForm() {
  
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    return (
    <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
      <h2 className='font-bold text-lg '>Personal Details</h2>
      <p>Get started with basic information</p>
    </div>
  )
}

export default PersonalDetailsForm
