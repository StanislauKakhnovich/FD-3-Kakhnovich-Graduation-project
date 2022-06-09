import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {connect} from 'react-redux';

import './Sign_Up.css';

class int_Sign_Up extends React.PureComponent {

  state = {
    dataReady: true,
    Name: null,
    Country: null,
    Town: null,
    Email: null,
    Password: null,
    controlEmail: false,
    controlPassword: false,
    formVisible: true,
    controlLatinPassword: false,
    infoUser: null,

}

NameAdd = (EO) => {
  this.setState( {Name:EO.target.value} );
}

CountryAdd = (EO) => {
  this.setState( {Country:EO.target.value} );
}

TownAdd = (EO) => {
  this.setState( {Town:EO.target.value} );
}


EmailAdd = (EO) => {
  this.setState( {Email:EO.target.value} );
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(EO.target.value) ? this.setState( {controlEmail:true} ) : this.setState( {controlEmail:false});
}

PasswordAdd = (EO) => {
  this.setState( {Password:EO.target.value} );
  EO.target.value.length < 6 ? this.setState( {controlPassword:false} ) : this.setState( {controlPassword:true});
  /^(?=.*\d)(?=.*[A-Za-z])(?=.*[\_])[0-9a-zA-Z\_]{6,}$/.test(EO.target.value) ? this.setState( {controlLatinPassword:true} ) : this.setState( {controlLatinPassword:false});
}

postStoreInfo=()=> {
  this.setState({dataReady:false});
  if (this.state.Name&&this.state.Country&&this.state.Town&&
    this.state.Email&&this.state.controlEmail&&this.state.Password&&this.state.controlPassword&&this.state.controlLatinPassword) {
      let info={
        name: this.state.Name,
        country: this.state.Country,
        town: this.state.Town,
        email: this.state.Email,
        password: this.state.Password,
        basketProducts: [],
      }
      this.setState( {infoUser:info} );
      
      $.ajax( {
              url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
              data : { f : 'INSERT', n : this.state.Password, v : JSON.stringify(info)},
              success : this.readReady, error : this.errorHandler
          }
      );
    }
}


  readReady = (callresult)=> {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
      this.setState({dataReady:true});
      this.setState( {formVisible:false} );
      this.props.dispatch( { type:"SIGN_SUCCESS" } );
      this.props.dispatch( { type:"PASSWORD_SUCCESS", infoReg: this.state.infoUser } );
      }
  };

errorHandler = (jqXHR,statusStr,errorStr) => {
    alert(statusStr+' '+errorStr);
  }

  render() {

    if ( !this.state.dataReady )
    return <div id="preloader" className="hidden" aria-busy='true' aria-label='Загрузка данных, пожалуйста подождите.' role={'progressbar'}>
      <img className="LaptopPreloader" src={`../images/Apple_MacBook_Pro_16_2019_MVVJ2.jpeg`} title="Laptop"></img>
      </div>

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        {
          this.state.formVisible&&
        <div  action="#" noValidate className='form-sign-up'>
          <div className="clearfix">
              <label id="label-name" htmlFor="name">Ваше имя:</label>
              <div className="registration"><input  id="name" type="text" name="nameUser" onChange={this.NameAdd}></input>
                {
                  !this.state.Name&&
                  <div className="ErrorValid">Поле не должно быть пустым.</div>
                }
              </div>
          </div>
          <div className="clearfix">
              <label id="label-country" htmlFor="country">Страна:</label>
              <div className="registration"><input  id="country" type="text" name="country" onChange={this.CountryAdd}></input>
                  {
                    !this.state.Country&&
                    <div className="ErrorValid">Поле не должно быть пустым.</div>
                  }
              </div>
          </div>
          <div className="clearfix">
              <label id="label-town" htmlFor="town">Город:</label>
              <div className="registration"><input  id="town" type="text" name="town"  onChange={this.TownAdd}></input>
                  {
                    !this.state.Town&&
                    <div className="ErrorValid">Поле не должно быть пустым.</div>
                  }
              </div>
          </div>
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
                    <div className="ErrorValid">Введите не менее 6 знаков.</div>
                  }
                  {
                    !this.state.controlLatinPassword&&
                    <div className="ErrorValid">Пароль должен содержать латинские буквы, цифры и нижние подчеркивания.</div>
                  }
              </div>
          </div>
          <button id="submit" type="submit" className={`${this.state.Name&&this.state.Country&&this.state.Town&&
                      this.state.Email&&this.state.controlEmail&&this.state.Password&&this.state.controlPassword&&
                      this.state.controlLatinPassword
                      ?'ButtonIn'
                      :'ButtonOff'} ${'EditButtons'}`} onClick={this.postStoreInfo} >Зарегистрироваться</button>
        </div>
        }
        {
          !this.state.formVisible&&
          <h2 className='Registr'>Вы успешно прошли регистрацию.</h2>
        }
      </div>
      
    );
  }
}

const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux
const Sign_Up = connect(mapStateToProps)(int_Sign_Up);

export default Sign_Up;
