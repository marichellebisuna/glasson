import './tracking.scss'
import { Link} from 'react-router-dom'

const Tracking = () => {
  return (
    <div className="tracking">
      <h1>Track Your Order</h1>
      <div className="text">To track your order please enter your Order Id in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</div>
      <div className="container">
        <label>Order ID</label>
        <input type="text" name="" id="" />
        <label>Billing email</label>
        <input type="email" name="" id="" />
        
       <button type="submit">Track</button>
      </div>
    </div>
  )
}

export default Tracking