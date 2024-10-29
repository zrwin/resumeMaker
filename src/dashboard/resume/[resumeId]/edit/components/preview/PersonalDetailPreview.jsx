import React from 'react'

function PersonalDetailPreview({resumeInfo}) {
  return (
    <div>
        <h2 className='font-bold text-center text-xl'
         style={
          {
            color: resumeInfo?.themeColor
          }
         }>
          {resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 className='text-center text-sm font-medium'>{resumeInfo?.jobTitle}</h2>
        <h2 className='text-center font-normal text-xs'>{resumeInfo?.address}</h2>
        <div className='flex justify-between'>
            <h2 className='text-xs font-normal' style={{ color: resumeInfo?.themeColor}}>{resumeInfo?.phone}</h2>
            <h2 className='text-xs font-normal' style={{ color: resumeInfo?.themeColor}}>{resumeInfo?.email}</h2>
        </div>
        <hr className='border-[1.5px] my-2'/>
    </div>
    
  )
}

export default PersonalDetailPreview
