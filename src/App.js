import mbgLogo from './images/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-gray-50 bg-blur sticky-top p-0">
        <div className="container-fluid align-items-center p-1">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center" style={{gap: "1em"}}>
              <LinkContainer to="/works">
                <a className="nav-link">
                  Works
                </a>
              </LinkContainer>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <div id="logo">
                    <img src={mbgLogo}/>
                  </div>
                </a>
              </li>
              <LinkContainer to="/resume">
                <a className="nav-link">
                  Resume
                </a>
              </LinkContainer>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route
          path="/resume"
          element={<Resume/>}  
        />
      </Routes>
    </div>
  ); 
}

export default App;
