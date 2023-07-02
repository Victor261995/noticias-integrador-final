import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SlidingMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: lightcyan;
  transition: right 0.3s ease;
  font-family:'Rubik',sans-serif ;
  ${({ isOpen }) => isOpen && `right: 0;`}
`;

export const ButtonMenu=styled.button`
font-size: 30px;
background-color: transparent;
border: none;
cursor: pointer;
@media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

  :hover {
    color: blue;
  }

:hover {
    color: blue;
  }
`;
export const ButtonMenuClose=styled.button`
font-size: 50px;
background-color: transparent;
border: none;
cursor: pointer;
:hover {
    color: lightcoral;
  }
`;
export const MenuToggle = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #f1f1f1;
`;

export const MenuContent = styled.div`
  padding: 20px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  
  padding: 50px;
  &:hover {
    color: lightblue;
  }
`;

export const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  display: flex;
  
`;

export const Icon = styled.div`
  margin-right: 10px;
`;
