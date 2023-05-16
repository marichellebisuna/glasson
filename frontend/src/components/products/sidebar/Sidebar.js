import './sidebar.scss'
import {useEffect, useState} from 'react'
//import {produkts} from "../../../data"
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductItems } from '../../../redux/productSlice'

const Sidebar = ({active}) => {
const [maxPrice, setMaxPrice] = useState(2000)
const [selectedSub, setSelectedSub] = useState([])
const [showCategory, setShowCategory] = useState(true)
const [showBrand, setShowBrand] = useState(true)
const [activeTag, setActiveTag] = useState(false)
const [showColor, setShowColor] = useState(true)
const [showSize, setShowSize] = useState(true)

const {products, loading} = useSelector(state => state.items)  
const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchProductItems()) 
}, [dispatch])

const location = useLocation();
const brandUrl = (location.pathname.split("=")[2]);
const category = location.pathname.split("/")[2];
const category2 = category.split("=")[1];
const tags=[brandUrl ,category2]

const tempCategory=new Set(products.map(product =>product.category))
const categories = Array.from(tempCategory)

const tempBrand=new Set(products.map(product =>product.brand))
const brand = Array.from(tempBrand)
console.log(brand)
const tempSize=new Set(products.map(product =>product.size))
const size = Array.from(tempSize)

const tempcolor=new Set(products.map(product =>product.color))
const color = Array.from(tempcolor)

const handleChange = (e) =>{
  const value = e.target.value
  const isChecked = e.target.checked

  setSelectedSub(
    isChecked 
    ? [...selectedSub, value] 
    : selectedSub.filter(item=>item !==value)
  )}
 
  return (
    <div className={active ?'sidebar active' :"sidebar"}>
      <div className="options">        
        <div className="title" onClick={()=>setShowCategory(!showCategory)}>
          Categories 
          <div className="icons" onClick={()=>setShowCategory(!showCategory)}>
            {!showCategory ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showCategory?"option":"option hide"}>
          {categories?.map((shape, i)=>
            <div className="inputItem" key={i}>
            <input type="checkbox" name="shape" id={shape} value={shape} onChange={handleChange} />
          <label htmlFor='rectangle'>{shape}</label>
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
          <input type="checkbox" name="brand" id={b} value={b} onChange={handleChange}/>
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
        <div className="title">Price</div>
        <div className="option">
          <span>0</span>
          <input type="range" name="price" id="price" min={0} max={2000} 
          onChange={(e)=>setMaxPrice(e.target.value)}          
          />
          <span>{maxPrice} </span>
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
       <div className={active? "tags active ":"tags "}>
          <div className="title">Tags</div>
          <div className="tag-item">            
              {tags.map((tag)=> 
                <div className="tag" key={tag.id}><Link to={`/products?brand=${tag}`}>{tag}</Link></div>
              )}             
          </div>                        
        </div>
    </div>
  )
}

export default Sidebar