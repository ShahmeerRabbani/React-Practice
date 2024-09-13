import React from 'react'

const Dashboard = () => {

  const getUserDataFromStorage = localStorage.getItem('userInfo')
  
  const userData = JSON.parse(getUserDataFromStorage)

  console.log(userData)

  return (
    <div>
      <h1>Dashboard</h1>
      <img src={userData.dpImage} alt="" />
      <h1>{userData.firstName}</h1>
      <h1>{userData.lastName}</h1>
      <h1>{userData.email}</h1>
    </div>
  )
}

export default Dashboard
