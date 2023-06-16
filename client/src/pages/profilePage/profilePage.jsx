import { useState, useContext } from 'react';
import { CustomContext } from '../../context/context';

import RegisterModal from '../../components/registerModal/registerModal';
import SingInModal from '../../components/signInModal/signInModal';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

import { FiSettings } from 'react-icons/fi';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { BsChevronCompactRight } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { Button } from '@chakra-ui/react';
import './profilePage.scss';

const ProfilePage = () => {

    const [sign, setSign] = useState(false);
    const [show, setShow] = useState(false);

    const { favorite, user } = useContext(CustomContext);

    const handleShowModal = () => {
        setShow(false);
    }
    if(user){
        console.log(user)
    }

    return (
        <>
            <section className='pageSection'>
                <div className="profileMain">
                    <div className="profileMain-inner">
                        {
                            Object.keys(user).length === 0 && <div className="profileMain__registration">
                                        <Button onClick={() => setShow(true)} className='profileMain__registration-button'>
                                            <BiUser className='profileMain__registration-button-icon'/>
                                            Войти или зарегистрироваться
                                        </Button>
                                    </div> 
                        }
                        {
                            Object.keys(user).length !== 0 && <div className="profileMain__profile">
                                        <h4 className="profileMain__profile_title">
                                            Выбор профиля
                                        </h4>
                                        <div className='profileMain__profile_inner'>
                                            <Button className='profileMain__profile_user'>
                                                <p>
                                                    {
                                                        user.email.slice(0, 1).toUpperCase()
                                                    }
                                                </p>
                                            </Button>
                                            <Button className='profileMain__profile_userAdd'>
                                                <p>+</p>
                                            </Button>
                                        </div>
                                    </div>
                        }
                        <div className="profileMain-container">
                            <div className="profileMain-container-subList">
                                <div className="profileMain__item profileMain__item-subscription">
                                    <p className="profileMain__item-title">Подписки</p>
                                    <p className="profileMain__item-suggestion">Перейти к подключению</p>
                                </div>
                                <div className="profileMain__item profileMain__item-certificate">
                                    <p className="profileMain__item-title">Сертификаты и промокоды</p>
                                    <p className="profileMain__item-suggestion">Активировать</p>
                                </div>
                                <div className="profileMain__item profileMain__item-default">
                                    <p className="profileMain__item-title">Счет Иви</p>
                                    <p className="profileMain__item-suggestion">0 $</p>
                                </div>
                            </div>
                            <div className="profileMain-container-notificationList">
                                <div className="profileMain__item_notifications">
                                    <MdOutlineNotificationsActive className="profileMain__item_notifications-icon"/>
                                    <p className="profileMain__item_notifications-title">
                                        Уведомления и акции
                                    </p>
                                </div>
                            </div>
                            <div className="profileMain-container-operationList">
                                <div className="operationList__item">
                                    <div className="operationList__item-container">
                                        <FiSettings className='operationList__item-container-icon'/>
                                        <p className="operationList__item-container-title">Настройки</p>
                                    </div>
                                </div>
                                <div className="operationList__item">
                                    <div className="operationList__item-container">
                                        <FiSettings className='operationList__item-container-icon'/>
                                        <p className="operationList__item-container-title">Настройки</p>
                                    </div>
                                </div>
                                <div className="operationList__item">
                                    <div className="operationList__item-container">
                                        <FiSettings className='operationList__item-container-icon'/>
                                        <p className="operationList__item-container-title">Настройки</p>
                                    </div>
                                </div>
                                <div className="operationList__item">
                                    <div className="operationList__item-container">
                                        <FiSettings className='operationList__item-container-icon'/>
                                        <p className="operationList__item-container-title">Настройки</p>
                                    </div>
                                </div>
                                <div className="operationList__item">
                                    <div className="operationList__item-container">
                                        <FiSettings className='operationList__item-container-icon'/>
                                        <p className="operationList__item-container-title">Настройки</p>
                                    </div>
                                </div>
                                <div className="operationList__item">
                                    <div className="operationList__item-container">
                                        <FiSettings className='operationList__item-container-icon'/>
                                        <p className="operationList__item-container-title">Настройки</p>
                                    </div>
                                </div>
                                <div className="operationList__item">
                                    <div className="operationList__item-container">
                                        <FiSettings className='operationList__item-container-icon'/>
                                        <p className="operationList__item-container-title">Настройки</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        {
                            favorite.length > 0 && <div className="profileMain__favorites">
                                                        <div className="profileMain__favorites_title">
                                                            <h2 className="profileMain__favorites_title_text">Ваши избранные</h2>
                                                            <BsChevronCompactRight className='profileMain__favorites_title_icon'/>
                                                        </div>
                                                        <div className="profileMain__favorites_inner">
                                                            {
                                                                favorite.map(item => {
                                                                    return <Link style={{'textDecoration': 'none'}} to={`/watch/${item.id}`}>
                                                                                <Card props={item} key={item.id}/>
                                                                        </Link>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                        }
                    </div>
                </div>
                {
                    (show && !sign) && <RegisterModal 
                                            onClose={handleShowModal} 
                                            onSign={() => setSign(true)} 
                                            notShow={() => setShow(false)}/>
                }
                {
                    (show && sign) && <SingInModal 
                                            onClose={handleShowModal} 
                                            onSign={() => setSign(false)}
                                            notShow={() => setShow(false)}/>
                }
            </section>
        </>
    )
}

export default ProfilePage;
