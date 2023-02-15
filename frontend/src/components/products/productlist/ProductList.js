import ProductCard from '../productcard/ProductCard'
import React from './productlist.scss'
import {products} from '../../../data'
import { useParams } from 'react-router-dom'

const ProductList = () => {
 
  const [productItems, setProductItems] = products

  return (
    <div className='product-list'><ProductCard productItems={productItems}/></div>
  )
}

export default ProductList