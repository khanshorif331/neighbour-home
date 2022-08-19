import { useEffect, useState } from "react"

const useProjects = () =>{
    const [projects, setProjects] = useState([]);
    useEffect( () =>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data));
        
    },[projects, setProjects]);
    return [projects, setProjects];
}
export default useProjects;