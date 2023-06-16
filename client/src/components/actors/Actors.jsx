
import './actors.scss';

const Actors = ({actors}) => {

    const renderActorsCard = (films) => {

        if(films && films.length > 0){
            return films.map(item => {
                return (
                    <div className='actorsCard'>
                        <img src={item.photo} alt="" className="actorsCard__img" />
                        <div className="actorsCard__info">
                            <p className="actorsCard__info-name">{item.name}</p>
                            <p className="actorsCard__info-prof">{item.profession}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <section className="actors-section">
            <div className="actors">
                <div className="actors__title">
                    <h2 className="actors__title-text">Актёры и создатели</h2>
                </div>
                <div className="actors__row">
                    {renderActorsCard(actors)}
                </div>
            </div>
        </section>
    )

}

export default Actors;