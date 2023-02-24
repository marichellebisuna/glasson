import { Link } from 'react-router-dom'
import './product.scss'
import {product, products} from '../../data'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/products/productcard/ProductCard'
import productItems from '../../components/products/productcard/ProductCard'

const Product = () => {
  const [ item, setItem ] = useState(product)
  const [ qty, setQty ] = useState(1)
  const [ selected, setSelected ] = useState(0)
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const [ relatedProducts, setRelatedProducts ] = useState([])
  const [ tab, setTab ] = useState("tab1")

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

      <div className="tabs" >     
        {/* <div className="container"> */}
          
        
       
          <div className="tab"  onClick={()=>setTab("tab1")}>
            <div className={tab==="tab1" ?"tab-title active" : "tab-title"}>
                Description
            </div>          
            {tab==="tab1" &&      
            <div className="information" >{item.content}</div>
              }  
                 
          </div>  
          <div className="tab" onClick={()=>setTab("tab2")}>
            <div className={tab==="tab2"?"tab-title2 active":"tab-title2"} >
            Additional Information
            </div>
            {tab==="tab2" && <div className="information" style={{minHeight:tab==="tab2" ?"200px":"", overflow:tab==="tab2" && "hidden"}} onClick={()=>setTab("tab2")}>
              <div className="details">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Pellentesque diam dolor cosmopolis etos lobortis.
              </div>
              <table>
                <tr>
                  <td>Comodous:</td>
                  <td>Comodous in tempor ullamcorper miaculis</td>                
                </tr>
                <tr>
                  <td>Lois</td>
                  <td>Mattis laoreet:</td>
                </tr>
                <tr>
                  <td>Divamus de ametos:</td>
                  <td>Divamus sit amet purus justo.</td>
                </tr>
                <tr>
                  <td>Molestie:</td>
                  <td>Proin molestie egestas orci ac suscipit risus posuere loremous</td>
                </tr>
                <tr>
                  <td>Comodous:</td>
                  <td>Comodous in tempor ullamcorper miaculis</td>                
                </tr>
                <tr>
                  <td>Lois</td>
                  <td>Mattis laoreet:</td>
                </tr>
                <tr>
                  <td>Divamus de ametos:</td>
                  <td>Divamus sit amet purus justo.</td>
                </tr>
                <tr>
                  <td>Molestie:</td>
                  <td>Proin molestie egestas orci ac suscipit risus posuere loremous</td>
                </tr>
                <tr>
                  <td>Comodous:</td>
                  <td>Comodous in tempor ullamcorper miaculis</td>                
                </tr>
                <tr>
                  <td>Lois</td>
                  <td>Mattis laoreet:</td>
                </tr>
                <tr>
                  <td>Divamus de ametos:</td>
                  <td>Divamus sit amet purus justo.</td>
                </tr>
                <tr>
                  <td>Molestie:</td>
                  <td>Proin molestie egestas orci ac suscipit risus posuere loremous</td>
                </tr>
                
              </table>
            </div>}
            
          </div> 
          <div className="tab"   onClick={()=>setTab("tab3")}>
            <div className={tab==="tab3"?"tab-title3 active":"tab-title3"}>
            Reviews (1)
            </div>
            {tab==="tab3" &&  
            <div className="information" >
              <div className="top">
                <div className="star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="number">Based on 3 review</div>
              <button type="submit">write a review</button>
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="name">Cosmo De Milancelos</div>
                  <div className="date">
                    <div className="short-comment">Brilliant product</div>
                    <div className="day">3 days ago</div>
                  </div>
                  <div className="long">
                  The hardest part of the process is getting the glass super clean first. The cleaning product cuts thru the scum and the scouring pad is excellent. The end result is worth the work out. Obviously I hadnt cleaned the screen very much previously.
                  </div>
                </div>
                <div className="right"><Link to="">Report as inappropriate</Link></div>
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="name">Cosmo De Milancelos</div>
                  <div className="date">
                    <div className="short-comment">Brilliant product</div>
                    <div className="day">3 days ago</div>
                  </div>
                  <div className="long">
                  The hardest part of the process is getting the glass super clean first. The cleaning product cuts thru the scum and the scouring pad is excellent. The end result is worth the work out. Obviously I hadnt cleaned the screen very much previously.
                  </div>
                </div>
                <div className="right"><Link to="">Report as inappropriate</Link></div>
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="name">Cosmo De Milancelos</div>
                  <div className="date">
                    <div className="short-comment">Brilliant product</div>
                    <div className="day">3 days ago</div>
                  </div>
                  <div className="long">
                  The hardest part of the process is getting the glass super clean first. The cleaning product cuts thru the scum and the scouring pad is excellent. The end result is worth the work out. Obviously I hadnt cleaned the screen very much previously.
                  </div>
                </div>
                <div className="right"><Link to="">Report as inappropriate</Link></div>
              </div>
            </div>}
          
          </div>  
       
        {/* </div>     */}
        
      </div>

      <div className="related">
        <div className="titles">
          <div className="left">Related products</div>
          <div className="right"><Link to={`/products?tag=${relatedProducts}`}>view all products</Link></div>
        </div>  
        <hr/>    
        <div className="card">
         <ProductCard productItems={relatedProducts.slice(0,5)}/>
        </div>  
       
      </div>

      <div className="related">
      <div className="titles">
          <div className="left">New products</div>
          <div className="right"><Link to={`/products?tag=${relatedProducts}`}>view all products</Link></div>
        </div>
        <hr/>
        <div className="card">
         <ProductCard productItems={relatedProducts.slice(0,5)}/>
        </div> 
      </div>
      
     
    </div>
  )
}

export default Product