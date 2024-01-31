import {Link} from 'react-router-dom';

function ArtImageTile({art, galleryId}) {
    let image = art[0].baseimageurl;

    return(
        <Link to={`/galleries/${galleryId}/art/${art[0].imageid}`}>
            <img src={image} width="500"/>
        </Link>
    )
}

export default ArtImageTile;
