import React from "react";
import { Link } from "react-router-dom";
import {NavbarStyled} from "./navbarStyled";
import {MdHotelClass,MdHome } from "react-icons/md";
import {GrUserAdd  } from "react-icons/gr";
import logo from './logo.png';
import { logoStyles } from "./navbarStyled";
function Navbar() {
  return (
    < NavbarStyled>
      <div className="Logo">
        <Link to="/"><img src={logo} alt="Noticias Pirinola" style={logoStyles} /></Link>
      </div>
      <div className="Title">
        <h1>Noticias pirinola </h1>
      </div>
      
      <div className="nav-links">
      <ul>
        <li>
          <Link className="nav-link" to="/"><MdHome  fontSize={window.innerWidth < 900 ?"30px":"50px" }>Inicio</MdHome> </Link>
        </li>
        <li>
          <Link className="nav-link" to="/saved"><MdHotelClass fontSize={window.innerWidth < 900 ? "30px" : "50px"}  >Noticias guardadas</MdHotelClass></Link>
        </li>
        <li>
          <Link className="nav-link" to="/register"><GrUserAdd fontSize={window.innerWidth < 900 ? "30px" : "50px"} >Registrarse</GrUserAdd></Link>
        </li>
      </ul>
      </div>
    
    </NavbarStyled>
    
  );
}


export default Navbar;