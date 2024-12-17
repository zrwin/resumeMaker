import React from 'react'
import dummyData from './../../../../../../data/dummyData'

function SkillPreview({resumeInfo}) {
  if(!resumeInfo?.skills){
    resumeInfo = dummyData
  }

  return (
    < div className='my-5'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{ color: resumeInfo?.themeColor }}>Skills</h2>
            <hr className='border-[1.5px] my-2' />
            <div className='flex justify-evenly font-normal text-xs' >
            
                {
                Object.values(resumeInfo?.skills).map((skill, ind)=>(
                    <span key={ind}>{skill }  </span>
                    )) 
                    
                  }
            </div>
    </div>

  )
}

export default SkillPreview
