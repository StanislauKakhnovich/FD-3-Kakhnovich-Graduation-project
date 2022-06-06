import productsArr from '../data/data.json';



const initState={
    data: productsArr,
  };
  
  // в редьюсере state - это не весь state Redux, а только тот раздел state,
  // за который отвечает данный редьюсер

  // function dataReducer(state=initState,action) {
    
  //   switch (action.type) {
  
  //     case "4": {
  //       // хотелось бы просто увеличить state.cnt
  //       // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
  //       console.log('state до обработки редьюсером:',state);
  //       let newState={...state};
  //       newState.data.filter(elem=>{return /Apple/.test(elem.nameProduct)});
  //       console.log('state после обработки редьюсером:',newState);
  //       return newState;
  //     }
      
  //     // case "DEC": {
  //     //   console.log('state до обработки редьюсером:',state);
  //     //   let newState={...state};
  //     //   newState.cnt--;
  //     //   console.log('state после обработки редьюсером:',newState);
  //     //   return newState;
  //     // }
  
  //     default:
  //       return state;
  //   }
  function dataReducer(state=initState,action) {
    // if (action.type==4&&action.isChecked){
    //   let newState={...state};
    //   newState = newState.data.filter(elem=>{return /Apple/.test(elem.nameProduct)});
    //   console.log(newState);
    //  return newState;
    //   // console.log(newState.data.filter(elem=>{return /Apple/.test(elem.nameProduct)}))
    // }
    return state;
  }
  
  // function dataReducer(state=initState,action) {
  
  //   switch (action.type) {
  
  //     case "INC": {
  //       // хотелось бы просто увеличить state.cnt
  //       // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
  //       console.log('state до обработки редьюсером:',state);
  //       let newState={...state};
  //       newState.cnt++;
  //       console.log('state после обработки редьюсером:',newState);
  //       return newState;
  //     }
      
  //     case "DEC": {
  //       console.log('state до обработки редьюсером:',state);
  //       let newState={...state};
  //       newState.cnt--;
  //       console.log('state после обработки редьюсером:',newState);
  //       return newState;
  //     }
  
  //     default:
  //       return state;
  //   }
  // }
  
  export default dataReducer;