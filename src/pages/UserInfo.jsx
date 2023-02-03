import React from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'

const UserInfo = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('userName', '')
    navigate('/login')
  }

  return (
    <div className='login-container'>
      <div className='main-container'>
        <div className='login user-info'>
          <i className='fa-solid fa-user fa-10x'></i>
          <br /><br />
          <b>{localStorage.getItem('userName')}</b>
          <button onClick={logout}>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
