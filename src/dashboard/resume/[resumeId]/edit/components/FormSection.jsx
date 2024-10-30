import React, { useState } from 'react'
import PersonalDetailsForm from './forms/PersonalDetailsForm'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {Button} from '@/components/ui/button'
import SummaryDetailsForm from './forms/SummaryDetailsForm'
import ExperienceForm from './forms/ExperienceForm'
function FormSection() {

  const [activeFormIndex, setActiveIndexForm]= useState(1)
  const [enableNext ,setEnableNext]  = useState(false)  
  return (
    <div>
      <div className='flex justify-between'>
        <Button variant="secondary">Theme</Button>
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
        : null
       }
       

       {/* {Education} */}

       {/* Skills */}


    </div>
  )
}

export default FormSection
