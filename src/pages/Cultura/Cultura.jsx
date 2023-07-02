import React from 'react'
import noticias from '../../components/Noticias/noticias' ;
import{Title,Content,TitleNews} from '../../components/common/PagesStyles'
import  { ButtonContainer, ButtonLeer, StyledButton, StyledButton2 } from '../../components/common/Button';
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import Divider from '../../components/common/Divider';
import { SectionContainer } from '../../components/common/SectionStyled';
import { Link } from 'react-router-dom';


const Cultura = () => {
 
    const savedNoticias = useSelector((state) => state.news.savedNoticias);
    const dispatch = useDispatch();
  
    const cultureNoticias = noticias.filter((noticia) =>
      noticia.category.includes("Cultura")
    );
  
    const handleSaveNoticia = (noticia) => {
      dispatch(addSavedNoticia(noticia));
    };
  
    const handleRemoveNoticia = (noticia) => {
      dispatch(removeSavedNoticia(noticia.id));
    };
  

return (
    <SectionContainer>
       <Title>Cultura</Title>
      {cultureNoticias.map((noticia) => (
        <div key={noticia.id}>
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




export default Cultura