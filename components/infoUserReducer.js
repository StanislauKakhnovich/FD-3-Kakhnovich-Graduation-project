import $ from 'jquery';


const initState={
    infoUser: {},
  };
  

  function infoUserReducer(state=initState,action) {
      switch (action.type) {
  
      case "PASSWORD_SUCCESS": {
        let newState={...state};
        newState.infoUser=action.infoReg;
        return newState;
      }

      case "ADD_PRODUCT_TO_BASKET": {

        let newState={...state};
        newState.infoUser={...newState.infoUser, basketProducts:[...newState.infoUser.basketProducts,action.addProdact]}
        storeInfo(newState);
        return newState;
      }

      case "INC_PRODUCT": {
        let newState = JSON.parse(JSON.stringify(state))
        let arr = newState.infoUser.basketProducts;
        if(arr.length==0) arr.push(action.incProduct);
        else {
          if(arr.every(elem=>elem.id!=action.incProduct.id)) arr.push(action.incProduct);
          else {
            for(let i=0; i<arr.length; i++){
              if(arr[i].id==action.incProduct.id) {
                arr[i].quantity++;
                 break;
              } 
            }
          }
        }
         newState.infoUser.basketProducts=arr;
        storeInfo(newState);
        return newState;
      }
      case "DEC_PRODUCT": {
        let newState = JSON.parse(JSON.stringify(state))
        let arr = newState.infoUser.basketProducts;
            for(let i=0; i<arr.length; i++){
              if(arr[i].id==action.decProduct.id) {
                arr[i].quantity--;
                 break;
              } 
            }
        newState.infoUser.basketProducts=arr;
        storeInfo(newState);
        return newState;
      }


      case "INC": {
        let newState = JSON.parse(JSON.stringify(state))
        let arr = newState.infoUser.basketProducts;
        arr.map(elem=>{
          if(elem.id==action.incProduct.id) elem=elem.quantity++
        })
         newState.infoUser.basketProducts=arr;
        storeInfo(newState);
        return newState;
      }

      case "DEC": {
        let newState = JSON.parse(JSON.stringify(state))
        let arr = newState.infoUser.basketProducts;
        arr.map(elem=>{
          if(elem.id==action.decProduct.id) elem=elem.quantity--
        })
         newState.infoUser.basketProducts=arr;
        storeInfo(newState);
        return newState;
      }

      case "DELETE": {
        let newState = JSON.parse(JSON.stringify(state))
        let arr = newState.infoUser.basketProducts;
        arr=arr.filter(elem=>{
         return elem.id!=action.deleteProduct.id
        })
         newState.infoUser.basketProducts=arr;
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