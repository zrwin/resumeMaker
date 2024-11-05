import React from 'react'
import { 
    BtnBold,
    BtnItalic,
    Editor,
    EditorProvider,
    Toolbar
  } from 'react-simple-wysiwyg';

function RichTextEditor() {
  return (
    <div>
       <EditorProvider>
      <Editor value={value} onChange={onChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
        </Toolbar>
      </Editor>
    </EditorProvider>
    </div>
  )
}

export default RichTextEditor
