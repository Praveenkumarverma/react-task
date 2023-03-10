// import { fieldNameFromStoreName  } from '@apollo/client/cache'
import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_QUOTES } from '../gqloperation/Queries'

export default function Home() {
 const {loading,error,data} = useQuery( GET_ALL_QUOTES)

 if(loading) return <h1>loading...</h1>
 if(error){
  console.log(error.message)
 }
 if(data.quotes.length == 0){
  return <h2>No Quotes Available here</h2>
 }
  return (
    <div className='container'>
      {
        data.quotes.map(quote=>{
          return(
              <blockquote>
                   <h6>{quote.name}</h6>
                   <p className="right-align">~{quote.by.firstName}</p>
               </blockquote>
          )
        })
      }

    </div>
  )
}
