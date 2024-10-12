import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem';


function Dashboard() {

  const {user} = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(()=>{
    user&&GetResumeList()
  },[user])

  const GetResumeList=  ()=>{ 
    GlobalApi.GetUserResumes(user.primaryEmailAddress.emailAddress)
    .then( resp => {
      setResumeList(resp.data.data);
      // console.log(resp.data.data);
    })
  }
  return (
    <div className='m-auto p-17 md:px-16 lg:px-32'>
      <h2 className='mt-2 font-bold text-3xl'>My Resume</h2>
      <p>Start Creating Your Perfect Resume Today...</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-3'>
        <AddResume/>
        {
         resumeList.length>0 && resumeList.map((resume, index)=>(

            <ResumeCardItem resume={resume} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
