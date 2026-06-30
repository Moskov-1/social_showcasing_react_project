export default function PeopleCard({ person }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={person.image_url}
                alt={person.name}
                className="w-full h-56 object-cover"
            />
            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{person.short_text}</p>
            </div>
        </div>
    );
}