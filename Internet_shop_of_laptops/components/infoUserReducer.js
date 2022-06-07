
const initState={
    infoUser: null,
  };
  
  // в редьюсере state - это не весь state Redux, а только тот раздел state,
  // за который отвечает данный редьюсер

  function infoUserReducer(state=initState,action) {
      switch (action.type) {
  
      case "PASSWORD_SUCCESS": {
        // хотелось бы просто увеличить state.cnt
        // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!

        let newState={...state};
        newState.infoUser=action.infoReg;
        console.log(newState)
        return newState;
      }
    
      default:
        return state;

  }
}
  
  export default infoUserReducer;