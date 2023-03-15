import './sidebar.scss'
import {useState} from 'react'
import {products} from "../../../data"
import { Link } from 'react-router-dom'

const Sidebar = ({active}) => {
const [maxPrice, setMaxPrice] = useState(2000)
const [selectedSub, setSelectedSub] = useState([])
const [showShape, setShowShape] = useState(true)
const [showBrand, setShowBrand] = useState(true)

const [showColor, setShowColor] = useState(true)

const [showSize, setShowSize] = useState(true)



const tempShape=new Set(products.map(product =>product.shape))
const shapes = Array.from(tempShape)

const tempBrand=new Set(products.map(product =>product.brand))
const brand = Array.from(tempBrand)

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
        <div className="title" onClick={()=>setShowShape(!showShape)}>
          Shape 
          <div className="icons" onClick={()=>setShowShape(!showShape)}>
            {!showShape ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showShape?"option":"option hide"}>
        {shapes?.map((shape, i)=>
          <div className="inputItem" key={i}>
          <input type="checkbox" name="shape" id={shape} value={shape} onChange={handleChange} />
          <label htmlFor='rectangle'>{shape}</label>
        </div>
         )}
        </div>
      </div>
      <div className="options">        
        <div className="title" onClick={()=>setShowShape(!showShape)}>
          Shape 
          <div className="icons" onClick={()=>setShowShape(!showShape)}>
            {!showShape ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showShape?"option":"option hide"}>
        {shapes?.map((shape, i)=>
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
      <div className="options">
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
      </div>
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
              <Link to={`/products?brand=${b}`}>
              <div className="tag" key={i}>{b}</div>
              </Link>
              )} 
            </div>
                      
          </div> */}
     
    </div>
  )
}

export default Sidebar