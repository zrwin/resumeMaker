import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/custom/Header'
import { useParams } from 'react-router-dom'
import { Button } from '../../../components/ui/button';
import ResumePreview from '../../../dashboard/resume/[resumeId]/edit/components/ResumePreview';
import { ResumeInfoContext } from '../../../context/ResumeInfoContext';
import GlobalApi from '../../../../service/GlobalApi';
import { DownloadIcon, Loader2Icon, LoaderIcon } from 'lucide-react';
import { RWebShare } from 'react-web-share';

function ViewResume() {
  
  const {documentId} = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  const HandleDownload= ()=>{
    window.print();
  }


  useEffect(()=>{
    GetResumeInfo();
  }, [])

  const GetResumeInfo = ()=>{
    GlobalApi.GetUserResumeUsingResumeId(documentId).then((resp)=>{
      if(resp){
        console.log('success');
        console.log(resp);
        setResumeInfo({...resp.data.data[0]})
        console.log(resumeInfo);
      }
    })
  }
  
  return (
    <ResumeInfoContext.Provider  value={{resumeInfo,setResumeInfo}}> 
      <div id='not-print'>

      <Header/>
      <div className='my-10'>
            <h2 className='text-center text-xl font-medium'>Congrats! Your Resume is ready</h2>
            <div className='mt-4 flex justify-center gap-3'>
              <Button onClick={HandleDownload}><DownloadIcon size={18}/>&nbsp;Download</Button>
              <div>

              <RWebShare
                data={{
                  text: "fasfe",
                  url: import.meta.env.VITE_BASE_URL+'/my-resume/resume/'+documentId+'/view',
                  title: "Flamingos",
                }}
                onClick={() => console.log("shared successfully!")}
                >
                <Button>Share🔗</Button>
              </RWebShare>
                </div>
            </div>
      </div>
      </div>
            <div id='print-area' className='my-10 mx-10 md: mx-6 lg: mx-25'>
              <ResumePreview resumeInfo={resumeInfo}/>
            </div>
      
  </ResumeInfoContext.Provider>
  )
}

export default ViewResume
