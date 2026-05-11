import { useEffect } from "react";
import { useParams } from "react-router-dom";


const  GalleryList = () => {
    const [{gallery_id}] = useParams();

    useEffect(()=>{
        setTimeout(() => {
            
        }, 2000);
    }, []);
}

export default GalleryList;