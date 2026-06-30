
import { useState, useEffect } from 'react';
import PeopleCard from '../components/PeopleCard';
import PlaceCard from '../components/PlaceCard';
import MemberCard from '../components/MemberCard';


export default function About() {
    const [data, setData] = useState({
        mission: {},
        vision: {},
        edu: {},
        historical_places: [],
        notable_people: [],
    });

    const [members, setMembers] = useState([]);

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
            try{
                const response = await fetch(
                    'https://social-activity-admin.onrender.com/api/v1/members/bn'
                );
                const membersData = await response.json();
                setMembers(membersData['members'] || []);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        }

        fetchData();
        fetchMembers();
    }, []);

    const { mission, vision, edu, historical_places, notable_people } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Welcome to our platform! We are dedicated to showcasing the best of social activities, projects, and community engagement. Our mission is to connect people through meaningful experiences and highlight the impact of various initiatives.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Our team is passionate about creating a space where individuals can share their stories, learn from each other, and get inspired to make a difference. We believe in the power of community and the importance of celebrating achievements, big or small.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Thank you for visiting our platform. We hope you find inspiration, connect with like-minded individuals, and contribute to the vibrant community we are building together.
        </p>

              <h2 className="text-2xl font-bold mb-8">Our Impact at a Glance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Schools</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.school ?? 0}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Colleges</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.college ?? 0}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Madrasha</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.madrasha ?? 0}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">Pass Rate</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">{edu?.pass_rate ?? 0}%</p>
                </div>
              </div>
    
        <div className='row-auto'>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <img src="/path/to/your/image.jpg" alt="Community Engagement" className="w-full h-auto rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    {mission?.content ||
                     "Our mission is to foster a sense of community and encourage active participation in social activities that promote positive change."
                     }
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <img src="/path/to/your/image.jpg" alt="Community Engagement" className="w-full h-auto rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    {vision?.content ||
                     "Our vision is to create a world where everyone has the opportunity to participate in meaningful social activities and make a positive difference in their communities."
                     }
                </p>
            </div>
        </div>

        <div className="mt-12">
            <h1>Historical places</h1>
            {historical_places.map((place) => (
                <PlaceCard key={place.id} place={place} />
            ))}
        </div>
        
        <div className="mt-12">
            <h1>Notable People</h1>
            {notable_people.map((person) => (
                <PeopleCard key={person.id} person={person} />
            ))}
        </div>

        <div className="mt-12">
            <h1>Members</h1>
            {members.map((member) => (
                <MemberCard key={member.id} member={member} />
            ))}
        </div>
    </div>

  );
}
