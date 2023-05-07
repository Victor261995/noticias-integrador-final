
import styled from 'styled-components';

export const NewsCategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const HamburgerMenu = styled.div`
  display:block;
   /* @media (max-width: 768px) {
    display: block;
  }*/
`;

export const MenuButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
 
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 170px;
    
  
    width: 50%;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
  
`;
export const MenuItem = styled.li`
  
  /*@media (max-width: 768px) {*/
    margin: 0;
  
  /*}*/
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.2s ease-in-out;
  @media (max-width: 768px) {
    display: block;
    padding: 10px;
    font-size: 16px;
  }

  &:hover {
    color: #0077c0;
  }
`;


/*export const NewsCategoriesContainer = styled.div`
  display: flex;
  align-items: center;
 width: 100%;
  justify-content:center;
  margin: 20px 0;
  text-decoration: none;
  
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin-right: 10px;
display: flex;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;



export const NewsCategoryLink = styled.a`
  text-decoration: none;
  color: #333;
  margin: 0 10px;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0077c0;
  }
`;
*/