import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from "../skeleton/Skeleton";
import Card from "../card/Card";
import { BsChevronCompactRight } from 'react-icons/bs';

import { useGetContentQuery } from '../../api/api.tsx';

import './contents.scss';

const Contents = ({title, type = '', query}) => {
    const [content, setContent] = useState([]);

    const { data, isLoading, error } = useGetContentQuery(query);
    
    useEffect(() => {
        if (data && data.docs) {
            setContent(data.docs);
          }
    }, [data])

    const _transformFilm = (item) => {
        return {
            name: item?.name,
            id: item.id,
            des: item.description,
            genre: item.genres,
            year: item.year,
            poster: item?.poster?.previewUrl || 'https://i.redd.it/ikd0wcmwvsi01.jpg',
            persons: item.persons,
            length: item?.movieLength,
            rating: item?.rating?.imdb,
            similar: item.similarMovies,
            country: item?.audience?.country[0]?.name
        }
    }

    const renderFilmsCard = (films) => {

        if(isLoading){
            let elements = [];
            for(let i = 0; i < 8; i++){
                elements.push(<Skeleton/>)
            }
            return elements;
        }else if(error){
            return <p className='error-title'>Что-то пошло не так</p>
        }

        if(films && films.length > 0){
            return films.map(item => {
                return <Link style={{'textDecoration': 'none'}} to={`/watch/${item.id}`}>
                            <Card props={_transformFilm(item)} key={item.id}/>
                       </Link>
            })
        }
    }

    return (
        <section className='content-section'>
            <div className="content">
                <div className="content__title">
                    <h2 className="content__title-text">{title}</h2><BsChevronCompactRight className='content__title-icon'/>
                </div>
                <div className="content__row">
                    {renderFilmsCard(content)}
                </div>
            </div>
        </section>
    )
}

export default Contents;