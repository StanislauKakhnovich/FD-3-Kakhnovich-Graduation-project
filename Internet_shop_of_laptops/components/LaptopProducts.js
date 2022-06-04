import React from 'react';
import PropTypes from 'prop-types';

import LaptopProduct from './LaptopProduct';

import './LaptopProducts.css';

class LaptopProducts extends React.PureComponent {

  static propTypes = {
    products:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameProduct: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ),
  };
  state = {
    filter: true,
  }

  filterMobil = () => {
    this.setState( {filter:false} );
  }
  closeFilterMobil = () => {
    this.setState( {filter:true} );
  }


  
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
            <button className='Filters' onClick={this.filterMobil}>Фильтры</button>
          </div>
          <div className={this.state.filter?'Hidden':'FilterLeftMobil'}>
                {
                  !this.state.filter&&
                  <button className='CloseFilters' onClick={this.closeFilterMobil}>Закрыть панель фильтров</button>
                }
                {
                  !this.state.filter&&
                  <div className="LeftNameFilter">Фильтры</div>
                }
            <select className='FilterPrice' name='typePrice'>
                <option value={1}>Сначала популярные</option>
                <option value={2}>Сначала дешевые</option>
                <option value={3}>Сначала дорогие</option>
            </select>
              <div className='Producer'>
                <div className='LeftNameFilter'>Производитель:</div>
                <input className='LeftRadio' type='radio' name='producer' value={4}/><span className='LeftVariant'>Apple</span><br/>
                <input className='LeftRadio' type='radio' name='producer' value={5}/><span className='LeftVariant'>Asus</span><br/>
                <input className='LeftRadio' type='radio' name='producer' value={6}/><span className='LeftVariant'>Lenovo</span><br/>
                <input className='LeftRadio' type='radio' name='producer' value={7}/><span className='LeftVariant'>HP</span><br/>
                <input className='LeftRadio' type='radio' name='producer' value={8}/><span className='LeftVariant'>HONOR</span><br/>
                <input className='LeftRadio' type='radio' name='producer' value={9}/><span className='LeftVariant'>Xiaomi</span><br/>
                <input className='LeftRadio' type='radio' name='producer' value={10}/><span className='LeftVariant'>Huawei</span>
              </div>
              <div className='Appointment'>
                <div className='LeftNameFilter'>Назначение:</div>
                <input className='LeftRadio' type='radio' name='appointment' value={11}/><span className='LeftVariant'>для учебы</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' value={12}/><span className='LeftVariant'>для дома</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' value={13}/><span className='LeftVariant'>игровой</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' value={14}/><span className='LeftVariant'>для программирования</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' value={15}/><span className='LeftVariant'>компактный</span>
              </div>
              <div className='SkreenDiagonal'>
                <div className='LeftNameFilter'>Диагональ экрана:</div>
                <input className='LeftRadio' type='radio' name='skreen' value={16}/><span className='LeftVariant'>менее 13&rdquo;</span><br/>
                <input className='LeftRadio' type='radio' name='skreen' value={17}/><span className='LeftVariant'>13 &ndash; 14&rdquo;</span><br/>
                <input className='LeftRadio' type='radio' name='skreen' value={18}/><span className='LeftVariant'>15 &ndash; 16&rdquo;</span><br/>
                <input className='LeftRadio' type='radio' name='skreen' value={19}/><span className='LeftVariant'>17&rdquo;</span><br/>
              </div>
              <div className='Ram'>
                <div className='LeftNameFilter'>Оперативная память:</div>
                <input className='LeftRadio' type='radio' name='ram' value={20}/><span className='LeftVariant'>от 8 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='ram' value={21}/><span className='LeftVariant'>от 16 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='ram' value={22}/><span className='LeftVariant'>от 32 ГБ</span><br/>
              </div>
              <div className='HddSdd'>
                <div className='LeftNameFilter'>Емкость накопителя:</div>
                <input className='LeftRadio' type='radio' name='hddsdd' value={23}/><span className='LeftVariant'>от 256 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='hddsdd' value={24}/><span className='LeftVariant'>от 512 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='hddsdd' value={25}/><span className='LeftVariant'>от 1 ТБ</span><br/>
                <input className='LeftRadio' type='radio' name='hddsdd' value={26}/><span className='LeftVariant'>от 2 ТБ</span><br/>
              </div>
              <div className='Os'>
                <div className='LeftNameFilter'>Операционная система:</div>
                <input className='LeftRadio' type='radio' name='os' value={27}/><span className='LeftVariant'>Windows 11</span><br/>
                <input className='LeftRadio' type='radio' name='os' value={28}/><span className='LeftVariant'>Windows 10</span><br/>
                <input className='LeftRadio' type='radio' name='os' value={29}/><span className='LeftVariant'>Linux</span><br/>
                <input className='LeftRadio' type='radio' name='os' value={30}/><span className='LeftVariant'>Mac OS</span><br/>
                <input className='LeftRadio' type='radio' name='os' value={31}/><span className='LeftVariant'>Без ОС</span>
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

export default LaptopProducts;
