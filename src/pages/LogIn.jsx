import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsLoading, setLoginMessage } from '../store/slices/appSlice'
import '../styles/login.css'

const LogIn = () => {
  const { register, handleSubmit } = useForm()

  const loginMessage = useSelector((state) => state.app.loginMessage)

  const navigate = useNavigate()

  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(setIsLoading(true))
    axios
      .post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
      .then((res) => {
        setError('')
        dispatch(setLoginMessage(''))
        navigate(-1)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem(
          'userName',
          res.data.user.firstName + ' ' + res.data.user.lastName
        )
      })
      .catch(() => setError('Invalid credentials'))
      .finally(() => dispatch(setIsLoading(false)))
  }

  return (
    <div className='login-container'>
      <div className='main-container'>
        <form className='login' onSubmit={handleSubmit(submit)}>
          <strong>Welcome! Log in to continue</strong>
          <p className='login-message'>{loginMessage}</p>

          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' {...register('email')} />
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' {...register('password')} />
          </div>
          <div className='error-message'>{error}</div>
          <button className='submit-button'>Log in</button>

          <div className='switch-forms'>
            Don't have an account?{' '}
            <button type='button' onClick={() => navigate('/signup')}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
