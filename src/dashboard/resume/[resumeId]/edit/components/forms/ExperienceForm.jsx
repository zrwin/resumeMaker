import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../../../../components/ui/input';
import { Button } from '@/components/ui/button'
import RichTextEditor from './RichTextEditor';
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import GlobalApi from '../../../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';

const formField = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummary: ''

}

function ExperienceForm({ enableNext }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
    const [loading,setLoading] = useState(false);
    const [experienceList, setExperienceList] = useState([
        formField
    ]);
    const params =useParams();
    const handleChange = (ind, e) => {
        enableNext(false);
        const {name,value} = e.target; 
        const newEntries = experienceList.slice();
        newEntries[ind][name]= value;
        setExperienceList(newEntries);
        setResumeInfo({
            ...resumeInfo,
            experienceList 
        })
    }

    const AddExperience = () => {
        setExperienceList([...experienceList, formField]);
    }

    const RemoveExperience= ()=>{
        setExperienceList(experienceList=>experienceList.slice(0,-1))
    }

    const handleRTEChange = (e, name ,ind)=>{
        console.log(e.target.value);
        const newEntries= experienceList.slice();
        newEntries[ind][name]= e.target.value;
        setExperienceList(newEntries);
        
    }

    const handleSubmit = (e)=>{
        setLoading(true);
        console.log("HandleSubmit");
        setResumeInfo({
            ...resumeInfo,
            experienceList 
        })
        const data= {
            data: {
                experience: {...experienceList}
            }
        }
        console.log(data);
        // GlobalApi.UpdateResumeDetail(params?.documentId , data).then(resp=>{
        //     if(resp){
        //         console.log("success");
        //         enableNext(true);
        //         console.log(resp);
        //         setLoading(false);
        //     }
        // })
    }


    

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo, 
            experience: experienceList
        })
    }, [experienceList])

    return (
        <div>
            <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
                <h2 className='font-bold text-lg '>Professional Experience</h2>
                <p>Add your job experience</p>
            </div>
            {
                experienceList.map((item, ind) => (
                    <div  key={ind}>
                        <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounder-lg'>
                            <div>
                                <label className='text-xs'>Position Title</label>
                                <Input name='title' onChange={(e) => handleChange(ind, e)} />
                            </div>
                            <div>
                                <label className='text-xs'>Company Name</label>
                                <Input name='companyName' onChange={(e) => handleChange(ind, e)} />
                            </div>
                            <div>
                                <label className='text-xs'>City</label>
                                <Input name='city' onChange={(e) => handleChange(ind, e)} />
                            </div>
                            <div>
                                <label className='text-xs'>State</label>
                                <Input name='state' onChange={(e) => handleChange(ind, e)} />
                            </div>
                            <div >
                                <label className='text-xs'>Start Date</label>
                                <Input type='date' name='startDate' onChange={(e) => handleChange(ind, e)} />
                            </div>
                            <div>
                                <label className='text-xs'>End Date</label>
                                <Input type='date' name='endDate' onChange={(e) => handleChange(ind, e)} />

                            </div>
                            <div className="col-span-2">
                                <RichTextEditor index={ind}  onRichEditorTextChange={(e)=>{handleRTEChange(e,"workSummary",ind)}}/>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className='flex  justify-between mt-7'>
                <div  className='flex gap-4'>

                    <Button variant="outline" onClick={AddExperience} className='text-primary' > + Add More Experience </Button>
                    <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>
                </div>
                <Button type="submit" onClick={handleSubmit} disabled={loading}>
                    {loading? <LoaderCircle className='animate-spin'/> : 'Save'}
                </Button>
            </div>

        </div>
    )
}

export default ExperienceForm
