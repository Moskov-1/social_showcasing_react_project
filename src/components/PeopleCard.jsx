export default function PeopleCard({person}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{person.name}</h1>
      <img src={person.image_url} alt={person.name} className="w-full h-auto rounded-lg mb-4" /> 
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        {person.short_text}
      </p>
    </div>
  );
}