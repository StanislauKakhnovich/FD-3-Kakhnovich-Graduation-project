import $ from 'jquery';
import Immutable from 'immutable';



const initState={
    infoUser: {},
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
        console.log(newState);
        return newState;
      }

      case "ADD_PRODUCT_TO_BASKET": {

        let newState={...state};
        newState.infoUser={...newState.infoUser, basketProducts:[...newState.infoUser.basketProducts,action.addProdact]}
        storeInfo(newState);
        return newState;
      }

      case "INC": {
        // let newState={...state, ...state.infoUser, ...state.infoUser.basketProducts};
        // var x = Immutable(state);
        // var newState = x.setIn([infoUser, basketProducts[action.incProduct.id], quantity], quantity++)
        // let newState=Object.assign(state);
        let newState = JSON.parse(JSON.stringify(state))
        console.log(newState);
        console.log(newState==state);
        
        // let obj = {...newState.infoUser, basketProducts:[...newState.infoUser.basketProducts]}
         let arr = newState.infoUser.basketProducts;
        // let arr = Object.values(Object.assign({},newState.infoUser.basketProducts));
        
        // console.log(arr);

        arr.map(elem=>{
          if(elem.id==action.incProduct.id) elem=elem.quantity++
        })
         newState.infoUser.basketProducts=arr;

        // newState={...newState, newState.infoUser}
        // newState={...newState.infoUser, basketProducts:[...newState.infoUser.basketProducts]}
        // var hash1=Immutable.Map(state);
        // var newState=hash1.set(state.infoUser.basketProducts,arr); // вернётся НОВЫЙ Map (хэш)

        
        // console.log(newState);
        // console.log(newState==state);
        
        storeInfo(newState);
        return newState;
      }

    
      default:
        return state;

  }
}

var updatePassword;
var data;

function storeInfo(newState) {
  updatePassword=Math.random();
  console.log(newState.infoUser.password)
  data=newState.infoUser
  $.ajax( {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f : 'LOCKGET', n : newState.infoUser.password, p : updatePassword },
          success : lockGetReady, error : errorHandler
      }
  );
}

function lockGetReady(callresult) {
  if ( callresult.error!=undefined )
      alert(callresult.error);
  else {
      // нам всё равно, что было прочитано -
      // всё равно перезаписываем
      console.log(data);
      var info=data
      $.ajax( {
              url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
              data : { f : 'UPDATE', n : data.password, v : JSON.stringify(info), p : updatePassword },
              success : updateReady, error : errorHandler
          }
      );
  }
}

function updateReady(callresult) {
  if ( callresult.error!=undefined )
      alert(callresult.error);
}

function errorHandler(jqXHR,statusStr,errorStr) {
  alert(statusStr+' '+errorStr);
}

  export default infoUserReducer;