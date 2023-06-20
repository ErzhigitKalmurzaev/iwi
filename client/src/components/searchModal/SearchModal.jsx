import { useState, useEffect} from 'react';

import { IoMdClose } from 'react-icons/io';
import { BiCameraMovie } from 'react-icons/bi';

import { useGetContentByNameQuery } from '../../api/api.tsx';
import { Link } from 'react-router-dom';

import './searchModal.scss';

const SearchModal = ({onClose}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const { data, error } = useGetContentByNameQuery(searchQuery);

    useEffect(() => {
    if(searchQuery.length > 0){
        setSearchResults(data.docs);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery])

    const renderSearchMovies = (array) => {
        if(error){
            return <p className='error-title'>Что-то пошло не так</p>
        }
        
        if(array && array.length > 0){
            return array.map(item => {
                return <Link key={item.id} className="search_modal__container_list_block" to={`/watch/${item.id}`} onClick={onClose}>
                            <div className='search_modal__container_list_block_icon'>
                                <BiCameraMovie/>
                            </div>
                            <div className='search_modal__container_list_block_info'>
                                <p className="search_modal__container_list_block_name">{item.name}</p>
                                <p className="search_modal__container_list_block_year">{item.year}</p>
                            </div>
                       </Link>
            })
        }
    }

    return (
        <div className='search_modal'>
            <IoMdClose className='search_modal_close' onClick={onClose}/>
            <div className="search_modal__inner">
                <div className="search_modal__header_title">
                    <p className="search_modal__header_title">Поиск</p>
                </div>
                <div className="search_modal__container">
                    <div className="search_modal__container_input">
                        <input type="text" 
                                className="search_input" 
                                placeholder='Введите имя фильма, сериала или мультфильма...' 
                                onChange={(e) => setSearchQuery(e.target.value)}/>
                    </div>
                    <div className="search_modal__container_list">
                        {
                            searchQuery.length < 1 ? <>
                                                        <div className="search_modal__container_list_item">Премьеры фильмов</div>
                                                        <div className="search_modal__container_list_item">Новинки подписки</div>
                                                        <div className="search_modal__container_list_item">Высокий рейтинг</div>    
                                                    </>
                                                : 
                                                    renderSearchMovies(searchResults)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal;
