import ProjectsCard from "./ProjectsCard";
import '../style/projectsWrapper.scss';

const ProjectsWrapper = ({allProjects}) => {

    if(!allProjects.items) {
        return <h2>начните поиск</h2>
    }
    
    return (
        <div className="projectsWrapper">
            {allProjects.items.length ? allProjects.items.map(item =>
                <ProjectsCard item={item} key={item.id}/>    
            ) : <h2>Объекты не найдены</h2>}
        </div>
    )
}

export default ProjectsWrapper;