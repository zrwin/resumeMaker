import React from 'react'
import Header from '../../../components/custom/Header'

function ViewResume({documentId}) {
    console.log(documentId);
  return (
    <div>
      <Header/>
      View REsume
      {documentId}
    </div>
  )
}

export default ViewResume
