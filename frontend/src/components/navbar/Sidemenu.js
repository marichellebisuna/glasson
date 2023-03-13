import { Link, useLocation } from 'react-router-dom'
import './sidemenu.scss'

const Sidemenu = ({setShowMenu, showMenu}) => {
  const location = useLocation().pathname.split("/")[1]

  return (
    <div className={showMenu?"sidemenu":"sidemenu close"}> 
      <div className="sides">    
        <Link to="/">
          <div className={location==="" ?'listitem active':'listitem'}  onClick={()=>setShowMenu(false)}>      
          Home</div>
          </Link>
        <Link to="/products">
          <div className={location==="products" ?'listitem active':'listitem'} onClick={()=>setShowMenu(false)}>Products</div>
          </Link>
        <Link to="/product/:id">
          <div className={location==="product" ?'listitem active':'listitem'} onClick={()=>setShowMenu(false)}>Product</div>
          </Link>
        <Link to="/login">
          <div className={location==="login" ?'listitem active':'listitem'} onClick={()=>setShowMenu(false)}>Login</div>
          </Link>
        <Link to="/register">
          <div className={location==="register" ?'listitem active':'listitem'} onClick={()=>setShowMenu(false)}>Register</div>
          </Link>
      </div>
    </div>
  )
}

export default Sidemenu