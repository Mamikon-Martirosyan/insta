import React, { useEffect, useRef } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectUsers } from '../../store/slices/users/usersSlice'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { useNavigate } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const { usersData, currentUser } = useSelector(selectUsers)
    const navigate = useNavigate()
    useEffect(() => {
        if (!usersData.length) {
            dispatch(fetchUsers())
        }
    }, [])

    const logRef = useRef(null)

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const [{value: email}, {value: password}] = logRef.current

        dispatch(logIn({email, password}))

        logRef.current.reset()
    }
  return (
    <form ref={logRef} onSubmit={handleSubmit}>
            <div className='login'>
            <div id="wrapper">
        <div className="main-content">
            <div className="header">
            <img src="https://i.imgur.com/zqpwkLQ.png" />
            </div>
            <div className="l-part">
            <input defaultValue={'bret'} type="text" placeholder="Username" className="input-1" />
            <div className="overlap-text">
                <input defaultValue={'gwenborough'} type="password" placeholder="Password" className="input-2" />
                <a href="#">Forgot?</a>
            </div>
            <button className='btn'>Log in</button>
            </div>
        </div>
        <div className="sub-content">
            <div className="s-part">
            Don't have an account?<a href="#">Sign up</a>
            </div>
        </div>
        </div>

            </div>
    </form>
  )
}

export default Login