import './advert.scss'

const Advert = () => {
  return (
  <div className="advert">
    <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/banner-1-mb-min@2x.jpg?v=1632459215" alt="" srcset="" />
    <div className="details">
      <div className="detail">
        <h1>Before you leave...</h1>
      <div className="text">Take 20% off your first order</div>
      <h2>20% OFF</h2>
      <p>Enter the code below at checkout to get 20% off your first order</p>
      <h3> codesale20</h3>
      </div>
      
      <button>continue shopping</button>
    </div>
  </div>
  )
}

export default Advert