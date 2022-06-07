import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'


class Sign_In extends React.PureComponent {

  static propTypes = {
    
  };

  state = {
    Name: null,
    Country: null,
    Town: null,
    Email: null,
    Password: null,
    controlEmail: false,
    controlPassword: false,
    formVisible: true,
}

EmailAdd = (EO) => {
  this.setState( {Email:EO.target.value} );
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(EO.target.value) ? this.setState( {controlEmail:true} ) : this.setState( {controlEmail:false});
}

PasswordAdd = (EO) => {
  this.setState( {Password:EO.target.value} );
  EO.target.value.length < 4 ? this.setState( {controlPassword:false} ) : this.setState( {controlPassword:true});
}

restoreInfo =()=> {
  if (this.state.Email&&this.state.controlEmail&&this.state.Password&&this.state.controlPassword) {
    $.ajax(
      {
          url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : this.state.Password },
          success : this.readReady, error : this.errorHandler
      }
  );
  }

}

 readReady=(callresult)=> {
  if ( callresult.error!=undefined )
      alert(callresult.error);
  else if ( callresult.result!="" ) {
    this.setState( {formVisible:false} );
      var info=JSON.parse(callresult.result);
      console.log(info);
  }
}

errorHandler=(jqXHR,statusStr,errorStr)=> {
  alert(statusStr+' '+errorStr);
}

  render() {

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        {
          this.state.formVisible&&
        <div  action="#" noValidate className='form-sign-up'>
          <div className="clearfix">
              <label id="label-e-mail-up" htmlFor="e-mail-up">Ваш e-mail:</label>
              <div className="registration"><input  id="e-mail-up" type="text" name="mail" onChange={this.EmailAdd}></input>
                  {
                    !this.state.Email&&
                    <div className="ErrorValid">Поле не должно быть пустым.</div>
                  }
                  {
                    !this.state.controlEmail&&
                    <div className="ErrorValid">E-mail не валидный.</div>
                  }
              </div>
          </div>
          <div className="clearfix">
              <label id="label-password-up" htmlFor="password-up">Введите пароль:</label>
              <div className="registration"><input  id="password-up" type="text" name="password" onChange={this.PasswordAdd}></input>
                  {
                    !this.state.Password&&
                    <div className="ErrorValid">Поле не должно быть пустым.</div>
                  }
                  {
                    !this.state.controlPassword&&
                    <div className="ErrorValid">Введите не менее 4 знаков.</div>
                  }
              </div>
          </div>
          <button id="submit" type="submit" className={`${
                      this.state.Email&&this.state.controlEmail&&this.state.Password&&this.state.controlPassword
                      ?'ButtonIn'
                      :'ButtonOff'} ${'EditButtons'}`} onClick={this.restoreInfo}>Войти</button>
        </div>
        }
        {
          !this.state.formVisible&&
          <h2 className='Registr'>Вы успешно вошли в свой аккаунт.</h2>
        }
      </div>
    );
  }
}

export default Sign_In;
