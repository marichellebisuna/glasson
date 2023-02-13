import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
     
      <div className="options">
        <div className="title">Gender <i class="fa-solid fa-plus"></i> <i class="fa-solid fa-minus"></i></div>
        <div className="option">
          <ul>
            <li>Armani</li>
            <li>Police</li>
            <li>Prado</li>
            <li>Rayban</li>
            <li>Dior</li>           
          </ul>
        </div>
      </div>
       <div className="options">
        <div className="title">Brands <i class="fa-solid fa-plus"></i> <i class="fa-solid fa-minus"></i></div>
        <div className="option">
          <ul>
            <li>Armani</li>
            <li>Police</li>
            <li>Prado</li>
            <li>Rayban</li>
            <li>Dior</li>           
          </ul>
        </div>
      </div>
      
      <div className="options">
        <div className="title">Size <i class="fa-solid fa-plus"></i> <i class="fa-solid fa-minus"></i></div>
        <div className="option">
          <ul>
            <li>Kids</li>
            <li>Extra small</li>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>   
            <li>Extra large</li>       
          </ul>
        </div>
      </div>
      <div className="options">
        <div className="title">Price</div>
        <div className="option">
          <ul>
            <li>Kids</li>
            <li>Extra small</li>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>   
            <li>Extra large</li>       
          </ul>
        </div>
      </div>
     
     
    </div>
  )
}

export default Sidebar