import ProjectsCard from "./ProjectsCard";
import '../style/projectsWrapper.scss';

const ProjectsWrapper = ({allProjects}) => {
    return (
        <div className="projectsWrapper">
            {allProjects.items ? allProjects.items.map(item =>
                <ProjectsCard item={item} key={item.id}/>    
            ) : 'начните поиск'}
        </div>
    )
}

export default ProjectsWrapper;