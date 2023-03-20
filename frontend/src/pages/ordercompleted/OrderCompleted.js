import './ordercompleted.scss'

const OrderCompleted = () => {
  return (
    <div className="ordercompleted">
      <i className="fa-solid fa-check"></i>
      <h1>Your order is completed!</h1>
      <div className="text">Thank you. Your order has been received.</div>
      <div className="container dashed">
        <div className="text">
          <label>Order Number</label>
          <div className="detailed">039422</div>
        </div>
        <div className="text">
          <label>Date</label>
          <div className="detailed">27/04/2022</div>
        </div>
        <div className="text">
          <label>Total</label>
          <div className="detailed">$2984.10</div>
        </div>
        <div className="text">
          <label>Payment Method</label>
          <div className="detailed">Direct Bank Transfer</div>
        </div>
      </div>
      <div className="container solid">
        <h3>Order Details</h3>
        <div className="text solid">
          <label>Product</label>
          <div className="detailed">Subtotal</div>
        </div>
        <div className="text order">
          <div className="item-order">
            <label>Apple MacBook with Apple M1 Chip x 2</label>
            <div className="detailed">$229.99</div>
          </div>
          <div className="item-order">
            <label>Apple MacBook with Apple M1 Chip x 2</label>
            <div className="detailed">$229.99</div>
          </div>
        </div>
        <div className="text solid ">
          <label>Sub Total</label>
          <div className="detailed">$89</div>
        </div>
        <div className="text solid ">
          <label>Shipping</label>
          <div className="detailed">Free shipping</div>
        </div>
        <div className="text solid ">
          <label>Payment Method</label>
          <div className="detailed">Direct bank transfer</div>
        </div>
        <div className="text solid total">
          <label>Total</label>
          <div className="detailed">$1319</div>
        </div>
      </div>
    </div>
  )
}

export default OrderCompleted