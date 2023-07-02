import { LOGIN_SUCCESS,LOGIN_ERROR ,LOGOUT} from "./userActions";

const initialState = {
 userEmail:localStorage.getItem("userEmail")|| null,
  loggedIn: false,
  errorMessage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("userEmail", action.payload);
      return { ...state, loggedIn: true, errorMessage: null ,userEmail:action.payload};
    case LOGIN_ERROR:
      localStorage.removeItem("userEmail");
      return { ...state, loggedIn: false, errorMessage: action.payload,userEmail:null, };
    case LOGOUT:
        localStorage.removeItem("userEmail");
        return {
          ...state,
          loggedIn: false,
          userEmail: null
        };
      
    default:
      return state;

    };
  };

export default userReducer;