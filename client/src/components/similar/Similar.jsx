import {BsChevronCompactRight} from 'react-icons/bs';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

import './similar.scss';

const Similar = ({title, content}) => {

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
        if(films && films.length > 0){
            return films.map(item => {
                return <Link style={{'textDecoration': 'none'}} to={`/watch/${item.id}`}>
                            <Card props={_transformFilm(item)} key={item.id}/>
                       </Link>
            })
        }
    }
    
    if(content.length > 0){
        return (
            <section className='similar-section'>
                <div className="similar">
                    <div className="similar__title">
                        <h2 className="similar__title-text">{title}</h2><BsChevronCompactRight className='similar__title-icon'/>
                    </div>
                    <div className="similar__row">
                        {renderFilmsCard(content)}
                    </div>
                </div>
            </section>
        )
    }
}

export default Similar;