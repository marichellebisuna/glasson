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
  const [sort, setSort] = useState("az")
  const [value, setValue] = useState([0, 2000])


  const {products, loading} = useSelector(state => state.items)  
  const [ newProducts, setNewProducts ] = useState(products)    

console.log(newProducts)
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
 const brand = (location.pathname.split("=")[2]).replaceAll("%20", " ");
const category = location.pathname.split("/")[2];
const category2 = category.split("=")[1];

console.log(brand)

useEffect(() => {
  
  setNewProducts(products.filter((item)=>{          
    return (
        item.brand===(brand.replace("%20", " ")) ||  item.category===(category)
      );
    }))     
   
  }, []) 

 


let [categoryFilters, setcategoryFilters] = useState(new Set());

  function updateFilters(checked, categoryFilter) {
    if (checked){
      setcategoryFilters((prev) => new Set(prev).add(categoryFilter));      
    }
      
    if (!checked){
      setcategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });     
    }
  }
  const min = value[0];
  const max = value[1];
 

      useEffect(() => {
        const filteredProducts =
        categoryFilters.size === 0
          ? newProducts        
          : products.filter((p) => categoryFilters.has(p.category) || categoryFilters.has(p.brand) && (p.price >= min && p.price <= max) )

        setNewProducts(filteredProducts)
      }, [categoryFilters])
      //console.log(filteredProducts)
  useEffect(() => {
    if (sort === "az") {
      return setNewProducts((prev) =>
        [...prev].sort((a, b) => a.title.localeCompare(b.title))
      );
      
    } 
    else if (sort === "za") {
      return setNewProducts((prev) =>
        [...prev].sort((a, b) => b.title.localeCompare(a.title))
      );
    } 
    else if (sort === "low") {
      return setNewProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      return setNewProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
console.log(sort)
    // useEffect(() => {
    //   setNewProducts((prev) =>
    //     [...prev].filter(p=>p.price >= minPrice && p.price <= maxPrice)
    // ); 
      
    // }, [maxPrice, minPrice]);
    
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
                <select onChange={(e) => setSort(e.target.value)}>            
                  <option value="" className="active">SORT BY</option>                  
                  {/* <option value="best" style={{ color:"orange"}}>Best Selling</option> */}
                  <option value="az" >Alphabetically, A-Z</option>
                  <option value="za" >Alphabetically, Z-A</option>
                  <option value="low" >Price, low to high</option>
                  <option value="high" >Price, high to low</option>
                  {/* <option value="new" >Date, new to old</option>
                  <option value="old" >Date, old to new</option>                 */}
                </select>    
                <div className="button"><i className="fa-solid fa-angle-down"></i></div> 
              </div>
            </div>
        </div>    
      </div>
      <div className="contents">
          <div className="left">
          
            <Sidebar active={active} updateFilters={updateFilters} filteredProducts={newProducts} value={value} setValue={setValue} brandItem={brand} categoryItem={category}/>
           
          </div>       
          <div className="right">   
          {loading ?  <div className='loading'><h1>Loading products....</h1></div>:<div className="card">          

         

            {newProducts.map((item) => {
            return <ProductCard key={item.id} {...item} />;
            })}  
             
            

            </div> }  
            
             {newProducts.length >8 &&
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
      {newProducts.length >8 &&
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