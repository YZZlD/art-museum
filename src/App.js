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
        <Route path="/" element={<div><h2>Harvard Art Museum</h2><p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p></div>}/>
        <Route path="*" element={<h2>Page Not Found</h2>}/>
      </Routes>
    </div>

  );
}

export default App;
