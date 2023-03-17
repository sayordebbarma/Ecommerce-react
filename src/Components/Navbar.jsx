import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
        <h1 className="h1">E-Commerce</h1>
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}
