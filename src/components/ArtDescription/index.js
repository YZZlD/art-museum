import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ArtDescription( { galleries }) {
    const {galleryId, artId } = useParams();
    const galleryChoice = galleries.find((x) => galleryId == x.galleryid);
    return(
        <Link to={`/galleries/${galleryId}`}>
            Back to {galleryChoice.name}
        </Link>

    )
}

export default ArtDescription;
