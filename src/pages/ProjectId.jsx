import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { fetchProjectsById } from "../services/gitHubService";
import '../style/projectId.scss';

const ProjectId = () => {
    
    const {user} = useSelector(state => state.projectsReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchProjectsById(params.user))
    },[])

    return (
        <div className="projectId">
            <div className="projectId__avatar">
                <img src={user.avatar_url} alt="avatar"/>
            </div>
            <div className="projectId__info">
                <div className="projectId__login"><strong>Логин</strong>: {user.login}</div>
                <a className='projectId__profile' href={user.html_url}><strong>Профиль</strong>:{user.html_url}</a>
                <a className='projectId__rep' href={user.repos_url}><strong>Репозитории</strong>:{user.repos_url}</a>
                <a className='projectId__followers' href={user.followers_url}><strong>Подписчики</strong>:{user.followers_url}</a>
            </div>
        </div>
    )
}

export default ProjectId;