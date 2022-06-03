import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className='HeaderLinks'>
        <NavLink to="/" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Главная</NavLink>
        <NavLink to="/products" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Товары</NavLink>
        <NavLink to="/sign_up" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Зарегистрироваться</NavLink>
        <NavLink to="/sign_in" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Войти</NavLink>
        <NavLink to="/basket" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Корзина</NavLink>
        <NavLink to="/contacts" className={obj => ("PageLink"+(obj.isActive?" ActivePageLink":""))}>Контакты</NavLink>
      </div>
    );   
  }
}
    
export default PagesLinks;
