import { useState, useEffect } from 'react';
import PeopleCard from '../components/PeopleCard';
import PlaceCard from '../components/PlaceCard';
import MemberCard from '../components/MemberCard';
import { LoadingSpinner } from '../components/Loading';

export default function About() {
    const [data, setData] = useState({
        mission: {},
        vision: {},
        edu: {},
        historical_places: [],
        notable_people: [],
    });

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://social-activity-admin.onrender.com/api/v1/about/bn'
                );
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchMembers = async () => {
            try {
                const response = await fetch(
                    'https://social-activity-admin.onrender.com/api/v1/members/bn'
                );
                const membersData = await response.json();
                setMembers(membersData['members'] || []);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        Promise.all([fetchData(), fetchMembers()]).finally(() => setLoading(false));
    }, []);

    const { mission, vision, edu, historical_places, notable_people } = data;

    if (loading) return <LoadingSpinner />;

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Welcome to our platform! We are dedicated to showcasing the best of social activities, projects, and community engagement. Our mission is to connect people through meaningful experiences and highlight the impact of various initiatives.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <div className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: mission?.content ||
                                "Our mission is to foster a sense of community and encourage active participation in social activities that promote positive change."
                        }}
                    />
                </div>
                <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                    <div className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: vision?.content ||
                                "Our vision is to create a world where everyone has the opportunity to participate in meaningful social activities and make a positive difference in their communities."
                        }}
                    />
                </div>
            </div>

            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact at a Glance</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Schools</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.school ?? 0}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Colleges</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.college ?? 0}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Madrasha</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.madrasha ?? 0}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Pass Rate</h3>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.pass_rate ?? 0}%</p>
                    </div>
                </div>
            </section>

            {historical_places?.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Historical Places</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {historical_places.map((place) => (
                            <PlaceCard key={place.id} place={place} />
                        ))}
                    </div>
                </section>
            )}

            {notable_people?.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Notable People</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notable_people.map((person) => (
                            <PeopleCard key={person.id} person={person} />
                        ))}
                    </div>
                </section>
            )}

            {members?.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Members</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {members.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}