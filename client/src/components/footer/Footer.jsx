import { RxSpeakerOff } from 'react-icons/rx';
import { FiMail } from 'react-icons/fi';
import { BsTelephone, BsApple, BsGooglePlay, BsTwitter, BsCCircle } from 'react-icons/bs';
import { MdOutlineSmartDisplay, MdDevicesOther } from 'react-icons/md';
import { FaTelegramPlane, FaOdnoklassniki, FaLinkedinIn, FaViber } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import Button from '@mui/material/Button';

import './footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container-aboutUs">
                    <ul className="list">
                        <p className="list__title">О нас</p>
                        <li><a href='##' className="list__item">О компании</a></li>
                        <li><a href='##' className="list__item">Вакансии</a></li>
                        <li><a href='##' className="list__item">Программа бета-тестирования</a></li>
                        <li><a href='##' className="list__item">Информация для партнёров</a></li>
                        <li><a href='##' className="list__item">Размещение рекламы</a></li>
                        <li><a href='##' className="list__item">Пользовательское соглашение</a></li>
                        <li><a href='##' className="list__item">Политика конфедицальности</a></li>
                        <li><a href='##' className="list__item">Комплаенс</a></li>
                    </ul>
                </div>
                <div className="footer__container-sections">
                    <ul className="list">
                        <p className="list__title">Разделы</p>
                        <li><a href='##' className="list__item">Мой Иви</a></li>
                        <li><a href='##' className="list__item">Что нового</a></li>
                        <li><a href='##' className="list__item">Фильмы</a></li>
                        <li><a href='##' className="list__item">Сериалы</a></li>
                        <li><a href='##' className="list__item">Мультфильмы</a></li>
                        <li><a href='##' className="list__item">ТВ-каналы</a></li>
                        <li><a href='##' className="list__item">Что посмотреть</a></li>
                        <li><a href='##' className="list__item activate">Активация сертификата</a></li>
                    </ul>
                </div>
                <div className="footer__container-support">
                    <div className="list">
                        <li><p className="list__title">Служба поддержки</p></li>
                        <li><p className="list__item">Мы всегда готовы вам помочь.
                        <br/>Наши операторы онлайн 24/7</p></li>
                        <Button className="list__button">Написать в чате</Button>
                        <div className="list__icons">
                            <button className="list__icons-button"><FiMail/></button>
                            <button className="list__icons-button"><BsTelephone/></button>
                        </div>
                        <li><p className="list__item">ask.ivi.ru</p></li>
                        <li><p className="list__item" style={{marginTop: '-20px'}}>Ответы на вопросы</p></li>
                    </div>
                </div>
                <div className="footer__container-blurb">
                    <div className="footer__container-blurb-iconBlock">
                        <RxSpeakerOff className='footer-icon'/>
                    </div>
                    <p className="footer__container-blurb-text">Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
                </div>
            </div> 
            <div className="footer__socialMedia">
                <div className="footer__socialMedia-buttons">
                    <button className='socialBtn'>
                        <BsApple/>
                        <div className='BtnTitle'>
                            <label htmlFor="apple">Загрузить в</label>
                            <p name='apple'>App Store</p>
                        </div>
                    </button>
                    <button className='socialBtn'>
                        <BsGooglePlay/>
                        <div className='BtnTitle'>
                            <label htmlFor="apple">Доступно в</label>
                            <p name='apple'>Google Play</p>
                        </div>
                    </button>
                    <button className='socialBtn'>
                        <MdOutlineSmartDisplay/>
                        <div className='BtnTitle'>
                            <label htmlFor="apple">Смотрите на</label>
                            <p name='apple'>Smart TV</p>
                        </div>
                    </button>
                    <button className='socialAllBtn'>
                        <MdDevicesOther/>
                        <p name='apple'>Все устройства</p>
                    </button>
                </div>
                <div className="footer__socialMedia-icons">
                    <a href='##' className="social-icons"><SlSocialVkontakte style={{marginTop: '10px'}}/></a>
                    <a href='##' className="social-icons"><FaOdnoklassniki style={{marginTop: '10px'}}/></a>
                    <a href='##' className="social-icons"><BsTwitter style={{marginTop: '10px'}}/></a>
                    <a href='##' className="social-icons"><FaViber style={{marginTop: '10px'}}/></a>
                    <a href='##' className="social-icons"><FaLinkedinIn style={{marginTop: '10px'}}/></a>
                    <a href='##' className="social-icons"><FaTelegramPlane style={{marginTop: '10px'}}/></a>
                </div>
            </div>
            <div className="footer__copyrights">
                <p className="footer__copyrights-site">
                    <BsCCircle/> 2023 OOO «Иви.ру»
                </p>
                <p className="footer__copyrights-content">HBO ® and related service marks are the property of Home Box Office, Inc</p>
            </div>
        </div>
    )

}

export default Footer;