import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../service/GlobalApi'
import ResumeCardItem from './components/ResumeCardItem';
import { Input } from '../components/ui/input';
import { Button } from '@/components/ui/button'

function Dashboard() {

  const {user} = useUser();
  const [resumeList, setResumeList] = useState([]);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [userEmail, setUserEmail] = useState('');



  console.log('below is the userrrrrr')
  console.log(user);
  useEffect(()=>{
    user&&GetResumeList()
  },[user])

  const handleSubmit = () => {
    console.log(user);
  //   if (clerk.user) {
  //     const email = userEmail;

  //     clerk.user
  //       .createEmailAddress({ email })
  //       .then((response) => console.log(response))
  //       .catch((error) => console.log('An error occurred:', error.errors))
  //   }
  };


  const GetResumeList=  ()=>{ 
    if(user.primaryPhoneNumber.phoneNumber && !user.primaryEmailAddress){
      setShowEmailPrompt(true);
      console.log('withihgnsiafnids')
    }
    else{

      GlobalApi.GetUserResumes(user.primaryEmailAddress.emailAddress)
      .then( resp => {
        setResumeList(resp.data.data);
      },(err)=>{
        console.log(err);
      })
    }
  }
  return (
    <div className='m-auto sm:mx-5 px-17 md:px-20 lg:px-32'>
      <h2 className='mt-2 font-bold text-3xl'>My Resume</h2>
      <p>Start Creating Your Perfect Resume Today...</p>
      {
        showEmailPrompt ?
        <div className='p-2 mt-3 flex  justify-center flex-col'>
          <p className='font-bold pl-3 text-xl'>Follow the below steps:</p>
          <div className='m-2 pl-3'>
            <p>1. Click on the profile photo</p>
            <p>2. Select Manage account</p>
            <p>3. Connect Account</p>
            <p>4. Sign in with your preferred gmail account</p>
          </div>
        </div>
        :
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-3'>
          <AddResume/>
          {
          resumeList.length>0 && resumeList.map((resume, index)=>(

              <ResumeCardItem resume={resume} key={index} refreshData={GetResumeList}/>
            ))
          }
        </div>

      }
    </div>
  )
}

export default Dashboard
