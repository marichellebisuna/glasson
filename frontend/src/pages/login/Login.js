import './login.scss'
import { Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="container">
        <label >Username or email address*</label>
        <input type="email" name="" id="" />   
        <label htmlFor='password'>Password*</label>
        <input type="password" name="password" />
        <div className="remember">
          <div className="me">
            <input type="checkbox" name="remember" />
            <label htmlFor='remember'>Remember me</label>
          </div>
          <div className="text"><Link to="/forgotpassword">Forgot your password?</Link></div>
        </div>
       <button type="submit">Login</button>
      </div>
    </div>
  )
}

export default Login