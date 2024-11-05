import React, { useState } from 'react'
import { Loader2, PlusSquare } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../../components/ui/button'
import { v4 as uuidv4 } from 'uuid'
import GlobalApi from '../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState();
    const {user} = useUser();
    const [loading, setLoading]= useState(false);
    const navigation = useNavigate();

    const onCreate=async()=>{
      setLoading(true);
      const uuid = uuidv4();
      const data = {
        data:{
          title : resumeTitle,
          resumeId: uuid,
          userEmail: user.primaryEmailAddress.emailAddress,
          userName: user.fullName
        }
      }
      GlobalApi.CreateNewResume(data).then((resp)=>{
        if(resp){
          setLoading(false)
          console.log("pglaaaaaaaaaaaaaaaaaaaaaa reeeeeeeeeeeeeee pglaaaaaaaaaaaaaaaaaa")
          console.log(resp);
          navigation('/dashboard/resume/'+resp.data.data.documentId+'/edit')
        }
      }, (err)=>{
        setLoading(false);
      }); 
    }
    return (
    <div>
      <div className='ml-1.5 p-14 py-24 flex 
      justify-center items-center border 
      bg-secondary rounded-lg
      h-[250px] 
      hover:scale-100 transition-all hover:shadow-md 
      cursor-pointer border-dotted'
      onClick={()=>setOpenDialog(true)}>
        <PlusSquare/>
      </div>
          <Dialog open={openDialog}>
              <DialogContent>
                 
                      <DialogTitle>Create New Resume</DialogTitle>
                      <DialogDescription>
                        <p>Add a title to your resume</p>
                        <Input className='mt-2' placeholder='Ex. Full Stack Resume'
                        onChange={(e)=>setResumeTitle(e.target.value)}
                        />
                       </DialogDescription>
                      <div className='text-white flex justify-end gap-2'>
                        <Button onClick={()=>setOpenDialog(false)} variant='ghost'>Cancel</Button>
                        <Button 
                         disabled={!resumeTitle || loading}
                         onClick={()=>onCreate()}>
                          {
                            loading? 
                            <Loader2 className='animate-spin'/> :  "Create"
                          }
                          </Button>
                      </div>
                 
              </DialogContent>
          </Dialog>
    </div>
  )
}

export default AddResume
