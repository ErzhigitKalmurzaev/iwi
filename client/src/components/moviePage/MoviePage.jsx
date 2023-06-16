import { useState } from 'react';
import { BsBookmark, BsUpload, BsPlay } from 'react-icons/bs';
import { FiAirplay } from 'react-icons/fi';
import ReactPlayer from 'react-player';

/* eslint-disable jsx-a11y/iframe-has-title */
import './moviePage.scss';

const MoviePage = ({props}) => {
    
    const [show, setShow] = useState(false);

    const {name, id, des, length, genre, rating, year, trailer, persons} = props;
    
    // eslint-disable-next-line array-callback-return
    const actors = persons.map((item, i) => {
        if(i < 4){
            return (
                <div className="actor-block">
                    <img src={item.photo} alt="" name='1' className="actors" />
                    <label htmlFor="1">{item.name}</label>
                </div>
            )
        }
    });

    const Trailer = trailer[0].url ? trailer[0].url : 'https://www.youtube.com/embed/CfihYWRWRTQ';

    return (
        <div className="singlePage__container" key={id}>
            <div className="singlePage__container-player">
                <p className="singlePage__container-player-title">
                    Фильмы - {genre[0].name}
                </p>
                    <ReactPlayer url={Trailer} className='player' control={true}/>                
                <div className="singlePage__container-player-buttons">
                    <div className="left">
                        <button className="left-button">
                            <BsPlay className='left-button-icon'/>
                            <p className="left-button-text">Трейлер</p>
                        </button>
                        <button className="icon-button"><BsBookmark/></button>
                        <button className="icon-button"><BsUpload/></button>
                    </div>
                    <div className="right">
                        <button className="right-button">
                        <FiAirplay className='right-button-icon'/>
                            <p className="right-button-text">Бесплатные фильмы</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="singlePage__container-info">
                <h1 className="singlePage__container-info-title">{name}</h1>
                <p className="singlePage__container-info-year">{year} {length}мин 16+</p>
                <p className="singlePage__container-info-genre">CША  {genre.map(item => `  ${item.name} `)}</p>
                <p className="singlePage__container-info-lang">Ru-eng Рус</p>
            </div>
            <div className="singlePage__container-desc">
                <div className="singlePage__container-desc-actors">
                    {actors}
                </div>
                <p className={`singlePage__container-desc-${show ? 'desc-show' : 'desc'}`}>
                    {des}
                </p>
                {
                    show ?  <p onClick={() => setShow(false)} className="singlePage__container-desc-button">
                                Свернуть детали   
                            </p>
                            :
                            <p onClick={() => setShow(true)} className="singlePage__container-desc-button">
                                Детали о фильме   
                            </p>  
                }
                <div className="singlePage__container-desc-rating">
                    <div className="rating-block">
                        <p>{rating}</p>
                    </div>
                    <div className="rating-info">
                        <p className="title">Рейтинг Иви</p>
                        <p className="desc">Зрелищный</p>
                        <p className="estimateNum">53 290 оценок</p>
                    </div>
                    <button className="estimate">Оценить</button>
                </div>
            </div>
        </div>
    )

}

export default MoviePage;