import React, { useContext, useState } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import { ResumeInfoContext } from '../../../../../context/ResumeInfoContext'
import SummaryPreview from './preview/SummaryPreview'
import WorkExperience from './preview/WorkExperience'
import EducationalPreview from './preview/EducationalPreview'
import SkillPreview from './preview/SkillPreview'

function ResumePreview() {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    const [experience, setExperience] = useState()

    if(resumeInfo?.experience){
        console.log("INse3asjfl redsuume preview");
        console.log(resumeInfo?.experience);
    }

    return (
        <div className='shadow-lg h-full p-14 border-t-[5px] '
        style={{
            borderColor:resumeInfo?.themeColor 
        }}>
            {/* Personal Details */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />    
            {/* Summary */}
            <SummaryPreview resumeInfo={resumeInfo} />
            {/* Work Experience  */}
            <WorkExperience resumeInfo={resumeInfo} experience={experience}/>
            {/* Educational Preview */}
            <EducationalPreview resumeInfo={resumeInfo} />
            {/* Skill Preview */}
            <SkillPreview resumeInfo={resumeInfo} />
        </div>
    )
}

export default ResumePreview
