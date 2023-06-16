import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { RingLoader } from 'react-spinners';

import useSinglePageService from '../../services/singlePageService';
import MoviePage from '../../components/moviePage/MoviePage';
import Similar from '../../components/similar/Similar';
import Actors from '../../components/actors/Actors';

import './movieSinglePage.scss';

const MovieSinglePage = () =>{
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('loading');

    const { getFilm } = useSinglePageService();

    useEffect(() => {
        getFilm(id)
            .then(data => setData(data))
            .then(() => setStatus('idle'))
            .catch(() => setStatus('error'))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const renderStatus = (data, title) => {
        if(status === 'loading'){
            return <RingLoader color="#1f1b2e" className='loader' size={150}/>
        }else if(status === 'idle'){
            return  <>
                        <MoviePage key={1} props={data}/>
                        <Similar title={title} content={data?.similar}/>
                        <Actors actors={data?.persons}/>
                    </>
        }else{
            return <p className="error-title">Что-то пошло не так</p>
        }
    }
    
    
    const title = `C фильмом ${data?.name} смотрят`;
    return (
        <section>
            <div className="singlePage">
                {renderStatus(data, title)}
            </div>
        </section>
    );
};

export default MovieSinglePage