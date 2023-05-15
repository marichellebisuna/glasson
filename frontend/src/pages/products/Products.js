import './products.scss'
import lady from '../../assets/hero/lady.png'
import { Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Pages, Sidebar, Singledeal, ProductCard, SideOption} from '../../components/'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductItems } from '../../redux/productSlice'

const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false) 
  const [active, setActive] = useState(false)
  const [activeTag, setActiveTag] = useState(false)
  const [sort, setSort] = useState(null)

  const {products, loading} = useSelector(state => state.items)  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductItems()) 
  }, [dispatch])

// useEffect(() => {
//   const cat = location.pathname.split("/")[2];
// if (cat){
//  return  `http://localhost:3000/products/${cat}`
// }
// else
// {
//   "http://localhost:3000/products/:category"
// }
 
// }, [])



  // const tempBrand=new Set(products.map(product =>product.brand))
  // const brand = Array.from(tempBrand)

  const isActive = () => {
    window.scrollY > 520 ? setActive(window.scrollY <2800 && true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    }
  }, [])   
  
  const isTag = () => {
    window.scrollY > 1100 ? setActiveTag( true) : setActiveTag(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isTag);
    return () => {
      window.removeEventListener("scroll", isTag);
    }
  }, [])   
  
 const location = useLocation();
 const brand = location.pathname.split("=")[2];
const category = location.pathname.split("/")[2];
const category2 = category.split("=")[1];

  const [ newProducts, setNewProducts ] = useState([])
 
   
 
  console.log(products.brand)

    useEffect(() => {
      //setFilteredNewProducts(products.sort((a, b)=>b.createdAt-(a.createdAt))) 
      setNewProducts(products.filter((item)=>{          
        return (
           item.brand===brand
          );
        }))       
     }, []) 
console.log(newProducts)

 const filteredProduct=products.filter((item)=>{          
    return (
       item.brand==={brand}
      );
    });
 console.log(filteredProduct)


  return (
    <div className="products">
      <div className="hero-img">
        <img src={lady} alt="" srcSet="" />
      </div>    
      <div className="breadcrumbs">
        <div className="container">
            <div className="left">
              <Link to="/">Home </Link>
              <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i></span>            
              <span style={{ color:"gray"}}> Shop All Products </span>
              <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i></span> 
              <span style={{ color:"gray"}}> {category2} </span>
              <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i></span> 
              <span style={{ color:"gray"}}> {brand} </span>
            </div>
            <div className="middle" onClick={()=>setShowSidebar(!showSidebar)}><i className="fa-solid fa-sliders"></i></div>
            <div className="right">
              <span style={{ color:"gray", paddingRight:"20px"}}> Showing 1-24 of 107 results </span> 
              <div className="sort">                     
                <select name="" id="">            
                  <option value="" className="active">SORT BY</option>                  
                  <option value="best" onChange={(e)=>setSort("best")}style={{ color:"orange"}}>Best Selling</option>
                  <option value="az" onChange={(e)=>setSort("az")}>Alphabetically, A-Z</option>
                  <option value="za" onChange={(e)=>setSort("za")}>Alphabetically, Z-A</option>
                  <option value="low" onChange={(e)=>setSort("low")}>Price, low to high</option>
                  <option value="high" onChange={(e)=>setSort("high")}>Price, high to low</option>
                  <option value="new" onChange={(e)=>setSort("new")}>Date, new to old</option>
                  <option value="old" onChange={(e)=>setSort("old")}>Date, old to new</option>                
                </select>    
                <div className="button"><i className="fa-solid fa-angle-down"></i></div> 
              </div>
            </div>
        </div>    
      </div>
      <div className="contents">
          <div className="left">
            <Sidebar active={active}/>
            <div className={activeTag? "tags":"tags hide"}>
              <div className="title">Tags</div>
              <div className="tag-item">
                {/* {brand?.map((b, i)=>                
                <div className="tag" key={i}><Link to={`/products?brand=${b}`}>{b}</Link></div>
                )}  */}
                <div className="tag" ><Link to={`/products?brand=${products.brand}`}>{products.brand}</Link></div>
              </div>
                        
            </div>
          </div>       
          <div className="right">   
          {loading ?  <div className='loading'><h1>Loading products....</h1></div>:<div className="card">
           {/* {products.map((item) => { */}

           {newProducts.map((item) => {

        return <ProductCard key={item.id} {...item} />;
        })}    
            </div> }  
            
                    
             <div className="page-number-top">        
                <Pages/>
            </div> 

            <div className="deals">
              <div className="left">
                <Singledeal/>
              </div>
              <div className="right">
                <Singledeal/>
              </div>                    
            </div>                    
          </div>
      </div> 
       <div className="page-number-bottom"> 
            
          <Pages/>
        </div>     
      <div className="single-deal">
              <div className="left">
                <Singledeal/>
              </div>
              <div className="right">
                <Singledeal/>
              </div>                    
      </div>
              
      <SideOption setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>   
    </div>
  )
}

export default Products