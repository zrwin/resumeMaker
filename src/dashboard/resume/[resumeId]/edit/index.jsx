import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Edit() {
    const params =useParams()

    useEffect(()=>{
        console.log(params)
    },[])
    
  return (
    <div>
      Edit
    </div>
  )
}

export default Edit
