import { NavLink } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import dataCard from "./dataCard.json";
import GalleryCard from "../../../components/GalleryCard/GalleryCard";

function RussianGallery() {
    return (
        <GalleryCard 
            dataCard={dataCard}
        />
    )
}

export default RussianGallery;