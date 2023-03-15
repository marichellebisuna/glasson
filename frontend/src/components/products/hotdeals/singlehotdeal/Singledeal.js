import './singledeal.scss'
import blue from '../../../../assets/product/blue.png'
const Singledeal = () => {
  return (  

      <div className="container-deal">
         <div className="left">          
            <div className="image-here">
              <div className="icons">
                <div className="icon"><i className="fa-solid fa-chart-simple"></i></div>
                <div className="icon"> <i className="fa-solid fa-magnifying-glass-plus"></i></div>
                <div className="icon"><i className="fa-regular fa-heart"></i></div>
                <div className="icon"><i className="fa-solid fa-bag-shopping"></i></div>
              </div>
              <div className="image">
                <img src={blue} alt="" />
              </div>
              <div className="details">
                <div className="title">armani exchange</div>
                <div className="price">$30.00 <span className='strike'>$45.00</span></div>
                <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
              <div className="count-down">             
              <div className="timer">
              <div className="time"><span className='blue'>24</span>days</div>
                <div className="time"><span className='blue'>21</span>hrs</div>
                <div className="time"><span className='blue'>44</span>mins</div>
                <div className="time"><span className='blue'>50</span>secs</div>
              </div>        
              <hr/>
              <div className="title">
                <h1 ><span style={{color:"red", fontWeight:"700"}}> Hot deal </span>this week</h1>
              </div>
              <div className="desc"><h3 style={{fontWeight:"400"}}>tables & chairs up to 30% off</h3></div>
              <button type="submit">shop now</button>
              </div>     
         </div>        
         <div className="right">          
            <div className="image-here">
              <div className="icons">
                <div className="icon"><i className="fa-solid fa-chart-simple"></i></div>
                <div className="icon"> <i className="fa-solid fa-magnifying-glass-plus"></i></div>
                <div className="icon"><i className="fa-regular fa-heart"></i></div>
                <div className="icon"><i className="fa-solid fa-bag-shopping"></i></div>
              </div>
              <div className="image">
                <img src={blue} alt="" />
              </div>
              <div className="details">
                <div className="title">armani exchange</div>
                <div className="price">$30.00 <span className='strike'>$45.00</span></div>
                <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
            <div className="count-down">             
            <div className="timer">
              <div className="time"><span className='blue'>24</span>days</div>
              <div className="time"><span className='blue'>21</span>hrs</div>
              <div className="time"><span className='blue'>44</span>mins</div>
              <div className="time"><span className='blue'>50</span>secs</div>
            </div>        
            <hr/>
            <div className="title">
              <h1 ><span style={{color:"red", fontWeight:"700"}}> Hot deal </span>this week</h1>
            </div>
            <div className="desc"><h3 style={{fontWeight:"400"}}>tables & chairs up to 30% off</h3></div>
            <button type="submit">shop now</button>
            </div>     
         </div>     
      </div>

  )
}

export default Singledeal