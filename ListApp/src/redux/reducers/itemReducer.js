const initialState = [];

const itemReducer = (state = initialState, action) => {
    switch(action.type){
      case 'FETCH_ITEM':
        return action.payload;
      case 'ADD_ITEM':
        return action.payload
      case 'DELETE_ITEM':
        return state.filter((item) => item.id !== action.payload);
      case 'EDIT_ITEM':
        return action.payload;
      default:
        return state;
    }
};
  
export default itemReducer;