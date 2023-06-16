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
    console.log()
    
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

    const renderFilmsCard = (films) => {

        if(isLoading){
            let elements = [];
            for(let i = 0; i < 24; i++){
                elements.push(<Skeleton/>)
            }
            return elements;
        }else if(error){
            return <p className='error-title'>Что-то пошло не так</p>
        }

        if(films && films.length > 0){
            return films.map(item => {
                return <Link style={{'textDecoration': 'none'}} to={`/watch/${item.id}`}>
                            <Card props={item} key={item.id}/>
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