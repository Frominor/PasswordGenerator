const initialState = {
  Num: 0,
  Value: "",
  Arr: [],
  Password: "",
  IsActvie: false,
};
const CHANGE_NUM = "CHANGE_NUM";
const ADD_PROPERTIES = "ADD_PROPERTIES";
const ADD_VALUE = "ADD_VALUE";
const GET_PASSWORD = "GET_PASSWORD";
const DELETE_PROPERTIES = "DELETE_PROPERTIES";
const CHANGE_ACTIVE = "CHANGE_ACTIVE";
export const PasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NUM:
      return { ...state, Num: action.payload };
    case ADD_VALUE:
      return { ...state, Value: state.Value + action.payload };
    case GET_PASSWORD:
      return { ...state, Password: action.payload };
    case ADD_PROPERTIES:
      return { ...state, Arr: [...state.Arr, action.payload] };
    case DELETE_PROPERTIES:
      return {
        ...state,
        Arr: state.Arr.filter((item) => item != action.payload),
      };
    case CHANGE_ACTIVE:
      return { ...state, IsActvie: action.payload };

    default:
      return { ...state };
  }
};
