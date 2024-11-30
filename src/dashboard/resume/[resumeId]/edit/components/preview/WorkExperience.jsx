import React from 'react'
import dummyData from '@/data/dummyData.jsx'

function WorkExperience({ resumeInfo }) {

    if(!resumeInfo?.experience){
        console.log('inside if')
        resumeInfo = dummyData
        console.log(resumeInfo)
    }   
    
    const experienceList = resumeInfo.experience;

    // const convertToArray =(experience)=>{
    //     Object.entries(experience).forEach((key, value)=>{
    //         experienceList[key] = value;
    //     })
    // }
    // convertToArray(resumeInfo?.experience);
    return (
        <div className='my-5'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{ color: resumeInfo?.themeColor }}>Professional Experience</h2>
            <hr className='border-[1.5px] my-2' />
            {
            Object.values(experienceList).map((experience, ind) => (
                
                <div key={ind}>
                    <h2 className='text-sm font-bold' style={{ color: resumeInfo?.themeColor }}>{experience?.title}</h2>
                    <h2 className='text-xs flex justify-between'> {experience?.companyName}, {experience?.city},
                        {experience?.state}
                        <span className='text-xs font-normal' style={{ color: resumeInfo?.themeColor }}>{experience?.startDate}-{experience?.currentlyWorking ? "Present" : experience?.endDate}</span></h2>
                    {/* <p className='text-xs my-2'>
                        {experience?.workSummary}
                    </p> */}
                    <div className='text-sm' dangerouslySetInnerHTML={{
                        __html: experience?.workSummary
                    }}>

                    </div>
                </div>

            )) 
            }
        </div>
    )
}

export default WorkExperience
