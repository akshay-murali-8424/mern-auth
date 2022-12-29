import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectAdminAuth } from '../../redux/Features/reducers/adminAuthSlice'


function Home() {
  const data = useSelector(selectAdminAuth)
  if(data.token){
    return (
      <div>Admin Home</div>
    )
  }else{
    return(
      <Navigate to='/admin/login' />
    )
  }
}

export default Home