import { Input } from '../../../../../../components/ui/input';
import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext';
import dummyData from '../../../../../../data/dummyData';
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react';

const formField = {
    0: {
        universityName: '',
        degree: '', 
        major: '',
        startDate: '',
        endDate: '',
        description: ''
    }
}

function EducationForm() {
    const [educationList , setEducationList] = useState({});
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [loading,setLoading] = useState(false);
    // setEducationList(dummyData.education)
    // console.log(resumeInfo);
    // setEducationList(formField)

    const handleSubmit = ()=>{
        console.log('handle submit');
    }

    const AddEducation = ()=>{
        console.log('addd education');
    }
    
    const RemoveEducation = ()=>{
        if(educationList)
        console.log('remove education');
        let entries = Object.entries(educationList);
        entries.pop();
        setEducationList(Object.fromEntries(entries)); 
        setResumeInfo({...resumeInfo, ...educationList});
    }

    useEffect(()=>{
        if(!resumeInfo.education){
            // setEducationList( {...resumeInfo?.education[0] });
            console.log(educationList);
            console.log('HI bayybybybby');
            setEducationList(dummyData.education);
            setResumeInfo({...resumeInfo, ...educationList});
        }
 
        else{
            setResumeInfo({...resumeInfo,...educationList});
            console.log(resumeInfo);
            // setEducationList({...resumeInfo?.education[0]});
        }
              
    }, [])

    return (
        <div>
                <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
                    <h2 className='font-bold text-lg '>Education Details</h2>
                    <p>Add your education details</p>
                </div>
            {
                Object.values(educationList).map((item, ind)=>(
                <div key={ind} className='grid grid-cols-2 gap-3 border p-3 my-5 rounder-lg'>

                    <div>
                        <label className='text-xs'>Univerity Name</label>
                        <Input name='universityName' />
                    </div>
                    <div>
                        <label className='text-xs'>Degree</label>
                        <Input name='degree' />
                    </div>
                    <div>
                        <label className='text-xs'>Start Date</label>
                        <Input name='startDate' />
                    </div>
                    <div>
                        <label className='text-xs'>End Date</label>
                        <Input name='endDate' />
                    </div>
                    <div>
                        <label className='text-xs'>Major</label>
                        <Input name='major' />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-xs '>Description</label>
                        <Input name='description' />
                    </div>

                </div>
    
                ))
            }
            
            <div className='flex  justify-between mt-7'>
                <div  className='flex gap-4'>

                    <Button variant="outline" onClick={AddEducation} className='text-primary' > + Add More Education </Button>
                    <Button variant="outline" onClick={RemoveEducation} className="text-primary"> - Remove</Button>
                </div>
                <Button type="submit" onClick={handleSubmit} disabled={loading}>
                    {loading? <LoaderCircle className='animate-spin'/> : 'Save'}
                </Button>
            </div>
        </div>
    )
}

export default EducationForm
