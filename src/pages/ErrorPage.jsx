import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <h1 style={{textAlign:'center',paddingTop:'20px'}}>
            Упс, вы перешли на несуществующую страницу <Link to='/'>Назад</Link>
        </h1>
    )
}

export default ErrorPage;