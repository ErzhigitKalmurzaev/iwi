import Logo from '../../assets/image/Logo.png';

import { useState, useEffect, useContext } from 'react';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CustomContext } from '../../context/context';

import { movieGenres, seriesGenres, cartoonGenres } from '../../dictionary/Dictionary';

import './header.scss';

const Header = () => {

    const {user} = useContext(CustomContext)

    const [type, setType] = useState('');
    const [genres, setGenres] = useState({});
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line default-case
        switch(type){
            case 'movie':
                setGenres(movieGenres);
                break;
            case 'tv-series':
                setGenres(seriesGenres);
                break;
            case 'cartoon':
                setGenres(cartoonGenres);
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type])

    const handleMouseEnter = (type = '') => {
        setIsHovered(true);
        if(type !== '' && type !== Object){
            setType(type);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const elements = Object.entries(genres).map(([key, value], i) => {
        return <Link to={`/${type}/${key}`} className='header__tab-container-left-genre-list-item'>{value.title}</Link>;
    });

    return (
        <header>
            <div className={`header${isHovered ? ' hover' : ''}`}>
                <div className="header__left">
                    <div className="header__left-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="header__left-items">
                        <Link className='header__left-items-item' to={`/`}>Мой Иви</Link>
                        <Link className="header__left-items-item" to={`/`}>Что нового</Link>
                        <div className="dropDown"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={handleMouseLeave}
                            >
                            <Link className="header__left-items-item" 
                                onMouseEnter={() => handleMouseEnter('movie')}
                                to={`/movie`}>
                                    Фильмы
                            </Link>
                            <Link className="header__left-items-item" 
                                onMouseEnter={() => handleMouseEnter('tv-series')}
                                onMouseLeave={handleMouseLeave}
                                to={`/tv-series`}>
                                    Сериалы
                            </Link>
                            <Link className="header__left-items-item" 
                                onMouseEnter={() => handleMouseEnter('cartoon')}
                                to={`/cartoon`}>
                                    Мультфильмы
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__right-redButton">Смотреть 30 дней бесплатно</div>
                    <button className="header__right-searchButton">
                        <BiSearch className='search-icon'/>
                        <p className="header__right-searchButton-text">Поиск</p>
                    </button>
                    <button className="header__right-noticeButton">
                        <BiBell className='notice-icon'/>
                    </button>
                    <Link to={'/profile'} className={user.email ? "header__right-profileButtonActive" : "header__right-profileButton"}>
                        {
                            user.email ? 
                                        <p>
                                            {
                                                user.email.slice(0, 1).toUpperCase()
                                            }
                                        </p>
                                     :  
                                        <BiUser className='profile-icon'/>
                        }
                    </Link>
                </div>
                { isHovered && 
                    <div className='header__tab'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={handleMouseLeave}
                        >
                        <div className="header__tab-container">
                            <div className="header__tab-container-left">
                                <div className="header__tab-container-left-genre">
                                    <p className="header__tab-title">Жанры</p>
                                    <div className='header__tab-container-left-genre-list'>
                                        {
                                            elements    
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
                }        
            </div>
        </header>
    )
}

export default Header;