import { Link } from 'react-router-dom'
import './product.scss'
import {product, products} from '../../data'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/products/productcard/ProductCard'

const Product = () => {
  const [ item, setItem ] = useState(product)
  const [ qty, setQty ] = useState(1)
  const [ selected, setSelected ] = useState(0)
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const [ relatedProducts, setRelatedProducts ] = useState([])

 
  // const relatedProducts = products.filter((product)=>product.tags.includes(item.tags[0]))

  const tempSize=new Set(products.map(product=>product.size))
  let sizes = Array.from(tempSize)
  const tempcolor=new Set(products.map(product=>product.color))
  let color = Array.from(tempcolor)

 useEffect(() => {
  setFilteredProducts(products.sort((a, b)=>b.createdAt-(a.createdAt)))

  setRelatedProducts(products.filter((product)=>product.tags.includes(item.tags[0])))

 }, []) 

  return (
    <div className='product'>      
      <div className="breadcrumbs">
        <div className="container">
            <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <Link to="/products">Shops </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span>
              <Link to="/products?brand=Armani">{item.brand} </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> {item.title} </span></div>          
        </div>    
      </div>
      <div className="top">
        <div className="left">
          <img src={item.images[0].url} alt="" srcSet="" />          
        </div>
        <div className="middle">
            <div className="image"><img src={item.images[0].url} alt="" srcSet="" /></div>
            <div className="image"><img src={item.images[1].url} alt="" srcSet="" /></div>
            <div className="image"><img src={item.images[2].url} alt="" srcSet="" /></div>
            <div className="image">    <img src={item.images[3].url} alt="" srcSet="" /></div>
            <div className="image"><img src={item.images[4].url} alt="" srcSet="" /> </div>
          </div>
        <div className="right">
          <div className="blue">
            <div className="left">
              <Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <Link to="/products">Shops </Link>
              <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> 
              </span>
              <Link to="/products?brand=Armani">{item.brand} </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> {item.title} 
            </div>         
            <hr/>
            <div className="title"><h1>{product.title}</h1></div>
            <div className="rating">
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
            <div className="reviews">(40 reviews)</div>
            </div>
            <hr style={{opacity:1}}/>
            <div className="price">${parseFloat(product.price).toFixed(2)}</div>
          </div> 
          <div className="lightblue">
            <div className="desc">{product.content}</div>
            <div className="container">
              <div className="quantity">
                <div className="minus"><i className="fa-solid fa-minus"></i></div>
                <div className="qty">{qty}</div>
                <div className="plus"><i className="fa-solid fa-plus"></i></div>
              </div>
              <button type="submit"><i className="fa-solid fa-cart-shopping"></i>add to cart</button>
            </div>  
            <div className="container">
            <div className="size">size 
              <select name="" id="">         
                {sizes && sizes.map(i=>
                <option key={i} value="" className="active">{i}</option>                
                )}
              </select>
            </div>
            <div className="colors"><span>  Color </span>
            {color && color.map(i=>
              <div className={selected === i ? "color active": "color"} key={i} style={{backgroundColor:`${i}`}} onClick={()=>setSelected(i)}></div>                
                )}
            </div>
           
            </div>  
            <div className="container">
              {product.inStock} Items   
              {product.inStock > 0 ? <div className="instock">in stock</div> :  <div className="instock">out of stock</div>}
              
            </div>
            <hr/>    
            <div className="text"><span>SKU:</span> {product.sku}</div>  
            <div className="text"><span>Category:</span> {product.category}</div> 
            <div className="text tag"><span>Tags:</span>
            {product.tags.map((i, index)=>{
            return <div key={i}>{(index?", ":"") + i}</div>  } )}</div>
          </div> 
          <div className="orange">
            <div className="container">
              <i className="fa-brands fa-twitter"></i>
              <div className="line"></div>
              <i className="fa-brands fa-facebook-f"></i>
              <div className="line"></div>

              <i className="fa-brands fa-google-plus-g"></i>
              <div className="line"></div>

              <i className="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
        </div>
      </div>
     <div className="related">
      <div className="top">
        <div className="left">related products</div>
        <div className="right">view all products</div>
      </div>
      
      <ProductCard productItems={relatedProducts.slice(0,5)}/>
     </div>
     <div className="related">
     <div className="top">
        <div className="left">new products</div>
        <div className="right">view all products</div>
      </div>
      <ProductCard productItems={filteredProducts.slice(0,5)}/>
     </div>
      
     
    </div>
  )
}

export default Product