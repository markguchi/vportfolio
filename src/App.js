import { Routes, Route } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'

import Resume from './pages/Resume';
import Works from './pages/Works';
import { Home } from './pages/Home';
import View from './pages/View';
import ListByTag from './pages/ListByTag';
import ListByYear from './pages/ListByYear';
import ListBySubtitle from './pages/ListBySubtitle';
import ListByCategory from './pages/ListByCategory';

import mbgLogo from './images/logo.png'
import mbgLogoShadowed from './images/logo_shadowed.png'

import { works, workExperience, skillSet, certifications, developmentBackground, designBackground } from './utilities/data';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-gray-50 bg-blur p-0 sticky-none sticky-md-top">
        <div className="container-fluid align-items-center p-1">
          <ul className="w-100 navbar-nav align-items-center justify-content-start justify-content-md-center flex-row ps-2 ps-md-0" style={{gap: "1em"}}>
              <LinkContainer to="/works">
                <a className="nav-link py-0 p-lg-2 d-none d-md-inline-block">
                  Works 
                </a>
              </LinkContainer>
              <LinkContainer to="/">
                <a className="nav-link py-0 p-lg-2 align-self-start align-self-lg-center">
                  <div id="logo">
                    <img className="d-inline-block d-md-none" src={mbgLogo} alt="MBG Logo"/>
                    <img className="d-none d-md-inline-block" src={mbgLogoShadowed} alt="MBG Logo"/>
                  </div>
                </a>
              </LinkContainer>
              <LinkContainer to="/works">
                <a className="nav-link py-0 p-lg-2 d-inline-block d-md-none">
                  Works 
                </a>
              </LinkContainer>
              <LinkContainer to="/resume">
                <a className="nav-link py-0 p-lg-2">
                  Resume
                </a>
              </LinkContainer>
              <div id="nav-socials-container">
                <div id="nav-socials" className="h-100">
                  <div className="h-100 d-flex align-items-center pe-2">
                    <a className="social-link mx-1 mx-lg-2" href="https://www.facebook.com/JunathanAchuete/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="social-link mx-1 mx-lg-2" href="https://www.linkedin.com/in/mark-gutierrez-303653205" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a className="social-link mx-1 mx-lg-2" href="https://github.com/markguchi/"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                  </div>
                </div>
            </div>
            </ul>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
          <Home
            recentWorks={[works[0], works[1]]}
            developmentBackground={developmentBackground}
            designBackground={designBackground}
            skillSet={skillSet}
          />}  
        />
        <Route
          path="/resume"
          element={
          <Resume
            workExperience={workExperience}
            certifications={certifications}
            skillSet={skillSet}
          />}  
        />
        <Route
          path="/works"
          element={
          <Works
            works={works}
            isCategoryVisible={true}
          />}
        />
       <Route 
         path="/view"
         element={
           <View
           />}
       />
       <Route 
         path="/listbyyear"
         element={
           <ListByYear
             data={works}
           />}
       />
       <Route 
         path="/listbytag"
         element={
           <ListByTag
             data={works}
           />}
       />
       <Route 
         path="/listbytype"
         element={
           <ListBySubtitle
             data={works}
        />}
       />
       <Route 
         path="/listbycategory"
         element={
           <ListByCategory
             data={works}
        />}
       />
       {works.map((work) => {
         return(
           <Route 
             key={work.id}
             path={"/view-work/" + work.id}
             element={
               <View
                 data={work}
               />
             }
           />
         )
       })}
      </Routes>
    </div>
  ); 
}

export default App;
