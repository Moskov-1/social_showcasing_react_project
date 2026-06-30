import {projectsData} from '../data/projectsData';
import ProjectCard from '../components/ProjectCard'
import { useState, useEffect } from 'react';

export function Projects(){
    const [projectsData, setProjectsData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(`https://social-activity-admin.onrender.com/api/v1/projects/bn`);
                const data = await response.json();
                setProjectsData(data?.projects || []);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
        fetchData();
    }, []);

    console.log('projectsData:', projectsData);

    return (
  
        <>
            <div>
                {projectsData.map(item => {
                    return <ProjectCard key={item.id} project={item}/>;
                })}
            </div>
        </>

    );
}