

import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  background-color: #f7f7f7;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 0 auto;
  margin-bottom: 10px;
  font-family: 'Pacifico', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
      
        font-size: 20px;
      }

`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 2;
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:'Rubik',sans-serif ;
  font-weight:300;
  font-size: larger;
`;
export const TitleNews = styled.h3`
font-family: 'Playfair Display',sans-serif;
font-weight: 400 italic;
font-size:x-large;
 margin: 0 auto;
  margin-bottom: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;

`;