import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Entry(props) {
    return (
        <div className="location">
            <img 
                className="location-image" 
                src={props.img.src} 
                alt={props.img.alt} 
            />
            <div className="location-info">
                <div>
                    <p className="marker-icon"><FontAwesomeIcon icon={faLocationDot} /></p>
                    <p>{props.country.toUpperCase()}</p>
                    <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </div>
                <h1>{props.title}</h1>
                <h6 className="date-container">{props.dates}</h6>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

// Define PropTypes for the `entry` object
Entry.propTypes = {
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
    country: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export { Entry };
