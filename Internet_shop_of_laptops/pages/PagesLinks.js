import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import './PagesLinks.css';

class int_PagesLinks extends React.Component {

  static propTypes = {
    sign: PropTypes.bool.isRequired, // получено из Redux
  };
  
  
  render() {

    return (
      <div className='HeaderLinks'>

        <NavLink to="/" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Главная</NavLink>

        <NavLink to="/products" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Товары</NavLink>
        { 
        !this.props.sign&&
        <NavLink to="/sign_up" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Зарегистрироваться</NavLink>
        }
        { 
        !this.props.sign&&
        <NavLink to="/sign_in" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Войти</NavLink>
        }
        { 
        this.props.sign&&
        <NavLink to="/basket" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Корзина</NavLink>
        }
        
        <NavLink to="/contacts" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Контакты</NavLink>

      </div>
    );   
  }
}
    


const mapStateToProps = function (state) {
  return {
    sign: state.signIn.stateIn,
   };
};
    
const PagesLinks = connect(mapStateToProps)(int_PagesLinks);

export default PagesLinks;
