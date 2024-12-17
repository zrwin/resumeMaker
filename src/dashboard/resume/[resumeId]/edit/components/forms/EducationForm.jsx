import { Input } from '../../../../../../components/ui/input';
import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext';
import dummyData from '../../../../../../data/dummyData';
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react';
import GlobalApi from '../../../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const formField = {
    
        universityName: '',
        degree: '', 
        major: '',
        startDate: '',
        endDate: '',
        description: ''
    
}

function EducationForm() {
    const [educationList , setEducationList] = useState([formField]);
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [loading,setLoading] = useState(false);
    const param = useParams();
  
    const handleSubmit = async (e )=>{
        console.log('handle submit');
        setLoading(true);
        setResumeInfo({
            ...resumeInfo,
            educationList
        })
        const data={
            data: {
                education: {...educationList}
            }
        }
       
     await GlobalApi.UpdateResumeDetail(param?.documentId,data).then(resp=>{
            if(resp){
                console.log('success');
                console.log(resp);
                setLoading(false);
            }
        }, (err)=>{
            console.log(err);
        })   
    }


    const handleChange = (ind, e) => {
        // enableNext(false);
        const {name,value} = e.target; 
        const newEntries = educationList.slice();
        newEntries[ind][name]= value;
        setEducationList(newEntries);
       
    }

    const AddEducation = ()=>{
        console.log('addd education');
        setEducationList([...educationList, {...formField}]);
    }
    
    const RemoveEducation= ()=>{
        if(educationList[0].title == ''){
            const newList=[];
            Object.values(resumeInfo?.education).map((item, ind)=>{
               newList.push(item);                    
            }) 
            setEducationList(newList);
        }
        else if(educationList.length == 1){
            setEducationList([{...formField}]);
        }
        else{
            setEducationList(educationList=>educationList.slice(0,-1));
        }   
    }

    useEffect(()=>{
       
       
            const newList=[];    
            if(educationList[0].universityName == ''){

                if(!resumeInfo?.education || resumeInfo?.education[0].universityName == ""){
                    console.log("instasdlkjf;ajsdk fjasdk;lf jasdkflsdajf klasdj fkl;sadj f");
                    Object.values(dummyData?.education).map((item)=>{
                        newList.push(item);
                    })
                }
                else{
                     Object.values(resumeInfo?.education).map((item, ind)=>{
                        
                        newList.push(item);                    
                     })
                }
                //  seteducationList(newList);
                setResumeInfo({
                    ...resumeInfo,
                    education: newList
                })
                // })
            }
        
        else{
            setResumeInfo({
                ...resumeInfo, 
                education: educationList
            })
            console.log('elseee');
            
        }
        
    }, [educationList])

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
                        <Input onChange={(e)=>{handleChange(ind, e)}} defaultValue={item?.universityName} name='universityName' />
                    </div>
                    <div>
                        <label className='text-xs'>Degree</label>
                        <Input onChange={(e)=>{handleChange(ind, e)}} defaultValue={item?.degree} name='degree' />
                    </div>
                    <div>
                        <label className='text-xs'>Start Date</label>
                        <Input type='date' onChange={(e)=>{handleChange(ind, e)}} defaultValue={item?.startDate} name='startDate' />
                    </div>
                    <div>
                        <label className='text-xs'>End Date</label>
                        <Input type='date' onChange={(e)=>{handleChange(ind, e)}} defaultValue={item?.endDate} name='endDate' />
                    </div>
                    <div>
                        <label className='text-xs'>Major</label>
                        <Input onChange={(e)=>{handleChange(ind, e)}} defaultValue={item?.major} name='major' />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-xs '>Description</label>
                        <Input onChange={(e)=>{handleChange(ind, e)}} defaultValue={item?.description} name='description' />
                    </div>

                </div>
    
                ))
            }
            
            <div className='flex  justify-between mt-7'>
                <div  className='flex gap-4'>

                    <Button variant="outline" onClick={AddEducation} className='text-primary' > + Add More Education </Button>
                    <Button variant="outline" onClick={RemoveEducation} className="text-primary"> - Remove</Button>
                </div>
                <Button type="submit" onClick={(e)=>{handleSubmit(e)}} disabled={loading}>
                    {loading? <LoaderCircle className='animate-spin'/> : 'Save'}
                </Button>
            </div>
        </div>
    )
}

export default EducationForm
