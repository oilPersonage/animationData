import React from 'react'
import logo from '../images/logo.png';
import {Link} from 'react-router-dom'
import logoOVK from '../images/logoOVK.svg'

export default function HeadMenu () {
  return <div className='headMenuBox'>
    <div className="headerMenu">
      <div className="headerLogoLeft"><img src={logo}/></div>
      <div className="headerText">Мастер-система «Цифровой Водоканал»</div>
      <div className="headerLogoRight">
        <div>
        <b>ОАО «Одинцовский Водоканал»</b>
        Клиент
        </div>
        <div className="logoRight"><img src={logoOVK}/></div>
      </div>
    </div>
    <div className="bodyMenu">
      <div className="bodyMenuLeft">
        <div className="item">Главная</div>
        <div className="item">Объекты</div>
        <div className="item">Устройства</div>
        <div className="item">Настройки</div>
      </div>
      <div className="bobyMenuRight">
        <Link to={'/home'} className="linkTo">ВНИИССОК</Link>
        <Link to={'/aiiscue'} className="linkTo">АИИСКУЭ</Link>
        <Link to={'/three'} className="linkTo">КАРТА</Link>
        <Link to={'/objects'} className="linkTo">ОБЪЕКТЫ</Link>
        <Link to={'/four'} className="linkTo">ПОКАЗАТЕЛИ</Link>
        <Link to={'/energy'} className="linkTo">ЭНЕРГОПОТРЕБЛЕНИЕ</Link>
      </div>
    </div>
  </div>
}
