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


  const isActive = () => {
    window.scrollY > 520 ? setActive(window.scrollY <2800 && true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    }
  }, [])    
  
 const location = useLocation();
 const brand = (location.pathname.split("=")[2]);
const category = location.pathname.split("/")[2];
const category2 = category.split("=")[1];
const [ newProducts, setNewProducts ] = useState([])


useEffect(() => {
  //setFilteredNewProducts(products.sort((a, b)=>b.createdAt-(a.createdAt))) 
  setNewProducts(products.filter((item)=>{          
    return (
        item.brand===(brand.replace("%20", " "))
      );
    }))     
      
  }, []) 


const [tags, setTags] = useState(["Apple", "smartphone"]);
const [toCheck, setToCheck] = useState({});


const filterProducts = (value) =>{
  const isChecked = value
  console.log(isChecked)
  setToCheck((prev) => {
    setNewProducts(products)
    setTags(toCheck?[...tags, value]:tags.filter((item)=>item !==value)) 
    return { ...prev, [value]: !!!prev[value] };    
  });
}


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
              {/* <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i></span> 
              <span style={{ color:"gray"}}> {category2} </span>
              <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i></span> 
              <span style={{ color:"gray"}}> {brand.replace("%20", " ")} </span> */}
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
            <Sidebar active={active} filterProducts={filterProducts} setTags={setTags} tags={tags} />
            {/* <div className={active? "tags active ":"tags "}>
              <div className="title">Tags</div>
              <div className="tag-item">            
                  {tags.map((tag)=> 
                    <div className="tag" key={tag.id}><Link to={`/products?brand=${tag}`}>{tag}</Link></div>
                  )}             
              </div>                        
            </div> */}
          </div>       
          <div className="right">   
          {loading ?  <div className='loading'><h1>Loading products....</h1></div>:<div className="card">          

           {newProducts.filter((prod) =>
            Object.keys(toCheck).length === 0 ? true : !!toCheck[prod.category]|| !!toCheck[prod.brand]
          ).map((item) => {
            return <ProductCard key={item.id} {...item} />;
            })}    
            </div> }  
            
             {newProducts.length >3 &&
             <div className="page-number-top">        
                <Pages/>
            </div> 
             }       
             

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
      {newProducts.length >3 &&
      <div className="page-number-bottom">             
          <Pages/>
        </div>  
      }
          
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