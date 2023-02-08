import './services.scss'

const Services = () => {
  return (
    <div className='services'>
     <div className="service">
      <div className="icon"><i class="fa-solid fa-truck"></i></div>
      <div className="title">free shipping</div>
      <div className="desc">For all order $99</div>
     </div>
     <div className="line"></div>
     <div className="service">
      <div className="icon"><i class="fa-regular fa-clock"></i></div>
      <div className="title">delivery on time</div>
      <div className="desc">If good have problems</div>
     </div>
     <div className="line"></div>

     <div className="service">
      <div className="icon"><i class="fa-solid fa-money-check"></i></div>
      <div className="title">secure payment</div>
      <div className="desc">100% secure payment</div>
     </div>
    </div>
  )
}

export default Services