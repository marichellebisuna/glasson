import './register.scss'
import { Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <div className="container">
        <label>Username or email address*</label>
        <input type="email" name="email" id="email" />
        <label>Password*</label>
        <input type="password" name="password" id="password" />
        <label>Confirm Password*</label>
        <input type="password" name="confirm" id="confirm" />        
       <button type="submit">create account now</button>
       <div className="text"><Link to="/login">you have account?</Link></div>
      </div>
    </div>
  )
}

export default Register