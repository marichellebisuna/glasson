import { useState } from 'react'
import './sideoption.scss'
import {produkts} from "../../data"

const SideOption = ({setShowSidebar, showSidebar}) => {
  const [maxPrice, setMaxPrice] = useState(2000)
const [selectedSub, setSelectedSub] = useState([])
const [showShape, setShowShape] = useState(true)
const [showBrand, setShowBrand] = useState(true)
const [showColor, setShowColor] = useState(true)
const [showSize, setShowSize] = useState(true)
const [showSort, setShowSort] = useState(true)



const tempShape=new Set(produkts.map(product =>product.shape))
const shapes = Array.from(tempShape)

const tempBrand=new Set(produkts.map(product =>product.brand))
const brand = Array.from(tempBrand)

const tempSize=new Set(produkts.map(product =>product.size))
const size = Array.from(tempSize)

const tempcolor=new Set(produkts.map(product =>product.color))
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
    <div className={showSidebar?'sideoption':"sideoption hidden"} >
      <div className="options">        
      <div className="title" >         
        <div className="icons close" onClick={()=>setShowSidebar(false)}>
        close     
        </div>
      </div> 
      </div> 
      <div className="options">        
        <div className="title" onClick={()=>setShowSort(!showSort)}>
          Sort by 
          <div className="icons" onClick={()=>setShowSort(!showSort)}>
            {!showSort ?<i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}           
          </div>
        </div>
        <div className={showSort?"option":"option hide"}>      
          <div className="inputItem" >
            <input type="radio" name="sort" id="best" value="best" onChange={handleChange} />
            <label htmlFor='rectangle'>best selling</label>
          </div>
          <div className="inputItem" >
            <input type="radio" name="sort" id="a-z" value="a-z" onChange={handleChange} />
            <label htmlFor='rectangle'>alphabetically, a-z</label>
          </div>
          <div className="inputItem" >
            <input type="radio" name="sort" id="z-a" value="z-a" onChange={handleChange} />
            <label htmlFor='rectangle'>alphabetically, z-a</label>
          </div>
          <div className="inputItem" >
            <input type="radio" name="sort" id="low" value="low" onChange={handleChange} />
            <label htmlFor='rectangle'>price, low to high</label>
          </div>
          <div className="inputItem" >
            <input type="radio" name="sort" id="high" value="high" onChange={handleChange} />
            <label htmlFor='rectangle'>price, high to low</label>
          </div>
          <div className="inputItem" >
            <input type="radio" name="sort" id="new" value="new" onChange={handleChange} />
            <label htmlFor='rectangle'>date, new to old</label>
          </div>
          <div className="inputItem" >
            <input type="radio" name="sort" id="old" value="old" onChange={handleChange} />
            <label htmlFor='rectangle'>date, old to new</label>
          </div>
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
    </div>
  )
}

export default SideOption;