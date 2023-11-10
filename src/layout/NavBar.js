import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import mbgLogo from '../images/logo.png'
import mbgLogoShadowed from '../images/logo_shadowed.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
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
              <LinkContainer to="/resume">
                <a className="nav-link py-0 p-lg-2 d-none d-md-inline-block">
                  Resume 
                </a>
              </LinkContainer>
              {isNavExpanded?
                <>
                  <button className="bttn-transparent nav-link py-0 p-lg-2 d-inline-block d-md-none"><FontAwesomeIcon icon={faChevronLeft} onClick={()=>{setIsNavExpanded(!isNavExpanded)}}/></button>
                  <LinkContainer to="/works">
                    <a className="nav-link py-0 p-lg-2 d-inline-block d-md-none with-animation start">
                      <span className="animate fade-in">Works </span>
                    </a>
                  </LinkContainer>
                  <LinkContainer to="/resume">
                    <a className="nav-link py-0 p-lg-2 d-inline-block d-md-none with-animation start">
                      <span className="animate fade-in">Resume</span>
                    </a>
                  </LinkContainer>
                </>
              :
                <>
                  <button className="bttn-transparent nav-link py-0 p-lg-2 d-inline-block d-md-none"><FontAwesomeIcon icon={faChevronRight} onClick={()=>{setIsNavExpanded(!isNavExpanded)}}/></button>
                </>
              }
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
    )
}

export default NavigationBar