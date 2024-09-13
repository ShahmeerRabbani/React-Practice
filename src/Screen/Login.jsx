import { Box, Button, TextField } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, database } from '../Components/Config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const handleSubmit =async () => {
   await signInWithEmailAndPassword(auth, email, password)
    .then( async(UserCredential) =>{

      const UID = UserCredential.user.uid

      localStorage.setItem('userId', UID)
     
      const getData =await getDoc(doc(database, 'users', UID))

      localStorage.setItem('userInfo', JSON.stringify(getData.data()))

      navigate('/home')
      
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='Login-Page'>
      <Box sx={{
        width: 500,
        height: '80%',
        borderRadius: 1,
        boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: '0 auto',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3
      }}>
        <TextField onChange={(e) => setEmail(e.target.value)} type='email' label='email' variant='outlined'/>
        <TextField onChange={(e) => setPassword(e.target.value)} type='password' label='password' variant='outlined'/>
        <Button variant='contained' sx={{height: 50}} onClick={handleSubmit}>Submit</Button>
        <p>
            Don't have an account? <Link  to='/signUp'>Sign Up</Link>

        </p>
      </Box>
    </div>
  )
}

export default Login
