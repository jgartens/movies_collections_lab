import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import Movie from './Movie.jsx'
import './Collection.css'

Collection.propTypes = {
    collection: PropTypes.array.isRequired
  };

function Collection ({collection}) {
    return (
        <>
            {collection.map((movie) => 
                <li className="collection_list" key={movie.id}>
                    <div className="row justify-center text-center">
                        <Movie movie_attributes={movie}/>
                    </div> 
                </li>
            )}
        </>
    )
}

export default Collection