import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import MainPage from '../pages/MainPage';
import SingleUserPage from '../pages/SungleUserPage';

import './app.scss';

const App = () => {
    
    return (
        <Router> 
                <div className="app">
                   <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/user/:id" element={<SingleUserPage />}/>
                    </Routes>           
                </div>
        </Router>
    )
}

export default App;