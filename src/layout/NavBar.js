import { useState } from "react";

import logo from '../assets/logo.png' 

import { Nav,  Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faDesktop, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
    const PageLink = (path, text, icon) => {
        const [shown, setShown] = useState(false)
        return(
            <LinkContainer to={path}>
                <Nav.Link 
                    className="d-flex align-items-center justify-content-center flex-row"
                    style={{gap: "3em"}}
                    onMouseEnter={()=>{setShown(true)}}
                    onMouseLeave={()=>{setShown(false)}}
                >
                <FontAwesomeIcon icon={icon} className={"me-2 " + (shown?"bounce-up-icon":"hide-icon")}/>   
                <span>{text}</span>
                </Nav.Link>
            </LinkContainer>
        )
    }

    return(
        <Navbar id="header">
            <Nav className="w-100 justify-content-center flex-column">
                <div className="flex-shrink-1 text-center p-0">
                    <LinkContainer to="/">
                        <Nav.Link className="d-inline-block p-0">
                            <img src={logo} alt={"logo"} width="100px"/>
                        </Nav.Link>
                    </LinkContainer>
                </div>
                <div className="flex-grow-1 d-flex justify-content-center flex-row" style={{gap: "3.5%"}}>
                    {PageLink("/works", "ALL WORKS", faBriefcase)}
                    {PageLink("/development", "APP DEVELOPMENT", faDesktop)}
                    {PageLink("/design", "DESIGN", faPaintBrush)}
                    {/*PageLink("/editing", "VIDEO EDITING", faFilm)*/}
                </div>
            </Nav>
            <div id="nav-socials-container">
                <div id="nav-socials">
                    <Nav.Link className="social-link" href="https://www.facebook.com/JunathanAchuete/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></Nav.Link>
                    <Nav.Link className="social-link" href="https://www.linkedin.com/in/mark-gutierrez-303653205" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></Nav.Link>
                    <Nav.Link className="social-link" href="https://github.com/markguchi/"  target="_blank"><FontAwesomeIcon icon={faGithub}/></Nav.Link>
                </div>
            </div>
        </Navbar>
    )
}

export default NavigationBar