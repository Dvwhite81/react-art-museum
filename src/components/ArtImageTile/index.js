import { Link } from 'react-router-dom';
import './ArtImageTile.css';

function ArtImageTile({ art, galleryId }) {
    return (
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={`${art.primaryimageurl}`} alt={`${art.title}`} />
        </Link>
    )
};

export default ArtImageTile;
