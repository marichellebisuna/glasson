import './featured.scss'
import Product from '../../pages/product/Product'
import {Link} from 'react-router-dom'

const Featured = () => {
 
  return (
    <div className='featured'>
      <h1>Featured Product</h1>
      <div className="categories">
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/">Rayven</Link></li>
          <li className='active'><Link to="/">Armani EX</Link></li>
          <li><Link to="/">Armani Sp</Link></li>
          <li><Link to="/">Armani YX</Link></li>
        </ul>
      </div>    
      <div className="product">
          <Product />  
      </div>  
      <div className="plus"><i class="fa-solid fa-plus"></i></div>
         
      </div>
  )
}

export default Featured