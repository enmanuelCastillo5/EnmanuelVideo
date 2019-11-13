const reducer = (state, action) => {
  switch (action.type) {
      case 'SET_FAVORITE':
          return {
              ...state,
              myList: [...state.myList, action.payload],      
        }
        case 'DELETE_FAVORITE':
          return {
              ...state,
              myList: state.myList.filter(items => items.id !== action.payload)
        }
          break;
          case 'LOGIN_REQUEST':
          return {
              ...state,
              user: action.payload,
        }
          break;

      default:
          return state;
         
  }
};
export default reducer;