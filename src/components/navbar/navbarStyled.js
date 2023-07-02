import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  background-color: red;
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin-top: 0;
  .Title {
    font-family: 'Pacifico', cursive;
    font-size: 30px;

    @media (max-width: 900px) {
      font-size: 15px;
    }
  
  }
`  
export const logoStyles = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
};
  





