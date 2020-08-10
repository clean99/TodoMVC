import React from 'react'
const Login = ({ username,password,handlelogin,setUsername,setPassword }) => {
  return (<div>
    <form onSubmit={handlelogin}>
      <label>
                    username
        <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
      </label>
      <label>
                    password
        <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
      </label>
      <button type="submit">login</button>
    </form>
  </div>)
}
export default Login