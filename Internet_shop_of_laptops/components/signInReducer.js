
const initState={
    stateIn: false,
  };
  

  function signInReducer(state=initState,action) {
      switch (action.type) {
  
      case "SIGN_SUCCESS": {
        let newState={...state};
        newState.stateIn=true;
        return newState;
      }
    
      default:
        return state;

  }
}
  
  export default signInReducer;