import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import { Routes, Route } from 'react-router-dom';
import ArtDescription from '../ArtDescription';

function GalleryView( {galleries}) {
    const { galleryId }  = useParams();
    const galleryChoice = galleries.find((x) => galleryId == x.galleryid);
    return(
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{galleryChoice.name}</h2>

            <ul>
                {galleryChoice.objects.map((objects) => {
                    return (
                        <ArtImageTile galleryId={galleryId} art={objects.images}/>
                    )
                })}
            </ul>
            <Routes>

            </Routes>
        </div>

    )
}

export default GalleryView;
