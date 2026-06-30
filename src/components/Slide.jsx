export function Slide({ title, image_url }) {
    return (
        <div className="relative w-full h-full">
            <img src={image_url} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">{title}</h2>
            </div>
        </div>
    );
}