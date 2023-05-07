import { ADD_SAVED_NOTICIA,REMOVE_SAVED_NOTICIA } from "./actions";

const initialState = {
  noticias: [],
  savedNoticias: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SAVED_NOTICIA:
      return {
        ...state,
        savedNoticias: [...state.savedNoticias, action.payload],
      };
      case REMOVE_SAVED_NOTICIA:
        const newSavedNoticias = state.savedNoticias.filter(
          (noticia) => noticia.id !== action.payload
        );
        return {
        ...state,
        savedNoticias: newSavedNoticias,};


    default:
      return state;
     
  }
};

export default reducer;