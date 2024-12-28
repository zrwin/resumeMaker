import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../../../../../../components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext'
import { Bot, BrainCircuit, LoaderCircle } from 'lucide-react';
import GlobalApi from '../../../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { chatSession } from '../../../../../../../service/AIModel';
import { toast } from 'sonner';



function SummaryDetailsForm({enableNext}) {
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState();
    const params= useParams();
    const [loading,setLoading] = useState(false);
    const [aiGeneratedSummaryList, setAiGeneratedSummaryList]= useState([]);
    const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format"

    const GenerateSummaryFromAI = async()=>{
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
        const result =await chatSession.sendMessage(PROMPT);
        console.log(result.response.text());
        setAiGeneratedSummaryList(JSON.parse(result.response.text()))
        setLoading(false);
    }
    useEffect(()=>{
       summary && setResumeInfo({
            ...resumeInfo,
            summary: summary
        })
        enableNext(true);
    }, [summary])

    const onSave = async(e)=>{
        e.preventDefault();
        setLoading(true);
        const data = {
          data: {
            summary: summary
          }
        }
        
    await GlobalApi.UpdateResumeDetail(params?.documentId, data).then(resp=>{
          enableNext(true);
          setLoading(false);
          toast("Details updated.")
  
        },(error)=>{
          setLoading(true);
        })
    }   

    return (
    <div>
    <div className='p-5 border-t-4 shadow-lg rounded-lg mt-10 border-t-primary' >
      <h2 className='font-bold text-lg '>Summary</h2>
      <p>Add Summary for your Job Title</p>
      <form className='mt-7'  onSubmit={onSave}>
            <div className='flex justify-between'>
                    <label>Add Summary</label>
                    <Button onClick={()=>{GenerateSummaryFromAI()}} className="border-primary text-primary flex gap-2" type="button" size="sm" variant="outline"><Bot/>Generate from AI</Button>
            </div>
            <Textarea 
            defaultValue={resumeInfo?.summary}
            onChange={(e)=>{setSummary(e.target.value)}}
            className="mt-5" />
                    <div className='mt-7 '>
          <Button type="submit" variant="secondary"
          disabled={loading} 
          > {loading? <LoaderCircle className='animate-spin'/> : 'Save'}</Button>
        </div>
      </form>
    </div>

    <div>
        {
            aiGeneratedSummaryList&& <div>
                <h2 className='font-bold text-lg mt-6'>Suggestions</h2>
                {
                    aiGeneratedSummaryList.map((item, ind)=>(
                        <div key={ind}>
                            <h2 className='font-bold my-2 ' key={ind}>Level: {item?.experience_level}</h2>
                            <p >{item?.summary}</p>
                        </div>
                ))}
            </div>
        }
    </div>

    </div>
    )
}

export default SummaryDetailsForm
