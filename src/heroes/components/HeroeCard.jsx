import { Link } from 'react-router-dom';

export const HeroeCard = ({
    id, 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} alt={superhero} className="card-img" />
                </div>
                <div className="col-8">
                    <div className="car-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="car-text">{alter_ego}</p>
                        { characters !== alter_ego && (<p>{characters}</p>) }
                        {/* <p>{characters}</p> */}
                        <p className="car-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
