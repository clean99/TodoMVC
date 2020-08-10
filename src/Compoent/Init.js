import React,{ useState,useEffect } from 'react'
import App from './App'
import Login from './Login'
import Togglable from './Togglable'
import Services from '../services/notes'
const Init = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser] = useState(null)
  const handlelogin = async (event) => {
    event.preventDefault()
    console.log('logging in with',username,password)
    try{
      const user = await Services.login({ username,password })
      window.localStorage.setItem('loggedNoteappUser',JSON.stringify(user))
      Services.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }catch (exception){
      setTimeout(() => {
      },5000)
    }
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if(loggedUserJSON)
    {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      Services.setToken(user.token)
    }
  },[])
  return (
    <div>
      <App user={user}/>
      <Togglable buttonlabel='login'>
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handlelogin={handlelogin}/>
      </Togglable>
    </div>
  )
}
export default Init