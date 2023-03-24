import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Pagination from '../components/Pagination';
import ProjectsWrapper from '../components/ProjectsWrapper';
import SearchProjects from "../components/SearchProjects";
import { fetchProjects } from "../services/gitHubService";
import '../style/projects.scss';
import {getPageCount} from '../utils/pages';

const Projects = () => {

    const {allProjects,isLoading,error} = useSelector(state => state.projectsReducer);
    const [errorText,setError] = useState(false);
    const [text,setText] = useState('');

    const [page,setPage] = useState(1);
    const [per_page,setPer_page] = useState(25);
    const [totalCount, setTotalCount] = useState(0);
    
    const dispatch = useDispatch();

    const requestProjects = (value) => {
        if(value.length > 2) {
            dispatch(fetchProjects({subject:value}));
        } else {
            setError(true);
        }    
    }

    useEffect(() => {
        setTotalCount(getPageCount(allProjects.total_count,per_page));
    },[allProjects.total_count,per_page])

    const changePage = (text,page) => {
        setPage(page);
        dispatch(fetchProjects({ subject: text, page: page }));
    }

    if(isLoading) {
        return <h2>Загрузка</h2>
    } else if (error) {
        return <h2>Ошибка</h2>
    }
    
    return (
        <div className="projects">
            <SearchProjects 
                requestProjects={requestProjects} 
                errorText={errorText}
                text={text}
                setText={setText}/>
            <ProjectsWrapper allProjects={allProjects}/>
            <Pagination 
                changePage={changePage}
                page={page}
                totalCount={totalCount}
                text={text}/>
        </div>
    )
}

export default Projects;