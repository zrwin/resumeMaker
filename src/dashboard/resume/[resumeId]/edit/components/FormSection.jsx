import React, { useState } from 'react'
import PersonalDetailsForm from './forms/PersonalDetailsForm'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {Button} from '@/components/ui/button'
function FormSection() {

  const [activeFormIndex, setActiveIndexForm]= useState(1)
    
  return (
    <div>
      <div className='flex justify-between'>
        <Button variant="secondary">Theme</Button>
        <div className='flex gap-2'>
        {activeFormIndex>1 && <Button variant='secondary' onClick={()=>{setActiveIndexForm(activeFormIndex - 1)}}><ArrowLeft/></Button>}
        <Button variant="secondary" onClick={()=>{setActiveIndexForm(activeFormIndex + 1)}}>Next <ArrowRight/></Button>
      </div>

        </div>
       {/* Personal Details */}
       {
        activeFormIndex===1 ? 
        <PersonalDetailsForm /> : null
       }
       {/* Summary */}
       {/* {
        activeFormIndex===2 ? 
        <PersonalDetailsForm /> : null
       } */}
       {/* {Work Experience} */}

       {/* {Education} */}

       {/* Skills */}


    </div>
  )
}

export default FormSection
