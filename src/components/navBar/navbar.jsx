import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu } from 'react-icons/tfi';
import { IoCloseSharp } from 'react-icons/io5';

export const PROVIDER = createContext(); 

export const NavBar = () => {
  const [current, setCurrent] = useState(false);

  const handleBtnMenu = () => {
    setCurrent(!current);
  }
  return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className='container'>
            <h1><Link className="navbar-brand" to="/">De<span>Fi</span></Link></h1>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/featured">Featured</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/earn">Earn</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer">Contact</a>
        </li>
          </ul>
        </div>
            <button className="btn bg-success">Connect Wallet</button>
          <button onClick={handleBtnMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {current ? <IoCloseSharp /> : <TfiMenu />}
          </button>
          </div>
        </nav>
        </>
    )
};