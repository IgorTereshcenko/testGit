import '../style/projectsCard.scss';
import stars from '../resurces/icons/starsIcon.svg';
import watchers from '../resurces/icons/watchersIcon.svg';
import {useNavigate} from 'react-router-dom';

const ProjectsCard = ({item}) => {

    const navigate = useNavigate();
    
    return (
        <div className="projectsCard">
            <a href={item.html_url} className="projectsCard__title">
                {item.name}
            </a>
            <a href={item.owner.html_url} className="projectsCard__autor">
                {item.owner.login}
            </a>
            <div className="projectsCard__stargazers">
                <img src={stars} alt="stars" />
                {item.stargazers_count}
            </div>
            <div className="projectsCard__watchers">
                <img src={watchers} alt="watchers" />
                {item.watchers_count}
            </div>
            <button onClick={() => navigate(`/project/${item.owner.login}`)} className='projectsCard__more'>
                подробнее
            </button>
        </div>
    )
}

export default ProjectsCard;