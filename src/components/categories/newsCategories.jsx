import { NewsCategoriesContainer, HamburgerMenu, MenuButton, MenuList, MenuLink } from "./newsCategoriesStyle";
import { MenuItem } from "./newsCategoriesStyle";

import React, { useState } from 'react';
const NewsCategories = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const newsCategories = [
    { name: 'Política', link: '/noticias/politica' },
    { name: 'Deportes', link: '/noticias/deportes' },
    { name: 'Tecnología', link: '/noticias/tecnologia' },
    { name: 'Cultura', link: '/noticias/cultura' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NewsCategoriesContainer>
      <HamburgerMenu>
        <MenuButton onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" width="20" height="20">
            <rect width="100" height="12" rx="8"></rect>
            <rect y="30" width="100" height="12" rx="8"></rect>
            <rect y="60" width="100" height="12" rx="8"></rect>
          </svg>
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
export default NewsCategories