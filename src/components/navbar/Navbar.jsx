import React from 'react'
import logo from '../../static/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
        <header className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <Link className="biorigen" to={"/"}>BIO<span>rigen</span></Link>
            <Link className='navbar-btn' to={"/terapias"}>Terapias</Link>
            <Link className='navbar-btn' to={"/fq"}>Preguntas frecuentes</Link>
            <img src={logo} alt="logo" className="logo" />
        </header>
  )
}
