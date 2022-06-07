
const initState={
    stateIn: false,
  };
  
  // в редьюсере state - это не весь state Redux, а только тот раздел state,
  // за который отвечает данный редьюсер

  function signInReducer(state=initState,action) {
      switch (action.type) {
  
      case "SIGN_SUCCESS": {
        // хотелось бы просто увеличить state.cnt
        // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!

        let newState={...state};
        newState.stateIn=true;
        return newState;
      }
    
      default:
        return state;

  }
}
  
  export default signInReducer;