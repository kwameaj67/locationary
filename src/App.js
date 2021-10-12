import './App.css';
import MainRouter from './Router/Router'
import { BrowserRouter as Router, } from 'react-router-dom'
import BottomBar from './components/BottomBar/BottomBar'


function App() {
  return (
    <div className="app_wrapper">
      <div className="app_container">
        <Router>
          <div className="main_area">
            <MainRouter/>
          </div>
          <div className="bottom_bar_area">
            <BottomBar />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
