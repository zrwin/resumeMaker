import { Cross, CrossIcon, Delete, Notebook, X } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from 'lucide-react';
import { ResumeInfoContext } from '../../context/ResumeInfoContext';

function ResumeCardItem({ resume }) {

    

    const HandleDelete =(e)=>{
        
        console.log('handleDelete');
    }

    return (
        <div>

        <Link to={'/dashboard/resume/' + resume?.documentId + "/edit"}>
            <div className='p-14 mx-2 bg-gradient-to-b
            from-pink-100 via-purple-200 to-blue-200
            h-[205px] 
            rounded-t-lg border-t-4
            hover:scale-100 transition-all hover:shadow-md shadow-primary'
                style={{
                    borderColor: resume?.themeColor
                }}
            
            >
                <div className='ml-2  flex 
                  items-center justify-center h-[120px]'>
                    <img src="/src/assets/resume.png" width={100} height={100} />
                </div>
            </div>
        </Link>
            <div className='mx-2 border p-3 flex justify-center rounded-b-lg shadow-lg'>

                <h2 className='flex items-center text-sm text-center mx-2 flex '>
                    {resume.title}
                </h2>
            
                <DropdownMenu > 
                    <DropdownMenuTrigger onClick={(e)=>{HandleDelete()}} className='bg-white p-1 text-black border-sky-300 '>:</DropdownMenuTrigger>
                    <DropdownMenuContent className='p-0 m-0 '>
                        <DropdownMenuItem className='flex justify-center p-2'  onClick={(e)=>{HandleDelete()}}>Delete &nbsp;<X size={15}/></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>


        
    )
}

export default ResumeCardItem
