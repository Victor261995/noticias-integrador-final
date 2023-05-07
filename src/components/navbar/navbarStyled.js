
import styled from 'styled-components'

export const NavbarStyled= styled.div`
background-color: white;
color: black;
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;

.Title {
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  @media (max-width: 900px){
font-size: 15px;

  }
  }


.nav-links {
    ul {
        background-color: white;
      display: flex;
      list-style: none;
      justify-content: space-between;
      width:300px;
      padding: 10px;
      border-radius: 10px;
      align-items: center;
    }

}


.nav-link {
  display: flex;
  
      color: black;
      margin: 0 10px;
      text-decoration: none;
      &:hover {
        color: lightblue;
     }
    
  }
`;
 export const logoStyles = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  
};
export const smallLogoStyles = {
  width: "50px",
  height: "50px",
  borderRadius: "50%"
};

export const smallIconStyles={
 width: "50px",
  height: "50px",
  
}