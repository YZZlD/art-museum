import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigations";
import GalleryView from "./components/GalleryView";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records}/>
      <Routes>
        <Route path="/galleries/:galleryId" element={<GalleryView galleries={harvardArt.records}/>}/>
      </Routes>
    </div>

  );
}

export default App;
