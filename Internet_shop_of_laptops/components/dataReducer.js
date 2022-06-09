import $ from 'jquery';
// import productsArr from '../data/data.json';



const initState={
    data: [],
  };

  function dataReducer(state=initState,action) {
    
    switch (action.type) {

      case "DATABASE_SUCCESS": {
        let newState={...state};
        newState.data=action.dataBase;
        return newState;
      }
  
  
      default:
        return state;
    }
  }

  export default dataReducer;