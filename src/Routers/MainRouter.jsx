import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import Products from './Screen/Products'
import Login from './Screen/Login'
import SignUp from './Screen/SignUp'
import Dashboard from './Screen/Dashboard'
import AuthRoutes from './Components/Routes/AuthRoutes'
import HomeRoute from './Components/Routes/HomeRoutes'

const MainRouter = () => {
  return (
    <div className='MainRouter'>
    <Routes>
      <Route element={<AuthRoutes/>}>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      </Route>
      <Route element={<HomeRoute/>}>
      <Route path='/home' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default MainRouter
