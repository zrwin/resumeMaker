import React, { useContext, useState } from 'react'
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext'
import { Input } from '../../../../../../components/ui/input'
import {Button} from '@/components/ui/button'

function PersonalDetailsForm() {
    const handleInputChange = (e)=>{

    }
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    return (
    <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
      <h2 className='font-bold text-lg '>Personal Details</h2>
      <p>Get started with basic information</p>
      
      <form>
        <div className='grid grid-cols-2 mt-3 gap-3'>
          <div>
            <label className='text-sm' >First Name</label>
            <Input name="firstName" required onChange={handleInputChange}/>
          </div>
          <div>
            <label className='text-sm' >Last Name</label>
            <Input name="LastName" required onChange={handleInputChange}/>
          </div>
          <div className='col-span-2'>
            <label className='text-sm' >Job Title</label>
            <Input name="LastName" required onChange={handleInputChange}/>
          </div>
          <div className='col-span-2'>
            <label className='text-sm' >Address</label>
            <Input name="LastName" required onChange={handleInputChange}/>
          </div>
          <div>
            <label className='text-sm' >Phone</label>
            <Input name="firstName" required onChange={handleInputChange}/>
          </div>
          <div>
            <label className='text-sm' >Email</label>
            <Input name="LastName" required onChange={handleInputChange}/>
          </div>
        </div>
        <div className='mt-7 '>
          <Button variant="secondary">Save</Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDetailsForm
