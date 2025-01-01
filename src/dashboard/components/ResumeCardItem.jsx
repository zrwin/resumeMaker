import { X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import GlobalApi from '../../../service/GlobalApi'
import { toast } from 'sonner'
import resumePng from '../../assets/resume.png'
  

function ResumeCardItem({ resume , refreshData}) {

    const [openAlert , setOpenAlert] = useState(false);
    

    const HandleDelete =(e)=>{
        
        setOpenAlert(false);
        console.log('handleDelete');
        GlobalApi.DeleteResumeById(resume?.documentId).then((resp)=>{
            if(resp){
                console.log('Successfully deleted');
                console.log(resp);
                toast('Resume Deleted!');
                refreshData();
            }
        }, (err)=>{
            console.log(err);
        })
    }

    return (
      <div>
        <Link to={"/dashboard/resume/" + resume?.documentId + "/edit"}>
          <div
            className="p-14 mx-2 bg-gradient-to-b
            from-pink-100 via-purple-200 to-blue-200
            h-[205px] 
            rounded-t-lg border-t-4
            hover:scale-100 transition-all hover:shadow-md shadow-primary"
            style={{
              borderColor: resume?.themeColor,
            }}
          >
            <div
              className="ml-2  flex 
                  items-center justify-center h-[120px]"
            >
              <img src={resumePng} width={100} height={100} />
            </div>
          </div>
        </Link>
        <div className="mx-2 border p-3 flex justify-center rounded-b-lg shadow-lg">
          <h2 className="flex items-center text-sm text-center mx-2 flex ">
            {resume.title}
          </h2>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="bg-white p-1 text-black border-sky-300 "
            >
              :
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0 m-0 ">
              <DropdownMenuItem
                className="flex justify-center p-2"
                onClick={(e) => {
                  setOpenAlert(true);
                }}
              >
                Delete &nbsp;
                <X size={15} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialog open={openAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className='text-black' onClick={()=>{setOpenAlert(false)}}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={(e)=>{HandleDelete(e)}}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    );
}

export default ResumeCardItem
