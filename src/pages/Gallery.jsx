import { useEffect, useState } from "react";
import { Album } from "../data/GalleryData";
import AlbumCard from "../components/AlbumCard";


export const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch('https://social-activity-admin.onrender.com/api/v1/gallery/bn');
                const data = await response.json();
                setGallery(data['gallery'] || []);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            }
        };
        fetchGallery();
    },[]);

    console.log('Fetched gallery:', gallery);
    return (
        <>
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {gallery.map(photo => <AlbumCard key={photo.id} album={photo}/>)}
            </div>
        </div>
        </>
    );
}