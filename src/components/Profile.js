import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_MY_PROFILE } from '../gqloperation/Queries'

export default function Profile() {
  const {loading,error,data} =useQuery(GET_MY_PROFILE)
  if(loading) return
  if(error){
    console.log(error)
  }
  return (
    <div className='container my-container'>
        <div className='center-align'>
        <img className="circle" style={{border:"2px solid", marginTop:"10px"}} src="https://robohash.org/Ram.png" width='200px' height='200px' alt='pic'/>
        <h5><b>Ram</b></h5>
        <h6>Email - abc@gmail.com</h6>
    </div>
    <h3 className='center-align'><b>Your Quotes</b></h3>
    <blockquote>
        <h6>If it works dont update it</h6>
    </blockquote>
    <blockquote>
        <h6>If it works then update it imediatly</h6>
    </blockquote>
    </div>
  )
}
