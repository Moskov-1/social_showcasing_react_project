export default function MemberCard({ member }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={member.image_url}
                alt={member.name}
                className="w-full h-56 object-cover"
            />
            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1 font-medium">{member.role}</p>
            </div>
        </div>
    );
}