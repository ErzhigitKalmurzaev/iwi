import {BsChevronCompactRight} from 'react-icons/bs';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

import './similar.scss';

const Similar = ({title, content}) => {

    const renderFilmsCard = (films) => {
        if(films && films.length > 0){
            return films.map(item => {
                return <Link style={{'textDecoration': 'none'}} to={`/watch/${item.id}`}>
                            <Card props={item} key={item.id}/>
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