import './login.scss'
import { Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="forgotpassword">
      <h1>Forgot Password</h1>
      <div className="container">
        <label>Username or email address*</label>
        <input type="email" name="" id="" />
        <label>Password*</label>
        <input type="password" name="" id="" />
        <div className="remember">
          <div className="me">
            <input type="checkbox" name="" id="" />
            <label>Remember me</label>
          </div>
          <div className="text"><Link to="/forgotpassword"></Link>Forgot your password?</div>
        </div>
       <button type="submit">Login</button>
      </div>
    </div>
  )
}

export default ForgotPassword