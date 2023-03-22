import './style/app.scss';
import Projects from "./pages/Projects";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProjectId from './pages/ProjectId';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Projects/>}/>
                    <Route path='/project/:user' element={<ProjectId/>}/>
                </Routes>    
        </BrowserRouter>
        
    );
}

export default App;
