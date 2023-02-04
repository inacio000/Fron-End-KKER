import data from './imagesNizhny.json';
import Gallery from "../../../components/Gallery/Gallery";
import NavBar from '../../../components/NavBar/NavBar';
import Footer from '../../../components/Footer/Footer';

function NizhnyGallery() {
    return <>
        <NavBar />
        <Gallery 
            data={data}
        />
        <Footer />
    </>
}

export default NizhnyGallery;