import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
        <h1 className="links"><Link to="/">E-Commerce</Link></h1>
        <div className="links">
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}
