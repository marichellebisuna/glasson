import { Link, useLocation } from 'react-router-dom'
import './product.scss'
  import {produkt} from '../../data'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/products/productcard/ProductCard'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductItems, fetchSingleProduct, selectProduct, selectProducts} from '../../redux/productSlice'

const Product = () => { 
  const {id} = useParams();
  console.log({id})


  const {product, loading, products} = useSelector(state => (state.items)) 
     console.log({loading, products})

     const [productItem, setProductItem] = useState(products)  
     const [qcategory, setQcategory] = useState()  
     const [qbrand, setQbrand] = useState()  

  const dispatch = useDispatch() 
 

  // useEffect(() => {   
  //   dispatch(fetchProductItems())    
  // }, [dispatch])



  useEffect(() => {
    dispatch(fetchSingleProduct({id}))    
  }, [dispatch, id]) 

//  useEffect(() => {   
//   if(products.length > 0) {
//     setProductItem(product)  
//   }
//   else{
//     setProductItem(null)
//   }
//   }, [product])
 
  const [ qty, setQty ] = useState(1)
  const [ filteredNewProducts, setFilteredNewProducts ] = useState([])


  const [ relatedProducts, setRelatedProducts ] = useState([]) 
  const [ newProducts, setNewProducts ] = useState([])
  const [ tab, setTab ] = useState("tab1")
  const [ index, setindex ] = useState(0)
  const [ active, setActive ] = useState(0)

  // const tempSize=new Set(produkts?.map(product=>product.size))
  // let sizes = Array.from(tempSize)
    
  // const tempcolor=new Set(produkts?.map(product=>product.color))
  // let color = Array.from(tempcolor)


const filterProducts=products.filter((item)=>{
return (
item.category.includes(product.category)
// item.category.includes(product.category) || item.brand.includes(product.brand)
);
});
const newProduct=products.filter((item)=>{
return (
  item.category==="skincare" || item.category==="home-decoration"
  );
});

useEffect(() => {
  //setFilteredNewProducts(products.sort((a, b)=>b.createdAt-(a.createdAt))) 
  setNewProducts(newProduct.slice(0,5)) 
  setRelatedProducts(filterProducts.slice(0,5)) 
 }, []) 

 const handleIncrease = (i) =>{  
  setQty(qty + 1)
  }
  const handleDecrease = (i) =>{
    if(qty > 1){
      
    setQty(qty - 1)
      }
      else
      setQty(qty)
    }
    if (!productItem) {
      return "Sorry, no matching product found.";
    }
    if(loading){
      return (
        <div className="loading"><h1>Loading product....</h1></div>
      )
     }
    
  return (    
    <div className='product'>      
    <div className="breadcrumbs">
      <div className="container">
          <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> 
          <Link to={`/products/category=${product.category}/brand=${product.brand}`}>
          {/* <Link to={`/products/${product.category}/${product.brand}`}>             */}
            Shops </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span>
            <Link to={`/products/category=${product.category}/brand=${product.brand.trim()}`}>{product.brand} </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> {product.title} </span></div>          
      </div>    
    </div>
   
    <div className="top">
      <div className="left">
        <img src={product.images[index]} alt="" srcSet="" />          
      </div> 
      <div className="middle">
        {product.images.map((image,id)=> <div key={id} className={id===active ?"image active":"image"} onClick={()=>setindex(id)}><img src={image} alt="" srcSet="" onClick={()=>setActive(id)}/></div>
        )}       
      </div>

      <div className="right">
        <div className="blue">
          <div className="crumbs">
            <Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <Link to={`/products/category=${product.category}/brand=${product.brand}`}>Shops </Link>
            <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> 
            </span>
            <Link to={`/products/category=${product.category}/brand=${product.brand}`}>{product.brand} </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> {product.title} 
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
          <div className="desc">{product.description}</div>
          <div className="container">
            <div className="quantity">
              <div className="minus" onClick={()=>handleDecrease(qty)}><i className="fa-solid fa-minus"></i></div>
              <div className="qty">{qty}</div>
              <div className="plus" onClick={()=>handleIncrease(qty)}><i className="fa-solid fa-plus"></i></div>
            </div>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>add to cart</button>
          </div>  
          {/* <div className="container">
            <div className="size">size 
              <select name="" id="">         
                {sizes && sizes?.map((i, index)=>
                <option key={index} value="" className="active">{i}</option>                
                )}
              </select>
            </div>
            <div className="colors"><span>  Color </span>
            {color && color?.map((i, index)=>
              <div key={index} className={selected === i ? "color active": "color"} style={{backgroundColor:`${i}`}} onClick={()=>setSelected(i)}></div>                
                )}
            </div>           
          </div>   */}
          <div className="container stock">
            {product.stock} Items   
            {product.stock > 0 ? <div className="instock">in stock</div> :  <div className="instock">out of stock</div>}
            
          </div>
          <hr/>    
          <div className="text"><span>SKU:</span> {product.sku}</div>  
          <div className="text"><span>Category:</span> {product.category}</div> 
          <div className="text tag"><span>Tags:</span>
          {product.tags?.map((i, index)=>{
          return <div key={index}>{(index?", ":"") + i}</div>  } )}</div>
        </div> 
        <div className="orange">
          <div className="container">
            <div className="icon" style={{borderRight:"solid 1px white"}}>
             <i className="fa-brands fa-twitter"></i>  
            </div>             
            <div className="line"></div>
            <div className="icon" style={{borderRight:"solid 1px white"}}>
              <i className="fa-brands fa-facebook-f"></i>
            </div>           
            <div className="icon" style={{borderRight:"solid 1px white"}}>
              <i className="fa-brands fa-google-plus-g"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-pinterest-p"></i>
            </div>            
          </div>
        </div>
      </div>
    </div>

    <div className="tabs" >   
        <div className="tab"  onClick={()=>setTab("tab1")}>
          <div className={tab==="tab1" ?"tab-title active" : "tab-title"}>
              Description
          </div>          
          {tab==="tab1" &&      
          <div className="information" >{product.description}</div>
            }  
               
        </div>  
        <div className="tab" onClick={()=>setTab("tab2")}>
          <div className={tab==="tab2"?"tab-title2 active":"tab-title2"} >
         Informations
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
          Reviews 
          </div>
          {tab==="tab3" &&  
          <div className="information" >
            <div className="to">
              <div className="star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="number">Based on 3 review</div>
            <button type="submit">write a review</button>
            </div>
            <div className="bottom">
              <div className="left">
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
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
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
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
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
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
    </div> 

    <div className="related">
      <div className="titles">
        <div className="left">Related products</div>
        <div className="right"><Link to={`/products?category=${product.category}`}>view all products</Link></div>
      </div>  
      <hr/>    
      <div className="card">
      {filterProducts.map((item)=>{
        return <ProductCard key={item.id} {...item}/>      
      })}
      </div> 
    </div>

    <div className="related">
    <div className="titles">
        <div className="left">New products</div>
        <div className="right"><Link to={`/products?new=${newProducts}`}>view all products</Link></div>
      </div>
      <hr/>
      <div className="card">
      {newProducts.map((item)=>{
        return <ProductCard key={item.id} {...item}/>      
      })}
     
      </div> 
    </div> 
  </div>
        
  )
}

export default Product