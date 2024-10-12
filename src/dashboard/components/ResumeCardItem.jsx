import { Notebook } from 'lucide-react'
import React from 'react'
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

function ResumeCardItem({ resume }) {
    return (

        <Link to={'/dashboard/resume/' + resume.documentId + "/edit"}>
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
                    {/* <Notebook/> */}
                    <img src="/src/assets/resume.png" width={100} height={100} />
                </div>
            </div>
            <div className='mx-2 border p-3 flex justify-center rounded-b-lg shadow-lg'
                style={{
                    background: resume?.themeColor
                }}>

                <h2 className='text-sm text-center mx-2 flex '>
                    {resume.title}
                </h2>
                <DropdownMenu>
                       
                            <DropdownMenuTrigger className="p-0 bg-white">
                            <MoreVertical size={15} color='blue'/>
                            </DropdownMenuTrigger>
                       
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div >


        </Link>
    )
}

export default ResumeCardItem
