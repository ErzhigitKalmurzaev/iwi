import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useGetContentByGenreQuery } from '../../api/api.tsx';
import { Link } from 'react-router-dom';

import { movieGenres, seriesGenres, cartoonGenres } from '../../dictionary/Dictionary';
import Skeleton from '../../components/skeleton/Skeleton';
import Card from '../../components/card/Card';

import './selectGenrePage.scss';

const SelectGenrePage = () => {
    
    const [genres, setGenres] = useState({});
    const [urlGenre, setUrlGenre] = useState('');
    const [content, setContent] = useState([]);

    const {type, genre} = useParams();
    
    useEffect(() => {
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
            default: setGenres({})
        }
        Object.entries(genres).forEach(([key, value]) => {
            if(key === genre){
                console.log(genre)
                setUrlGenre(value.name)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, genre])

    const { data, isLoading, error } = useGetContentByGenreQuery(`type=${type}&genres.name=${urlGenre}`);
    
    useEffect(() => {
        if (data && data.docs) {
          setContent(data.docs);
        }
        
    }, [data]);

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
            for(let i = 0; i < 24; i++){
                elements.push(<Skeleton/>)
            }
            console.log("LOADING")
            return elements;
        }else if(error || films.length < 1){
            console.log("ERROR")
            return <p className='error-title'>Что-то пошло не так</p>
        }

        if(films && films.length > 0){
            console.log(films)
            return films.map(item => {
                return <Link style={{'textDecoration': 'none'}} to={`/watch/${item.id}`}>
                            <Card props={_transformFilm(item)} key={item.id}/>
                       </Link>
            })
        }
    }

    return (
        <section className='genrePageSection'>
            <div className='genrePage'>
                <div className="genrePage__container">
                    <div className="genrePage__container-inner">
                        {renderFilmsCard(content)}
                    </div>
                </div>
            </div>
        </section>
    )
    

}

export default SelectGenrePage;