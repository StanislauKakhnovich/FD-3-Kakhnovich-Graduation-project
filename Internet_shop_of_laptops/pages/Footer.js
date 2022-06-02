import React from 'react';
import './Footer.css';

class Footer extends React.PureComponent {
          
  render() {

    return (
        <div className='Credits'>
            <div id="labelFooter"> Сайт создан Кохновичем Станиславом в качестве выпускного проекта по курсу React, 2022г.</div>
            <a id="bottom-point" href="https://github.com/StanislauKakhnovich" target="new_blank" title="GitHub">GitHub</a>
            <a href="https://t.me/Stanislau_Kakhnovich" target="new_blank" title="Telegram">Telegram</a>
            <a href="https://www.linkedin.com/in/stanislau-kakhnovich/" target="new_blank" title="LinkedIn">LinkedIn</a>
        </div>
    );
    
  }

}
    
export default Footer;