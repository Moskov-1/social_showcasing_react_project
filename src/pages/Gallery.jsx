import { useEffect, useState } from "react";
import { Album } from "../data/GalleryData";
import AlbumCard from "../components/AlbumCard";


export const Gallery = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            return setAlbums(Album)
        }, 2000);
    },[]);

    return (
        <>
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {albums.map(album => <AlbumCard key={album.id} album={album}/>)}
            </div>
        </div>
        </>
    );
}