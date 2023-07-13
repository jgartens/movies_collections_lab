import "bootstrap/dist/css/bootstrap.min.css";
import './Movie.css'
import PropTypes from 'prop-types';

Movie.propTypes = {
    movie_attributes: PropTypes.object.isRequired,
  };

/**
 * 
 * @param {*} movie_attributes - movie attributes must contain title, description, year, genre
 * 
 * @returns 
 */
function Movie({movie_attributes}) {
    return (
       
        <div className="row gy-3">
            <div className="col-md-5 todo m-auto">
                <div className="row pt-3 text-box">
                   <p className="text"> {movie_attributes.title} </p>
                </div>
                <div className="row">
                    <ul className="movie_list">
                        <li key={1}>{movie_attributes.description}</li>
                        <li key={2}>{movie_attributes.year}</li>
                        <li key={3}>{movie_attributes.genre}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Movie