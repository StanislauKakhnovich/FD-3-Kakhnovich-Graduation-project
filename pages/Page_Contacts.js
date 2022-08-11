import React from 'react';

import './Page_Contacts.css';

class Page_Contacts extends React.PureComponent {
          
  render() {

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        <div className='ContactsCompany'>
        Минская область, Минский район, Боровлянский с/с, д. Лесковка, ул. Бирючинная, д.254, пом. 1
        <br/>
        Почтовый адрес: Минская область, Минский район, Боровлянский с/с, д. Лесковка, ул. Бирючинная, д.254, пом. 1
        <br/>
        УНП 000456987, 15.05.2010, Мингорисполком
        <br/>
        Директор Иванов И.И.
        <br/>
        Действует на основании Устава
        <br/>
        В торговом реестре с 06.12.2019 №00000001
        <br/>
        test@tut.by
        <br/>
        Пн&ndash;пт 10:00 &ndash; 20:00
        <br/>
        Суббота 10:00 &ndash; 18:00.
        </div>
      </div>
    );
    
  }

}
    
export default Page_Contacts;
    