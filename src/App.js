import './style/app.scss';
import Projects from "./pages/Projects";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProjectId from './pages/ProjectId';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Projects/>}/>
                    <Route path='/project/:user' element={<ProjectId/>}/>
                    {<Route path="/*" element={<ErrorPage to="/error" replace />} /> }
                </Routes>    
        </BrowserRouter>
        
    );
}

export default App;
