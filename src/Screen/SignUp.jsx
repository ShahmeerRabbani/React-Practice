import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, database } from '../Components/Config/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dpImage, setDpImage] = useState('')

    const navigate = useNavigate()

    const handleImage = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file)
      setDpImage(imageUrl)
      console.log(dpImage);
    }

    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
        .then( async(UserCredential) => {
            
            let uID = UserCredential.user.uid;
            let userObj = {
                firstName,
                lastName,
                email,
                dpImage
            }
       
        const addData =await setDoc(doc(database, 'users', uID), userObj)
        navigate('/')
       })
       .catch((error) => {
        console.log(error)
       })

    }

  return (
    <div className='SignUp-Page'>
      <Box sx={{
        width: 500,
        height: '80%',
        borderRadius: 1,
        boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: '0 auto',
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 3
      }}>
        <div style={{display: 'flex', gap: 12}}>
            <TextField onChange={(e) => setFirstName(e.target.value)} type='text' label='First Name' variant='outlined'/>
            <TextField onChange={(e) => setLastName(e.target.value)} type='text' label='Last Name' variant='outlined'/>
        </div>
        <TextField onChange={handleImage} type='file'  variant='outlined'/>
        <TextField onChange={(e) => setEmail(e.target.value)} type='email' label='email' variant='outlined'/>
        <TextField onChange={(e) => setPassword(e.target.value)} type='password' label='password' variant='outlined'/>
        <Button onClick={handleSubmit} variant='contained' sx={{height: 50}}>Submit</Button>
        <p>
            Already have an account? <Link  to='/'>Login</Link>

        </p>
      </Box>
    </div>
  )
}

export default SignUp
