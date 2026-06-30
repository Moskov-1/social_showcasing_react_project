import { useEffect, useState } from "react";
import { Album } from "../data/GalleryData";
import AlbumCard from "../components/AlbumCard";
import { GridSkeleton } from "../components/Loading";

export const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://social-activity-admin.onrender.com/api/v1/gallery/bn');
                const data = await response.json();
                setGallery(data['gallery'] || []);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Photo Gallery</h1>
            <p className="text-gray-500 mb-8">Moments captured from our events and activities</p>
            {loading ? (
                <GridSkeleton count={6} />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gallery.map(photo => <AlbumCard key={photo.id} album={photo} />)}
                </div>
            )}
        </div>
    );
}