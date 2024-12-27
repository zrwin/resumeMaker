import React, { useState } from 'react'
import PersonalDetailsForm from './forms/PersonalDetailsForm'
import { ArrowLeft, ArrowRight, Palette } from 'lucide-react'
import {Button} from '@/components/ui/button'
import SummaryDetailsForm from './forms/SummaryDetailsForm'
import ExperienceForm from './forms/ExperienceForm'
import SkillsForm from './forms/SkillsForm'
import EducationForm from './forms/EducationForm'
import ViewResume from '../../../../../my-resume/documentId/view'
import { useParams } from 'react-router-dom'
import ThemeColor from './ThemeColor'
function FormSection() {

  const [activeFormIndex, setActiveIndexForm]= useState(1)
  const [enableNext ,setEnableNext]  = useState(true)  
  const params = useParams();
  return (
    <div>
      <div className='flex justify-between'>
        <ThemeColor/>
        <div className='flex gap-2'>
        {activeFormIndex>1 && <Button variant='secondary' onClick={()=>{setActiveIndexForm(activeFormIndex - 1)}}><ArrowLeft/></Button>}
        <Button variant="secondary" disabled={!enableNext} onClick={()=>{setActiveIndexForm(activeFormIndex + 1)}}>Next <ArrowRight/></Button>
      </div>

        </div>
       {
         activeFormIndex===1 ? 
        //  Personal Details
        <PersonalDetailsForm enableNext={(v)=>{setEnableNext(v)}}/>
        : activeFormIndex===2? 
        /* Summary */
        <SummaryDetailsForm enableNext={(v)=>{setEnableNext(v)}}/>
        : activeFormIndex===3?
        //Work Experience
        <ExperienceForm enableNext={(v)=>{setEnableNext(v)}} />
        : activeFormIndex ===4 ?  
        <EducationForm enableNext={(v)=> {setEnableNext(v)}} />
        : activeFormIndex ===5?
        <SkillsForm enableNext={(v)=>{setEnableNext(v)}} />
        : activeFormIndex === 6?
        <ViewResume documentId={params?.documentId}/> 
        : null
       }
       

       {/* {Education} */}

       {/* Skills */}


    </div>
  )
}

export default FormSection
