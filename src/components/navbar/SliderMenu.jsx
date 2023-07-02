import React, { useState,useRef,useEffect } from 'react';
import { MdHome } from 'react-icons/md';
import { GrUserAdd } from 'react-icons/gr';
import { Icon, ListItem, MenuContent, NavLink, SlidingMenuContainer,ButtonMenu,ButtonMenuClose } from './Slidingmenu';
import {BsMenuUp } from "react-icons/bs";
import {AiFillCloseCircle  } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/userActions';
import {FaUserCheck  } from "react-icons/fa";

import {  } from "react-icons/ai";
import { StyledButton2 } from '../common/Button';
const SliderMenu = () => {
const dispatch =useDispatch();

const handleLOgout=()=>{
dispatch(logoutAction())
localStorage.removeItem("loggedIn");

}

  const userEmail = useSelector((state) => {
    
    return state.user.userEmail;
  });
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const menuRef=useRef(null);

 


useEffect(()=>{

  const handleClickOutside=(e)=>{
    if(menuRef.current && !menuRef.current.contains(e.target)){
    closeMenu();
    
    }
    
    };

document.addEventListener('mousedown',handleClickOutside);

return()=>{

document.addEventListener('mousedown',handleClickOutside);

};

},[]);
  return (
    <div>
      <ButtonMenu onClick={openMenu}>
      
      <BsMenuUp/>
  
        Menu
        

      </ButtonMenu>
      <SlidingMenuContainer isOpen={isOpen} ref={menuRef}>
      <ButtonMenuClose onClick={closeMenu}>
        <AiFillCloseCircle/>
        </ButtonMenuClose>
        <MenuContent>
      <ul>
     {userEmail && <li>Sesión iniciada como: {userEmail}</li>}
      {userEmail&& <StyledButton2 onClick={handleLOgout} >
                Cerrar sesión
              </StyledButton2>}
               <ListItem>
        <NavLink to="/" onClick={closeMenu} >
          <Icon>
          <MdHome fontSize='50px' />
          </Icon>
         Inicio
         
        </NavLink>
        </ListItem>
      
        <ListItem>
              <NavLink to="/login"onClick={closeMenu}>
                <Icon>
                < FaUserCheck fontSize='50px' />
                </Icon>
                Logueate
                
          </NavLink>
        </ListItem>
   
   
   
   
    <ListItem>
              <NavLink to="/register"onClick={closeMenu}>
                <Icon>
                <GrUserAdd fontSize='50px' />
                </Icon>
                Registrarse
                
          </NavLink>
        </ListItem>
        
      </ul>
    </MenuContent>
    </SlidingMenuContainer>
</div>
  );
};

export default SliderMenu;