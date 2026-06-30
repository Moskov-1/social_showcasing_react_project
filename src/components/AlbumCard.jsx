
const AlbumCard = ({album}) => {
    return (
    <>
        <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={album.image_url} 
                alt={album.name} 
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-white font-bold text-xl">{album.name}</h2>
              </div>
            </div>
    </>
    )
}
export default AlbumCard;