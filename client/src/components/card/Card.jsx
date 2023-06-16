import { useContext, useState, useEffect } from 'react';

import { CustomContext } from '../../context/context';

import { BsBookmark, BsMagic, BsStar, BsStarFill } from 'react-icons/bs';
import { TbCircleOff } from 'react-icons/tb';

import './card.scss';

const Card = (props) => {
    
    const [select, setSelect] = useState(false);

    const {id, name, poster, rating, length, country, genre, year, alternativeName} = props.props;

    const { addFavorite, favorite, remoteFavorite } = useContext(CustomContext);

    useEffect(() => {
        setSelect(false)
        const ids = favorite.map(item => item.id);
        if(ids.includes(id)){
            setSelect(true);
        }
        console.log(poster)
    }, [favorite, id])

    const handleIconClick = (event) => {
        event.preventDefault();
        event.stopPropagation()
    };

    return (
        <div className="content__row-item">
            <img src={poster} alt="" className="content__row-item-img" />
            <div className="content__row-item-shadow">
                <div className="icon-contain">
                    <BsBookmark className='card-icon' onClick={handleIconClick}/>
                    <BsMagic className='card-icon' onClick={handleIconClick}/>
                    {
                        select ? 
                                 <BsStarFill className='card-icon' onClick={(event) => remoteFavorite(id, event)}/>
                               :
                                 <BsStar className='card-icon'  onClick={(event) => addFavorite(props.props, select, event)}/>
                    }
                    <TbCircleOff className='card-icon' onClick={handleIconClick}/>
                </div>
                <div className="info-contain">
                    <p className="rating">{rating ? rating.toFixed(1) : '6.8'}</p>
                    <p className='info'>{year ? year : alternativeName}, {country} {genre ? genre.slice(0, 3).map(item => `, ${item.name}`) : ''}</p>
                    <p className="time">{length} минуты</p>
                </div>
            </div>
            <p className="content__row-item-name">{name ? name : 'Без имени'}</p>
            <p className="content__row-item-sub">Подписка</p>
        </div>
    )
}

export default Card;