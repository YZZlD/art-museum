import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

function GalleryView( {galleries}) {
    const { galleryId }  = useParams();
    const galleryChoice = galleries.find((x) => galleryId == x.galleryid);
    console.log(galleryId);
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
        </div>

    )
}

export default GalleryView;
