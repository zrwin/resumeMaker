import React, { useContext, useEffect, useState } from 'react'
import { Input, } from '../../../../../../components/ui/input';
import { Button } from '@/components/ui/button'
import { LoaderCircle, PlusSquare } from 'lucide-react';
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from '../../../../../../../service/GlobalApi';

const formSkills =['React','Angular'];

function SkillsForm() {

  const [skills, setSkills]  = useState([...formSkills]);
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
  const [loading,setLoading] = useState(false);
  const params = useParams();
  const AddSkill =()=>{
    console.log('addskill');
    setSkills([...skills, '']);
  }


  const RemoveSkill = ()=>{
    setSkills([...skills.slice(0,-1)]);
  }

  const handleChange = (e, ind)=>{
    const {name, value } = e.target;
    const newSkill = skills.slice();
    newSkill[ind]=value;
    console.log(ind);
    console.log(newSkill);

    setSkills([...newSkill]);
  }

  const handleSubmit =async()=>{
    setLoading(true);
    const data = {
      data:
      {
        skills: {...skills}
      }
    }
   await GlobalApi.UpdateResumeDetail(params?.documentId, data).then((resp)=>{
      if(resp){
        console.log('success');
        console.log(resp);
        setLoading(false);
      }
    },(err)=>{console.log(err)});
  }



  useEffect(()=>{
    
    setResumeInfo({...resumeInfo, skills: {...skills}});

  },[skills])

  console.log(skills);
  return (
    <div>
      <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
          <h2 className='font-bold text-lg '>Skills Details</h2>
          <p>Add your skills</p>
      </div>
      {
        skills.map((item, ind)=>(
          <div key={ind} className='grid grid-cols-2 gap-3 border p-3 my-5 rounder-lg'>
            <div>
              <label className='text-xs' >Skill name</label>
              <Input onChange={(e)=>handleChange(e,ind)} defaultValue={item} name='skill'/>
            </div>
          </div>
        ))
      }
      <div className='flex justify-between mt-7'>
        <div className='flex justify-between gap-5'>
          <Button variant='secondary' onClick={AddSkill}>Add&nbsp;+</Button> 
          <Button variant='secondary' onClick={RemoveSkill}>Remove&nbsp;-</Button> 
        </div>
        <div>
        <Button type="submit" onClick={handleSubmit} disabled={loading}>
                    {loading? <LoaderCircle className='animate-spin'/> : 'Save'}
                </Button>
        </div>
      </div>
    </div>
  )
}

export default SkillsForm
