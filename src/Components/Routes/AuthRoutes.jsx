import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = () => {
  return !localStorage.getItem('userId') ? <Outlet/> : <Navigate to={'/home'}/>
}

export default AuthRoutes
