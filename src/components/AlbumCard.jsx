const AlbumCard = ({ album }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg">
            <img
                src={album.image_url}
                alt={album.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-white font-bold text-xl drop-shadow-md">{album.name}</h2>
            </div>
        </div>
    );
};

export default AlbumCard;