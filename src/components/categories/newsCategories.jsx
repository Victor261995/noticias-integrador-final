import { NewsCategoriesContainer, HamburgerMenu, MenuButton, MenuList, MenuLink } from "./newsCategoriesStyle";
import { MenuItem } from "./newsCategoriesStyle";
import { TfiAlignJustify } from "react-icons/tfi";
import React, { useState,useRef,useEffect } from 'react';
const NewsCategories = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const containerRef=useRef(null);
  const newsCategories = [
    { name: 'Política', link: '/noticias/politica' },
    { name: 'Deportes', link: '/noticias/deportes' },
    { name: 'Tecnología', link: '/noticias/tecnologia' },
    { name: 'Cultura', link: '/noticias/cultura' },
  ];

  const handleClickOutside=(event)=>{
    if(containerRef.current && !containerRef.current.contains(event.target)){
    setMenuOpen(false);
    
    }
    };

 useEffect(()=>{


document.addEventListener("mousedown",handleClickOutside);
return()=>{

document.removeEventListener("mousedown",handleClickOutside)

};
},[containerRef]);

   const ToggleMenu=()=>{
setMenuOpen(!menuOpen)

   };

  return (
    <NewsCategoriesContainer ref={containerRef}>
      <HamburgerMenu>
        <MenuButton onClick={ToggleMenu}>
        <TfiAlignJustify/>
        </MenuButton>
      </HamburgerMenu>
      <MenuList isOpen={menuOpen}>
        {newsCategories.map((newsCategory) => (
          <MenuItem key={newsCategory.name}>
            <MenuLink href={newsCategory.link}>{newsCategory.name}</MenuLink>
          </MenuItem>
        ))}
      </MenuList>
      </NewsCategoriesContainer>
)}
export default NewsCategories;