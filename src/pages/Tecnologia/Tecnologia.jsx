import React from 'react';
import noticias from '../../components/Noticias/noticias';
import { ButtonContainer, ButtonLeer, StyledButton, StyledButton2 } from '../../components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import Divider from '../../components/common/Divider';
import { SectionContainer} from '../../components/common/SectionStyled';
import { Title,Content, TitleNews } from '../../components/common/PagesStyles';
import { Link } from 'react-router-dom';

const Tecnologia = () => {
  const savedNoticias = useSelector((state) =>state.news.savedNoticias);
  const dispatch = useDispatch();

  const TechNoticias = noticias.filter((noticia) =>
    noticia.category.includes("Tecnologia")
  );

  const handleSaveNoticia = (noticia) => {
    dispatch(addSavedNoticia(noticia));
  };

  const handleRemoveNoticia = (noticia) => {
    dispatch(removeSavedNoticia(noticia.id));
  };
  const handleLeerNoticiaCompleta = () => {
    window.scrollTo(0, 0);
  };

  return (
    <SectionContainer>
      <Title> Ultimas novedades Tech </Title>
      {TechNoticias.map((noticia) => (
        <div key={noticia.id}>
          <TitleNews>{noticia.title}</TitleNews>
          <Content>{noticia.content}</Content>
          <ButtonContainer>
            {savedNoticias.some((savedNoticia) => savedNoticia.id === noticia.id) ? (
              <>
                <StyledButton2 onClick={() => handleRemoveNoticia(noticia)}>
                  Eliminar de favoritos
                </StyledButton2>
                <ButtonLeer onClick={() => window.location.href = `/noticias/${noticia.id}`}>
                  Leer noticia completa
                </ButtonLeer>
              </>
            ) : (
              <>
            <StyledButton onClick={() => handleSaveNoticia(noticia)}>
                  Guardar noticia en favoritos
            </StyledButton>
            <Link to={`/noticias/${noticia.id}`}onClick={handleLeerNoticiaCompleta}  >
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
          

export default Tecnologia;