﻿import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LaptopProduct from './LaptopProduct';

import './LaptopProducts.css';

class int_LaptopProducts extends React.PureComponent {

  static propTypes = {
    products: PropTypes.array.isRequired, // получено из Redux
  };
  
  state = {
    filter: true,
    asus: {"nameProduct": "Asus"},

  }


  filterSide = () => {
    this.setState( {filter:false} );
  }
  closeFilterSide = () => {
    this.setState( {filter:true} );
  }
  choice = (EO) => {
 
      console.log(EO.target.value, EO.target.checked);
 
  }
  //apple={"nameProduct": "Apple"};
  // asus: {"nameProduct": "Asus"},
  // lenovo: {"nameProduct": "Lenovo"},
  // hp: {"nameProduct": "HP"},
  // honor: {"nameProduct": "HONOR"},
  // xiaomi: {"nameProduct": "Xiaomi"},
  // huawei: {"nameProduct": "Huawei"},
  // study: {"appointment": "для учебы"},
  // home: {"appointment": "для дома"},
  // game: {"appointment": "игровой"},
  // code: {"appointment": "для программирования"},
  // size: {"appointment": "компактный"},

  render() {

    var productsCode=this.props.products.map( product =>
      <LaptopProduct key={product.id} info={product}  />
    );
    return (
        <div className='ContainerProducts'>
          <div className='TopPanel'>
            <button className='AllProduct'>Вывести весь список</button>
            <button className='TenProduct'>Выводить по 10 товаров</button>
            <button className='NextTenProduct'>Следующие 10 товаров</button>
            <button className='Filters' onClick={this.filterSide}>Фильтры</button>
          </div>
          <div className={this.state.filter?'Hidden':'SidePanelFilters'}>
                {
                  !this.state.filter&&
                  <button className='CloseFilters' onClick={this.closeFilterSide}>Закрыть панель фильтров</button>
                }
                {
                  !this.state.filter&&
                  <div className="SideNameFilter">Фильтры</div>
                }
            <select className='FilterPrice' name='typePrice'>
                <option value={1}>Сначала популярные</option>
                <option value={2}>Сначала дешевые</option>
                <option value={3}>Сначала дорогие</option>
            </select>
              <div className='Producer'>
                <div className='SideNameFilter'>Производитель:</div>
                <input className='LeftRadio' type='checkbox' name='producer' value={"Apple"} onClick={this.choice}/><span className='LeftVariant'>Apple</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={this.state.asus} onClick={this.choice}/><span className='LeftVariant'>Asus</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={this.state.lenovo} onClick={this.choice}/><span className='LeftVariant'>Lenovo</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={this.state.hp} onClick={this.choice}/><span className='LeftVariant'>HP</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={this.state.honor} onClick={this.choice}/><span className='LeftVariant'>HONOR</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={this.state.xiaomi} onClick={this.choice}/><span className='LeftVariant'>Xiaomi</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={this.state.huawei} onClick={this.choice}/><span className='LeftVariant'>Huawei</span>
              </div>
              <div className='Appointment'>
              
                <div className='SideNameFilter'>Назначение:</div>
                <input className='LeftRadio' type='checkbox' name='appointment' value={'для учебы'}/><span className='LeftVariant'>для учебы</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={'для дома'}/><span className='LeftVariant'>для дома</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={'игровой'}/><span className='LeftVariant'>игровой</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={'для программирования'}/><span className='LeftVariant'>для программирования</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={'компактный'}/><span className='LeftVariant'>компактный</span>
              </div>
              <div className='SkreenDiagonal'>
                <div className='SideNameFilter'>Диагональ экрана:</div>
                <input className='LeftRadio' type='checkbox' name='skreen' value={'13'}/><span className='LeftVariant'>менее 13&rdquo;</span><br/>
                <input className='LeftRadio' type='checkbox' name='skreen' value={'13-14'}/><span className='LeftVariant'>13 &ndash; 14&rdquo;</span><br/>
                <input className='LeftRadio' type='checkbox' name='skreen' value={'15-16'}/><span className='LeftVariant'>15 &ndash; 16&rdquo;</span><br/>
                <input className='LeftRadio' type='checkbox' name='skreen' value={19}/><span className='LeftVariant'>17&rdquo;</span><br/>
              </div>
              <div className='Ram'>
                <div className='SideNameFilter'>Оперативная память:</div>
                <input className='LeftRadio' type='checkbox' name='ram' value={20}/><span className='LeftVariant'>от 8 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='ram' value={21}/><span className='LeftVariant'>от 16 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='ram' value={22}/><span className='LeftVariant'>от 32 ГБ</span><br/>
              </div>
              <div className='HddSdd'>
                <div className='SideNameFilter'>Емкость накопителя:</div>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={23}/><span className='LeftVariant'>от 256 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={24}/><span className='LeftVariant'>от 512 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={25}/><span className='LeftVariant'>от 1 ТБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={26}/><span className='LeftVariant'>от 2 ТБ</span><br/>
              </div>
              <div className='Os'>
                <div className='SideNameFilter'>Операционная система:</div>
                <input className='LeftRadio' type='checkbox' name='os' value={27}/><span className='LeftVariant'>Windows 11</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={28}/><span className='LeftVariant'>Windows 10</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={29}/><span className='LeftVariant'>Linux</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={30}/><span className='LeftVariant'>Mac OS</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={31}/><span className='LeftVariant'>Без ОС</span>
              </div>
          </div>
          <div className='LaptopProducts'>
            {productsCode}
          </div>
          <div className='BottomPanel'>
            <button className='NextTenProduct'>Следующие 10 товаров</button>
          </div>
        </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    products: state.info.data,
  };
};
    
const LaptopProducts = connect(mapStateToProps)(int_LaptopProducts);

export default LaptopProducts;

