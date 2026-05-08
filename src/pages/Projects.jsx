import {projectsData} from '../data/projectsData';
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react';

export function Projects(){
    const [currentPage, setCurrentPage] = useState(1);
    
    return (
  
        <>
            <div>
                {projectsData.map(item => {
                    return <ProjectCard key={item.id} project={item}/>;
                })}
                <div >
                    <button onClick={()=>setCurrentPage(x=> {
                        x--;
                        if (x<1)x=1;
                        return x;
                    })}> less</button>
                    {currentPage}
                    <button onClick={()=>setCurrentPage((x)=>{
                        x++;
                        return x;
                    })}> more</button>
                </div>
            </div>
        </>

    );
}