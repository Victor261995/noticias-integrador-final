import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia ,addSavedNoticia} from "../../redux/actions";
import noticias from "../../components/Noticias/noticias";
import { Title,Content, TitleNews } from '../../components/common/PagesStyles';
import { ButtonContainer, ButtonLeer, StyledButton, StyledButton2 } from "../../components/common/Button";
import Divider from "../../components/common/Divider";
import { SectionContainer } from "../../components/common/SectionStyled";
import { Link } from "react-router-dom";

const Deportes = () => {
  const savedNoticias = useSelector((state) =>state.news.savedNoticias);
  const dispatch = useDispatch();

  const DepoNoticias = noticias.filter((noticia) =>
    noticia.category.includes("Deportes")
  );

  const handleSaveNoticia = (noticia) => {
    dispatch(addSavedNoticia(noticia));
  };

  const handleRemoveNoticia = (noticia) => {
    dispatch(removeSavedNoticia(noticia.id));
  };

  return (
    <SectionContainer>
    <Title>Deportes</Title>
    {DepoNoticias.map((noticia) => (
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

export default Deportes;