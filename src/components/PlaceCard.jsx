export default function PlaceCard({place}) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">{place.name}</h1>
            <img src={place.image_url} alt={place.name} className="w-full h-auto rounded-lg mb-4" /> 
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {place.short_text}
            </p>
        </div>
    );
}