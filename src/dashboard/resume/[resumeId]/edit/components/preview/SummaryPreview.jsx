import React from 'react'
import dummyData from './../../../../../../data/dummyData'
function SummaryPreview({resumeInfo}) {
  if(! resumeInfo?.summary){
    resumeInfo = dummyData
  }
  return (
    <div>
      <p className='text-xs'>
        {resumeInfo?.summary}
      </p>
    </div>
  )
}

export default SummaryPreview
