import { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { db } from '../utilities/firebase_config';
import { doc, getDoc } from 'firebase/firestore';

import mbgLogo from '../images/logo.png'
import mbgLogoShadowed from '../images/logo_shadowed.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    function DisplayContactModal() {
      const [accessKey, setAccessKey] = useState(null);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });


      useEffect(() => {
        const fetchAccessKey = async () => {
          try {
            const docRef = doc(db, 'profile', 'contact');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists) {
              setAccessKey(docSnap.data().web3forms_access_key)
            } else {
              console.error('No such document!')
            }
          } catch (error) {
            console.error('Error getting document:', error)
          }
        };
    
        fetchAccessKey();
      }, [])
  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
      
      const handleContactSubmit = async (e) => {
        e.preventDefault();
    
        if (!accessKey) {
          console.error('Access key is not available');
          return;
        }
    
        // Now you can include the access key in the submission data
        const formSubmissionData = {
          ...formData,
          accessKey,  // Adding the access key to the form data
        };
    
        // Send the form data to Web3Forms or any other backend
        const response = await fetch('https://web3forms.com/api/v1/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': "application/json"
          },
          body: JSON.stringify(formSubmissionData)
        }).then((res) => res.json())

        if (response.success) {
          console.log('Form submitted successfully');
        } else {
          console.error('Form submission failed');
        }
      };
      return (
        <div>
          <div className={`modal modal-lg fade ${show ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header p-5 bg-gray-25 border-blue">
                  <span className="modal-title h2 font-bold" id="exampleModalLabel">Let's Connect!</span>
                  <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                  </button>
                </div>
                <div className="modal-body font-light py-4 px-5 bg-gray-25 border-blue">
                  <form onSubmit={handleContactSubmit}>
                    <div className="col-12 mb-4">
                      <label htmlFor="name" className="form-label fw-normal"><small>Name</small></label>
                      <input 
                        type="text" 
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="email" className="form-label"><small>Email</small></label>
                      <input 
                        type="email"
                        className="form-control"
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="message" className="form-label"><small>Message</small></label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                      >
                      </textarea>
                    </div>
                    <button className="btn btn-secondary btn-blue lh-none p-3 mt-4" type="submit">Send Message</button>
                  </form>
                </div>
                <div className="modal-footer bg-gray-25 border-blue">
                </div>
              </div>
            </div>
          </div>
    
          {show && <div className="modal-backdrop fade show" onClick={handleClose}></div>}
        </div>
      )
    }

    return(
      <>
        <DisplayContactModal/>
        <nav className="navbar flex-column navbar-expand-lg bg-gray-50 bg-blur p-0 sticky-none sticky-md-top">
          <div className="w-100 container-fluid align-items-center p-1">
            <ul className="w-100 navbar-nav align-items-center justify-content-between justify-content-md-center flex-row ps-2 ps-md-0" style={{gap: "1em"}}>
                <LinkContainer to="/works">
                  <a className="nav-link py-0 p-lg-2 d-none d-md-inline-block">
                    Works 
                  </a>
                </LinkContainer>
                <LinkContainer to="/">
                  <div className="m-0 p-0 d-flex flex-row">
                    <a className="nav-link py-0 p-lg-2 align-self-start align-self-lg-center">
                      <div id="logo">
                        <img className="d-inline-block d-md-none" src={mbgLogo} alt="MBG Logo"/>
                        <img className="d-none d-md-inline-block" src={mbgLogoShadowed} alt="MBG Logo"/>
                      </div>
                    </a>

                    {isNavExpanded?
                    <button className="bttn-transparent nav-link py-0 p-lg-2 d-inline-block d-md-none"><FontAwesomeIcon icon={faChevronDown} onClick={()=>{setIsNavExpanded(!isNavExpanded)}}/></button>
                    :
                      <button className="bttn-transparent nav-link py-0 p-lg-2 d-inline-block d-md-none"><FontAwesomeIcon icon={faChevronUp} onClick={()=>{setIsNavExpanded(!isNavExpanded)}}/></button>
                    }
                  </div>
                </LinkContainer>
                <LinkContainer to="/resume">
                  <a className="nav-link py-0 p-lg-2 d-none d-md-inline-block">
                    Resume 
                  </a>
                </LinkContainer>
                <div id="nav-socials-container" className="position-sm-absolute position-static">
                  <div id="nav-socials" className="h-100">
                    <div className="h-100 d-flex align-items-center pe-2">
                      <a className="social-link mx-1 mx-lg-2 d-none d-md-inline-block" href="https://www.facebook.com/JunathanAchuete/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                      {/* <a className="social-link mx-1 mx-lg-2" href="https://www.linkedin.com/in/mark-gutierrez-303653205" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a> */}
                      <a className="social-link mx-1 mx-lg-2 d-none d-md-inline-block" href="https://github.com/markguchi/"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                      <button className="btn btn-secondary btn-blue m-0 mx-1 mb-md-1 ms-md-2 lh-none p-3" onClick={(e) => handleShow()}>Contact</button>
                    </div>
                  </div>
                </div>
              </ul>
          </div>
          {isNavExpanded &&
            <div className="d-flex d-md-none w-100 container-fluid flex-row align-items-center px-2 py-2 border-top border-bottom">
              <ul className="w-auto navbar-nav align-items-center justify-content-start justify-content-md-center flex-row ps-2 ps-md-0" style={{gap: "1em"}}>
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
                </ul>
                  <div id="nav-socials-container" className="position-static">
                    <div id="nav-socials" className="h-100">
                      <div className="h-100 d-flex align-items-center pe-2">
                        <a className="social-link mx-1 mx-lg-2" href="https://www.facebook.com/JunathanAchuete/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a className="social-link mx-1 mx-lg-2" href="https://www.linkedin.com/in/mark-gutierrez-303653205" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a className="social-link mx-1 mx-lg-2" href="https://github.com/markguchi/"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                      </div>
                    </div>
                  </div>
            </div>
          }
        </nav>
      </>
    )
}

export default NavigationBar