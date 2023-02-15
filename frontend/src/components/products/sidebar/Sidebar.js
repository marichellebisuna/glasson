import './sidebar.scss'
import {useState} from 'react'
import {products} from "../../../data"

const Sidebar = () => {
const [maxPrice, setMaxPrice] = useState(2000)
const [selectedSub, setSelectedSub] = useState([])
const [selected, setSelected] = useState(false)

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
  )
  setSelected( selectedSub ? true : false)
}
 console.log(selectedSub)
  return (
    <div className='sidebar'>
     
      <div className="options">        
        <div className="title">
          Shape 
          <div className="icons">
          <i className="fa-solid fa-plus"></i> <i className="fa-solid fa-minus"></i>
          </div>
        </div>
        <div className="option">
        {shapes?.map((shape, i)=>
          <div className={"inputItem"} key={i}>
          <input type="checkbox" name="shape" id={shape} value={shape} onChange={handleChange} />
          <label htmlFor='rectangle'>{shape}</label>
        </div>
         )}
        </div>
      </div>
      <div className="options">
        <div className="title">
          brand 
          <div className="icons">
          <i className="fa-solid fa-plus"></i> <i className="fa-solid fa-minus"></i>
          </div>
        </div>
        <div className="option">
        {brand?.map((b, i)=>
          <div className="inputItem" key={i}>
          <input type="checkbox" name="brand" id={b} value={b} onChange={handleChange}/>
          <label htmlFor='rectangle'>{b}</label>
        </div>
         )}
       </div> 
      </div>
      <div className="options">
        <div className="title">
          color 
          <div className="icons">
          <i className="fa-solid fa-plus"></i> <i className="fa-solid fa-minus"></i>
          </div>
        </div>
        <div className="option">
        {color?.map((c, i)=>
          <div className="inputItem" key={i}>
          <input type="checkbox" name="color" id={c} value={c} onChange={handleChange}/>
          <label htmlFor='rectangle'>{c}</label>
        </div>
         )}
       </div> 
      </div>
      <div className="options">
      <div className="title">
          Size 
          <div className="icons">
          <i className="fa-solid fa-plus"></i> <i className="fa-solid fa-minus"></i>
          </div>
        </div>
        <div className="option">
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

export default Sidebar