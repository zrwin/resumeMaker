import React from 'react'

function EducationalPreview({resumeInfo}) {
  return (

     < div className='my-5'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{ color: resumeInfo?.themeColor }}>Education</h2>
            <hr className='border-[1.5px] my-2' />
            { resumeInfo?.education ?
            resumeInfo?.education.map((education, ind)=>(
                <div key={ind}  className='my-3'>
                    <h2 className='font-bold text-sm'  style={{ color: resumeInfo?.themeColor }}>{education?.universityName}</h2>
                    <h2 className='flex justify-between text-xs font-normal' >{education?.degree} in {education?.major}
                    <span style={{ color: resumeInfo?.themeColor }}>{education?.startDate} - {education?.endDate}</span>
                    </h2>
                    <p className='text-sm font-normal my-2'>{education?.description}</p>
                </div>
            )) 
            : 'Please Add Education Details'
            }
        </div>

  )
}

export default EducationalPreview
