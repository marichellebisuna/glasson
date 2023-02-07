import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './product.scss'

const Product = () => {
  const [user, setUser] = useState(false)
  return (   
    <div>
      {user ? <div className='home'>Product</div> : <Navigate to='/login' />}  
    </div> 
    
  )
}

export default Product