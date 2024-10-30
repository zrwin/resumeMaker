import React, { useState } from 'react'
import { Input } from '../../../../../../components/ui/input';
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react';

const formField = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '', 
    endDate: '',
    workSummary: ''
    
}

function ExperienceForm({enableNext}) {
    const [experienceList, setExperienceList] = useState([
        formField
    ]);

    const handleChange= (ind, e)=>{
        enableNext(false);
    }

    return (
        <div>
            <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
                <h2 className='font-bold text-lg '>Professional Experience</h2>
                <p>Add your job experience</p>
            </div>
        {
            experienceList.map((item, ind)=>(
                    <div>
                        <div key={ind} className='grid grid-cols-2 gap-3 border p-3 my-5 rounder-lg'>
                            <div>
                                <label className='text-xs'>Position Title</label>
                                <Input name='title' onChange={(e)=>handleChange(ind,e)}/>
                            </div>
                            <div>
                                <label className='text-xs'>Company Name</label>
                                <Input name='companyName' onChange={(e)=>handleChange(ind,e)}/>
                            </div>
                            <div>
                                <label className='text-xs'>City</label>
                                <Input name='city' onChange={(e)=>handleChange(ind,e)}/>
                            </div>
                            <div >
                                <label className='text-xs'>Start Date</label>
                                <Input type='date'  name='endDate' onChange={(e)=>handleChange(ind,e)}/>
                            </div>
                            <div>
                                <label className='text-xs'>End Date</label>
                                <Input type='date'  name='endDate' onChange={(e)=>handleChange(ind,e)}/>
                                
                            </div>
 
                        </div>
                    </div>
                ))
            }
            </div>
    )
}

export default ExperienceForm
