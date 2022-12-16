import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SIGNUP_USER } from '../gqloperation/mutations'

export default function Signup() {
    const navigate = useNavigate()
    const[formData,setFormData] = useState({})
   const[signupUser , {data,loading,error}] = useMutation(SIGNUP_USER)
   if(loading) return <h1>loading...</h1>
  
    const handleChange = (e) =>{
        setFormData({
        ...formData,
        [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        signupUser({
            variables:{
                userNew:formData
            }
        })
        // navigate("/Login")
    }
  return (
    <div className='container my-container'>
        {
            error &&
            <div className='red card-panel'>{error.message}</div>
        }

        {
             data && data.user &&
             <div className='green card-panel'>{data.user.firstName}is signedUp.Now Login </div>
        }

        <h5>Signup!</h5>
        <form onSubmit={handleSubmit}>
            
            <input
            type="text"
            placeholder='First Name'
            name='firstName'
            onChange={handleChange}
            required
            />

            <input
            type="text"
            placeholder='Last Name'
            name='lastName'
            onChange={handleChange}
            required
            />

             <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={handleChange}
            required
            />

            <input
            type="password"
            placeholder='Password'
            name='password'
            onChange={handleChange}
            required
            />
            <Link to="/Login"><p>If Don't have an Account ? click on the link</p></Link>
            <button className='btn #673ab7 deep-purple' type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}
