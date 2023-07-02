import React ,{useState}from "react";
import { Link, NavLink } from "react-router-dom";
import {NavbarStyled} from "./navbarStyled";
import logo from './logo.png';
import { logoStyles } from "./navbarStyled";
import DividerNav from "./DividerNav";
import SliderMenu from "./SliderMenu";
import { Icon, ListItem } from "./Slidingmenu";
import { MdHotelClass } from "react-icons/md";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { removeSavedNoticia } from "../../redux/actions";
import { Content, Title, TitleNews } from "../common/PagesStyles";
import { ButtonContainer,ButtonSaves, StyledButton2 } from "../common/Button";

const Navbar=()=>{
  const savedNoticias = useSelector((state) => state.news.savedNoticias) || [];
  const dispatch = useDispatch();
 const [modalOpen, setModalOpen]=useState(false);

 const handleRemoveNoticia = (id) => {
  dispatch(removeSavedNoticia(id));
  
};

const openModal = () => {
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
};

  return (
    <div>
    < NavbarStyled>
      <div className="Logo">
        <Link to="/"><img src={logo} alt="Noticias Pirinola" style={logoStyles} /></Link>
      </div>
      <div className="Title">
        <h1>Noticias pirinola </h1>
      </div>
      
      
      <div>
      <SliderMenu/>
      
      <ListItem>
      
        <ButtonSaves onClick={openModal}>
          
    <MdHotelClass />
    Noticias Guardadas
    </ButtonSaves>
  
   </ListItem>


    </div>
 
    </NavbarStyled>
    <DividerNav/>
   
   
   
   
    <Modal
        isOpen={modalOpen}s
        onRequestClose={closeModal}
        contentLabel="Noticias Guardadas"
      ><StyledButton2 onClick={closeModal}>Cerrar</StyledButton2>
        <Title>Noticias Guardadas</Title>
        {savedNoticias.length > 0 ? (
          savedNoticias.map((noticia) => (
            <div key={noticia.id}>
              <TitleNews>{noticia.title}</TitleNews>
              <ButtonContainer>
              <Link to={`/noticias/${noticia.id}`} onClick={() => setModalOpen(false)}>
                  Leer noticia completa
                </Link>
              <StyledButton2 onClick={() => handleRemoveNoticia(noticia.id)}>
                Eliminar noticia
              </StyledButton2>
              </ButtonContainer>
            </div>
          ))
        ) : (
          <Content>No hay noticias guardadas.</Content>
        )}
        
      </Modal>
    
    
      </div>

    
  );
}


export default Navbar;