import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../header/header.scss';

const DropDown = ({type}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        setIsHovered(type.length > 0);
    }, [type]);

    const genres = ['Артхаус', 'Боевики', 'Вестерн', 'Военные', 'Детективы', 'Для всей семьи', 'Для детей', 'Документальные', 'Драмы', 'Исторические', 'Катастрофы', 'Комедии', 'Криминальные', 'Мелодрамы', 'Мистические', 'По комиксам', 'Приключения', 'Спорт', 'Триллеры', 'Ужасы', 'Фантастика', 'Фэнтези'];

    return (
        <div className={isHovered || type.length > 0 ? 'header__tab' : 'noneDown'}
             onMouseEnter={() => handleMouseEnter}
             onMouseLeave={() => handleMouseLeave}
             >
            <div className="header__tab-container">
                <div className="header__tab-container-left">
                    <div className="header__tab-container-left-genre">
                        <p className="header__tab-title">Жанры</p>
                        <div className='header__tab-container-left-genre-list'>
                            {
                                genres.map(item => <Link className='header__tab-container-left-genre-list-item'>{item}</Link>)
                            }
                        </div>
                    </div>
                    <div className="header__tab-container-left-country"></div>
                    <div className="header__tab-container-left-year"></div>
                </div>
                <div className="header__tab-container-right">
                    <div className="header__tab-container-right-info"></div>
                    <div className="header__tab-container-right-blocks"></div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;