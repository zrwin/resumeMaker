import { Brain } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar
} from 'react-simple-wysiwyg';
import { ResumeInfoContext } from '../../../../../../context/ResumeInfoContext';
import { toast } from 'sonner';
import { chatSession } from '../../../../../../../service/AIModel';

const PROMPT = "position title: {title} , depending on position title give 5-7 bullets points for resume summary as work experience, give the result in HTML format."

function RichTextEditor({ index, onRichEditorTextChange }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [value, setValue] = useState();
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList]= useState();
  const [loading,setLoading] = useState(false);
  const GenerateExperienceSummaryFromAI = async() => {
    setLoading(true);
    if (!resumeInfo.experience[index].title) {
      toast('Please Add Position Title')
      return;
    }
    const prompt = PROMPT.replace('{title}', resumeInfo.experience[index].title)
    const result = await chatSession.sendMessage(prompt);
    console.log(JSON.parse(result.response.text()))
    setAiGeneratedSummaryList(JSON.parse(result.response.text()))
    setLoading(false);
  }

  return (
    <div>
      <div className='flex justify-between'>
        <label className='text-sm pt-2.5'>Summary</label>
        <Button variant="outline" size='sm' className=' text-xs flex  gap-2 text-black mb-2'
          onClick={GenerateExperienceSummaryFromAI}
        ><Brain />Generate with AI</Button>
      </div>
      <EditorProvider>
        <Editor value={value} onChange={(e) => {
          setValue(e.target.value)
          onRichEditorTextChange(e)
        }}>
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting />
            <HtmlButton />
            <Separator />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor
