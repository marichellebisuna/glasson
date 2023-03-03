import './forgotpassword.scss'
import { Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="forgotpassword">
      <h1>Forgot Password</h1>
      <div className="text">No worries. We'll send you a reset instructions.</div>
      <div className="container">
        <label>Email address*</label>
        <input type="email" name="" id="" />
        
       <button type="submit">Reset password</button>
      </div>
    </div>
  )
}

export default ForgotPassword