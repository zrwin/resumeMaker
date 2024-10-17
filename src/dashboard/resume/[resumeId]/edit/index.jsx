import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from './components/FormSection'
import ResumePreview from './components/ResumePreview'
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext'
import dummyData from '@/data/dummyData.jsx'
function Edit() {
    const params =useParams()
    const [resumeInfo, setResumeInfo]= useState();
    useEffect(()=>{
        console.log("hi");
        console.log(params)
        console.log(dummyData)
        setResumeInfo(dummyData);
    },[])
    
  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      {/* Form Section */}
        <FormSection/>      
      {/* Form Section */}
      {/* Preview Section */}
        <ResumePreview/>
      {/* Preview Section */}
      
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default Edit
