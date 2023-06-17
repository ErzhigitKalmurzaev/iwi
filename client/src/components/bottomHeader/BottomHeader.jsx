import { useContext, useState } from 'react';
import { CustomContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

import { RiHome6Line } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import { BsCollectionPlay, BsSearch, BsThreeDots } from 'react-icons/bs';

import './bottomHeader.scss';

const BottomHeader = () => {

    const { user } = useContext(CustomContext);
    
    const navigate = useNavigate();

    const findAt = () => {
        if(Object.keys(user).length !== 0){
            for(let i = 0; i < user.email.length; i++){
                console.log('sacsa')
                if(user.email[i] === '@'){
                    console.log(user.email.slice(0, i))
                    return user.email.slice(0, i);
                }
            }
        }
        return 'Войти'
    }


    return (
        <div className="bottom">
            <div className="bottom__inner">
                <div className="bottom__item" onClick={() => navigate('/')}>
                    <RiHome6Line className='bottom__item_icon'/>
                    <p>Мой Иви</p>
                </div>
                <div className="bottom__item">
                    <BsCollectionPlay className='bottom__item_icon'/>
                    <p>Каталог</p>
                </div>
                <div className="bottom__item">
                    <BsSearch className='bottom__item_icon'/>
                    <p>Поиск</p>
                </div>
                <div className="bottom__item" onClick={() => navigate('/profile')}>
                    <BiUser className='bottom__item_icon'/>
                    <p>{findAt()}</p>
                </div>
                <div className="bottom__item">
                    <BsThreeDots className='bottom__item_icon'/>
                    <p>Другое</p>
                </div>
            </div>
        </div>
  )
}

export default BottomHeader
