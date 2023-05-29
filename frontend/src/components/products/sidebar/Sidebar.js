import './sidebar.scss'
import {useEffect, useState, Fragment} from 'react'
//import {produkts} from "../../../data"
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductItems } from '../../../redux/productSlice'
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';
import {FaStar} from 'react-icons/fa'


const Sidebar = ({active, updateFilters, filteredProducts, value, setValue, rating, hover, setRating, setHover, setNewProducts, setcategoryFilters}) => {
const useStyles = makeStyles({
  root: {
    width: '80%',
  },
  thumb: {
    color: '#000',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#000',
  },
});




const [showCategory, setShowCategory] = useState(true)
const [showBrand, setShowBrand] = useState(true)


// const [activeTag, setActiveTag] = useState(false)
// const [showColor, setShowColor] = useState(true)
// const [showSize, setShowSize] = useState(true)

const {products, loading} = useSelector(state => state.items)  
const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchProductItems()) 
}, [dispatch])
const [key, setKey] = useState(0);

const clearClickHandler = () => {
  setKey((k) => k + 1)
  setcategoryFilters(new Set())
setNewProducts(products)
};
console.log(products)
const location = useLocation();
const brandUrl = (location.pathname.split("=")[2]);
const category = location.pathname.split("/")[2];
const category2 = category.split("=")[1];

const tempCategory=new Set(products.map(product =>product.category))
const categories = Array.from(tempCategory)

const tempBrand=new Set(products.map(product =>product.brand))
const brand = Array.from(tempBrand)

// const tempSize=new Set(products.map(product =>product.size))
// const size = Array.from(tempSize)

// const tempcolor=new Set(products.map(product =>product.color))
// const color = Array.from(tempcolor)

const [selectedSub, setSelectedSub] = useState([])
const [checked, setChecked] = useState([])

// const handleChange = (e) =>{
//   const value = e.target.value
//   const isChecked = e.target.checked
//   setSelectedSub(
//     isChecked 
//     ? [...selectedSub, value] 
//     : selectedSub.filter(item=>item !==value)
//   )} 

const tempTags=new Set(filteredProducts.map(product=>product.category ))
const tags = Array.from(tempTags)
const tempBrands=new Set(filteredProducts.map(product=> product.brand))
const brands = Array.from(tempBrands)

const classes = useStyles();
const handleChange = (event, newValue) => {
  setValue(newValue);
};
  return (
    <Fragment key={key}>
   <div className={active ?'sidebar active' :"sidebar"}>
      <div className="options">        
        <div className="title" onClick={()=>setShowCategory(!showCategory)}>
          Categories 
          <div className="icons" onClick={()=>setShowCategory(!showCategory)}>
            {!showCategory ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showCategory?"option":"option hide"}>
          {categories?.map((c, i)=>
            <div className="inputItem" key={i}>
            {/* <input type="checkbox" name="categories" id={c} value={c} onChange={e=>filterProducts(e.target.value)} /> */}
            <input type="checkbox" name="categories" id={c} value={c}   onChange={e=>updateFilters(e.target.checked, c)} defaultChecked={false}/>
          <label htmlFor='rectangle'>{c}</label>
      </div>
        )}
       
        </div>
      </div>
      
      <div className="options">
        <div className="title" onClick={()=>setShowBrand(!showBrand)}>
          brand 
          <div className="icons" onClick={()=>setShowBrand(!showBrand)}>
            {!showBrand ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showBrand?"brand-option":"brand-option hide"}>      
          {brand?.map((b, i)=>
          <div className="inputItem" key={i}>       

          <input type="checkbox" name="brand" id={b} value={b} onChange={e=>updateFilters(e.target.checked, b)} defaultChecked={false}/>
          <label htmlFor='rectangle'>{b}</label>
        </div>
         )}
       </div> 
      </div>


      {/* <div className="options">
        <div className="title" onClick={()=>setShowColor(!showColor)}>
          color 
          <div className="icons" onClick={()=>setShowColor(!showColor)}>
            {!showColor ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showColor?"color-option":"color-option hide"}>
        {color?.map((c, i)=>
          <div className="inputItem" key={i}>
          <input type="checkbox" name="color" id={c} value={c} onChange={handleChange}/>
          <label htmlFor='rectangle'>{c}</label>
        </div>
         )}
       </div> 
      </div>
      <div className="options">
      <div className="title" onClick={()=>setShowSize(!showSize)}>
          Size 
          <div className="icons" onClick={()=>setShowSize(!showSize)}>
            {!showSize ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showSize?"size-option":"size-option hide"}>
        {size?.map((item, i)=>
          <div className="inputItem" key={i}>
          <input type="checkbox" name="size" id={item} value={item} onChange={handleChange}/>
          <label htmlFor='rectangle'>{item}</label>
        </div>
         )}
       </div>
      </div> */}
       <div className="options">        
        <div className="title" onClick={()=>setShowCategory(!showCategory)}>
          Ratings 
         
        </div>
        <div className="star-option">
          {[...Array(5)].map((star, i)=>{
          const ratingValue=i+1;
          return (<label><div className="inputItem" key={i}>
            {/* <input type="checkbox" name="categories" id={c} value={c} onChange={e=>filterProducts(e.target.value)} /> */}
            <input 
              type="radio" 
              name="rating"  
              id={ratingValue} 
              value={ratingValue} 
              onClick={()=>setRating(ratingValue)} 
            />
            <FaStar 
              className="stars" 
              size="20" 
              color={ratingValue <= (hover || rating) ? "#ff8927 ":"#e4e5e9"} 
              onMouseEnter={()=>setHover(ratingValue)} 
              onMouseLeave={()=>setHover(null)}            
            />
      </div>
      </label>)}
        )}       
        </div>
      
      </div>
      <div className="options">
        <div className="title">Price</div>
        <div className="option-price">
          {/* <span>{value[0]}</span> */}
          {/* <input type="range" name="price" id="price" min={0} max={2000} 
          onChange={(e)=>setValue(e.target.value)}          
          /> */}         

          <Slider
        getAriaLabel={() => 'Temperature range'}
        size="small"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
        disableSwap
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
      {/* <span>{value[1]} </span> */}
        </div>
      </div>

    
     
      {/* <div className="tags">
            <div className="title">Tags</div>
            <div className="tag-item">
              {brand?.map((b, i)=>
              <Link to={`/products?brand=${b}`} key={i}>
              <div className="tag" key={i}>{b}</div>
              </Link>
              )} 
            </div>
                      
          </div> */}
        
           <button type="submit" className='clear'onClick={clearClickHandler}>Clear</button>
       <div className="tags">
          <div className="title">Tags</div>
          <div className="tag-item">            
              {/* {tags?.map((tag)=> 
                <div className="tag" key={tag.id} >{tag.replace("%20", " ")}</div>
              )}  */}
               {tags.map((tag) => {
            return <div className="tag" key={tag.id} >{tag.replace("%20", " ")}</div>
            })}   
                {brands.map((brand) => {
            return <div className="tag" key={brand.id} >{brand.replace("%20", " ")}</div>
            })}        
          </div>                        
        </div>
       
    </div>
    </Fragment>
  )
}

export default Sidebar