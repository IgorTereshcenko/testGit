import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ProjectsWrapper from '../components/ProjectsWrapper';
import SearchProjects from "../components/SearchProjects";
import { fetchProjects } from "../services/gitHubService";
import '../style/projects.scss';

const Projects = () => {

    const {allProjects,isLoading,error} = useSelector(state => state.projectsReducer);
    const [errorText,setError] = useState(false);
    
    const dispatch = useDispatch();

    const requestProjects = (value) => {
        if(value.length > 2) {
            dispatch(fetchProjects(value));
        } else {
            setError(true);
        }    
    }

    if(isLoading) {
        return <h2>Загрузка</h2>
    } else if (error) {
        return <h2>Ошибка</h2>
    }
    
    return (
        <div className="projects">
            <SearchProjects requestProjects={requestProjects} errorText={errorText}/>
            <ProjectsWrapper allProjects={allProjects}/>
        </div>
    )
}

export default Projects;