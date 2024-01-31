import { useParams } from 'react-router-dom';

function GalleryView( {galleries}) {
    const { galleryId }  = useParams();
    const galleryChoice = galleries.find((x) => galleryId == x.galleryid);
    console.log(galleryId);
    return(
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{galleryChoice.name}</h2>
        </div>

    )
}

export default GalleryView;
