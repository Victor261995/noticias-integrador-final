import React from 'react' 
import noticias from "../../components/Noticias/noticias";
import { SectionContainer } from "../../components/common/SectionStyled";
import { ButtonContainer, ButtonLeer, StyledButton, StyledButton2 } from '../../components/common/Button';

import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import Divider from '../../components/common/Divider';
import { Content, Title, TitleNews } from '../../components/common/PagesStyles';
import { Link } from 'react-router-dom';
const Home = () => {

  const savedNoticias = useSelector((state) => state.news.savedNoticias);
  const dispatch = useDispatch();

  const homeNoticias = noticias.filter((noticia) =>
    noticia.category.includes("home")
  );

  const handleSaveNoticia = (noticia) => {
    dispatch(addSavedNoticia(noticia));
  };

  const handleRemoveNoticia = (noticia) => {
    dispatch(removeSavedNoticia(noticia.id));
  };


  return (
    
    <SectionContainer>
      
<Title>Noticias destacadas</Title>
      {homeNoticias.map((noticia) => (
        <div  key={noticia.id}>
          <TitleNews>{noticia.title}</TitleNews>
          <Content>{noticia.content}</Content>
          <ButtonContainer>
            {savedNoticias.some((savedNoticia) => savedNoticia.id === noticia.id) ? (
              <>
            <StyledButton2 onClick={() => handleRemoveNoticia(noticia)}>
             Eliminar de favoritos
                </StyledButton2>
               
              </>
            ) : (
              <>
             <StyledButton onClick={() => handleSaveNoticia(noticia)}>
             Guardar noticia en favoritos
            </StyledButton>
            
                <Link to={`/noticias/${noticia.id}`}>
                  Leer noticia completa
                </Link>
              </>
            )}
          </ButtonContainer>

      <Divider />
    </div>
      ))}
    </SectionContainer>
  );
};
          

export default Home;