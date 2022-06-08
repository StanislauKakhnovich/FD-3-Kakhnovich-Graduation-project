import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {connect} from 'react-redux';

import './Sign_Up.css';

class int_Sign_Up extends React.PureComponent {

  state = {
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
  // updatePassword=Math.random();
  if (this.state.Name&&this.state.Country&&this.state.Town&&
    this.state.Email&&this.state.controlEmail&&this.state.Password&&this.state.controlPassword&&this.state.controlLatinPassword) {
      let info={
        name: this.state.Name,
        country: this.state.Country,
        town: this.state.Town,
        email: this.state.Email,
        password: this.state.Password,
        basketProducts: [
          {"id":10,"nameProduct":"Apple Macbook Air 13 M1 2020 MGN63","description":"13.3\" 2560 x 1600 IPS, 60 Гц, несенсорный, Apple M1 3200 МГц, 8 ГБ, SSD 256 ГБ, встроенная, Mac OS, цвет крышки серый","price":3150,"screenTechnology":"IPS","processorModel":"Apple M1 3200 МГц","RAM":"8 ГБ","driveConfiguration":"SSD 256 ГБ","videoСard":"встроенная","OS":"Mac OS","appointment":"для работы, компактный, ультрабук"},
    {"id":11,"nameProduct":"ASUS ROG Strix G15 G513IH-HN014","description":"15.6\" 1920 x 1080 IPS, 144 Гц, несенсорный, AMD Ryzen 7 4800H 2900 МГц, 16 ГБ DDR4, SSD 512 ГБ, видеокарта NVIDIA GeForce GTX 1650 4 ГБ GDDR6, без ОС, цвет крышки темно-серый","price":3149,"screenTechnology":"IPS","processorModel":"AMD Ryzen 7 4800H 2900 МГц","RAM":"16 ГБ DDR4","driveConfiguration":"SSD 512 ГБ","videoСard":"NVIDIA GeForce GTX 1650 4 ГБ GDDR6","OS":"без ОС","appointment":"игровой"},
        ]
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
      this.setState( {formVisible:false} );
      this.props.dispatch( { type:"SIGN_SUCCESS" } );
      this.props.dispatch( { type:"PASSWORD_SUCCESS", infoReg: this.state.infoUser } );
      }
  };

errorHandler = (jqXHR,statusStr,errorStr) => {
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
