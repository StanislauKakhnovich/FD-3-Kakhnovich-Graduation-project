import $ from 'jquery';


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
        // хотелось бы просто увеличить state.cnt
        // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!

        let newState={...state};
        // action.addProdact
        newState.infoUser={...newState.infoUser, basketProducts:[...newState.infoUser.basketProducts,action.addProdact]}
        // newState.infoUser.basketProducts= ;
        storeInfo(newState);
        // console.log(newState);
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