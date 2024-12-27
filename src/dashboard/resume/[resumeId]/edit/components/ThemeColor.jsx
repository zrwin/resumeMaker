import React, { useContext, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Palette } from 'lucide-react'
import { ResumeInfoContext } from '../../../../../context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../../../../../service/GlobalApi'

function ThemeColor() {
    const colors=[
      "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
      "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371",
      "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733",
      "#5733FF", "#33FF5A", "#5A33FF", "#FF335A", "#335AFF"
  ]

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [selectedColor,setSelectedColor]=useState();
    const {documentId}=useParams();

    const OnColorSelect = (item)=>{
      console.log(item);
      setSelectedColor(item);
      setResumeInfo({
        ...resumeInfo,
        themeColor: item
      });
      const data = {
        data : {
          themeColor : selectedColor
        }
      }
     GlobalApi.UpdateResumeDetail(documentId, data).then((resp)=>{
        if(resp){
          console.log(resp);
          console.log('success');
        }
      }, (err)=>{
        console.log(err);
      })

    }

  return (
    <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary"><Palette/> Theme</Button>
          </PopoverTrigger>
          <PopoverContent className="w-100">
            <div className="grid gap-4">
              <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>
              <div className='grid grid-cols-5 gap-2 '>
                {
                  colors.map((item, ind)=>(
                    <div style={
                      {
                        background: item
                      }
                    }
                    onClick={()=>{
                      OnColorSelect(item)
                    }}  
                    className={`h-5 w-5 rounded-full cursor-pointer
                    ${selectedColor === item ? 'ring-2 ring-offset-1 ring-black' : ''}`}
                     key={ind}>
                    
                    </div>
                  )                 
                  )
                }
              </div>
            </div>
          </PopoverContent>
        </Popover>
    </div>
  )
}

export default ThemeColor
