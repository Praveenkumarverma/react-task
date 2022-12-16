import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {LOGIN_USER} from '../gqloperation/mutations';

export default function Login() {
    const navigate = useNavigate()
    const[formData,setFormData] = useState({})
   const [signinUser,{error,loading,data}] =  useMutation(LOGIN_USER,{
    onCompleted(data){
        localStorage.setItem("token", data.user.token)
        navigate('/')
       }
        
})
   if(loading) return <h1>loading...</h1>
  
    const handleChange = (e) =>{
        setFormData({
        ...formData,
        [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
      signinUser({
        variables:{
            userSignin:formData
        }
      })
    }
  return (
    <div className='container my-container'>
         {
            error &&
            <div className='red card-panel'>{error.message}</div>
        }

        <h5>Login!</h5>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder='Email'
            name='email'
            // value={email}
            onChange={handleChange}
            required
            />

            <input
            type="password"
            placeholder='Password'
            name='password'
            // value={password}
            onChange={handleChange}
            required
            />
            <Link to="/Signup"><p>If Don't have an Account ? click on the link</p></Link>
            <button className='btn #673ab7 deep-purple' type='submit'>Login</button>
        </form>
    </div>
  )
}
