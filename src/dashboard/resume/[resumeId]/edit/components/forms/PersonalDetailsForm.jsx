import React, { useContext, useState } from 'react'
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext'
import { Input } from '../../../../../../components/ui/input'
import {Button} from '@/components/ui/button'
import GlobalApi from '../../../../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'

function PersonalDetailsForm({enableNext}) {
  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
  const params= useParams()
  const [formData, setFormData] = useState();
  const [loading,setLoading] = useState(false);
  const handleInputChange = (e)=>{
      const {name,value}  = e.target;
      enableNext(false);
      setFormData({
        ...formData,
        [name]: value,
        
      })
      setResumeInfo(
        {
          ...resumeInfo,
          [name]: value
        }
      )
    }
    
    const onSave= (e)=>{
      e.preventDefault();
      setLoading(true);
      const data = {
        data: formData
      }
      console.log("meee");
      
      GlobalApi.UpdateResumeDetail(params?.documentId, data).then(resp=>{
        console.log("bye");
        console.log(resp);
        enableNext(true);
        setLoading(false);
        toast("Details updated.")

      },(error)=>{
        setLoading(true);
        console.log(data);
      })
    }

    return (
    <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
      <h2 className='font-bold text-lg '>Personal Details</h2>
      <p>Get started with basic information</p>
      
      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-3 gap-3'>
          <div>
            <label className='text-sm'  >First Name</label>
            <Input name="firstName" required defaultValue={resumeInfo?.firstName} onChange={handleInputChange}/>
          </div>
          <div>
            <label className='text-sm' >Last Name</label>
            <Input name="lastName" required defaultValue={resumeInfo?.lastName} onChange={handleInputChange}/>
          </div>
          <div className='col-span-2'>
            <label className='text-sm' >Job Title</label>
            <Input name="jobTitle" required defaultValue={resumeInfo?.jobTitle} onChange={handleInputChange}/>
          </div>
          <div className='col-span-2'>
            <label className='text-sm' >Address</label>
            <Input name="address" required defaultValue={resumeInfo?.address} onChange={handleInputChange}/>
          </div>
          <div>
            <label className='text-sm' >Phone</label>
            <Input name="phone" required defaultValue={resumeInfo?.phone} onChange={handleInputChange}/>
          </div>
          <div>
            <label className='text-sm' >Email</label>
            <Input name="email" required onChange={handleInputChange} defaultValue={resumeInfo?.email}/>
          </div>
        </div>
        <div className='mt-7 '>
          <Button type="submit" variant="secondary"
          disabled={loading} 
          > {loading? <LoaderCircle className='animate-spin'/> : 'Save'}</Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDetailsForm
