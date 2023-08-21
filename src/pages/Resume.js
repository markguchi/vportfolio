import { useRef, useState, useEffect } from 'react'

import { addIntersectionObserver } from '../utilities/functions';
import { Intro, Skills } from './Home';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import adnuLogo from '../images/resume/adnu_logo.png'
import ncshsLogo from '../images/resume/ncshs_logo.png'

function Resume(props) {

  const experienceRef = useRef(null)
  const workRef = useRef(null)
  const certificationsRef = useRef(null)
  const certificateRef = useRef(null)

  const workExperience = props.workExperience
  const certifications = props.certifications

  useEffect(() => {
    addIntersectionObserver()
  }, []);

  const scrollToRight = (parentRef, childRef) => {
    parentRef.current.scrollLeft = parentRef.current.scrollLeft + childRef.current.clientWidth
  }

  const scrollToLeft = (parentRef, childRef) => {
    parentRef.current.scrollLeft = parentRef.current.scrollLeft - childRef.current.clientWidth
  }

  function ExperienceCard(props){
    const [isFlipped, setIsFlipped] = useState(false)

    return(
      <div className={"w-100 h-100 d-flex flex-column align-items-center justify-content-between animate bump-scoot-right delay-" + props.index} style={{gap: "2em"}}>
        <div className="curvy-card py-2 px-3 px-lg-4">
          {props.date}
        </div> 
        {!isFlipped?
          <div className="flex-grow-1 frame shape-square text-white py-4 px-5 p-lg-5 aspect-ratio-3-4 aspect-ratio-md-1-1 shadow-none bg-gradient-blue clickable rotate-out d-flex flex-column align-items-center justify-content-between" onClick={()=>{setIsFlipped(!isFlipped)}}>
            <h3 className="text-center">{props.position}</h3>
            {props.image && (<img className="w-25 object-fit-contain" alt={props.company + " logo"} src={props.image}/>)}
            <h4 className="opacity-75 text-center">{props.company}</h4>
          </div>
        :
          <div className="frame shape-square p-3 aspect-ratio-3-4 aspect-ratio-md-1-1 shadow-none bg-white clickable rotate-in d-flex flex-column align-items-center justify-content-center text-center" style={{gap: "1.5em"}} onClick={()=>{setIsFlipped(!isFlipped)}}>
            {props.description.map((item) =>
              <h6 key={item}>
                {item}
              </h6>
            )}
          </div>
        }
      </div>      
    )
  }

  function CertificateCard(props){

    return(
      <div className="w-100 d-flex flex-column align-items-center animate appear-top" style={{gap: "2em"}}>
        <div className="curvy-card py-2 px-4">
          {props.date}
        </div> 
        <div className="frame shape-square p-0 shadow-none bg-transparent d-flex flex-column align-items-center justify-content-between overflow-visible">
            {props.image && (<img className="w-100 object-fit-contain shadow-full" alt={props.grantee + " logo"} src={props.image}/>)}
          </div>
      </div>      
    )
  }

  return (
    <div id="resume">
      <Intro/>
      <Skills/>
      <section id="education" className="">
        <div className="h-100 w-100 d-flex flex-column flex-xxl-row align-items-start with-animation">
          <h1 className="font-bold mega text-upright text-xxl-sideways bottom mb-4 mb-xxl-0">Education</h1>
          <div className="px-5"></div>
          <div className="row h-100 w-100 m-0 p-0">
            <div className="col-12 col-xxl-7 mb-5 mb-xxl-0">
              <div className="curvy-card mt-0 mt-xxl-5 animate grow-bottom">
                <div className="w-100 h-100 d-flex flex-column flex-md-row justify-content-start align-items-center align-items-md-start" style={{gap: "2em"}}>
                  <img src={adnuLogo} alt="AdNU Logo" className="w-25 w-xl-50"/>
                  <div className="d-flex flex-column align-items-center align-items-md-start">
                    <h3 className="font-regular text-center text-md-start">Ateneo de Naga University</h3>
                    <h5 className="font-regular">BS Information Technology</h5>
                    <h6 className="font-light">2015 - 2016,  2018 - 2023</h6>
                    <div className="py-2"></div>
                    <div className="emphasis-none emphasis-md ps-0 ps-md-4 opacity-75">
                    <p className="d-flex flex-column align-items-center align-items-md-start justify-content-start">
                      <small className="font-light text-blue text-center">Awards</small>
                      <span>President's Lister (2015-2016)</span>
                    </p>
                    <p className="d-flex flex-column align-items-center align-items-md-start justify-content-start">
                      <small className="font-light text-blue">Capstone Project</small>
                      <span className="text-center text-md-start">IMS: Inventory Management System Integrated with Indoor Mapping and Sales Forecasting Through Web and Mobile Application</span>
                    </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-5">
              <div className="curvy-card animate grow-bottom very-slow">
                <div className="w-100 h-100 d-flex flex-column flex-md-row justify-content-start align-items-center align-items-md-start" style={{gap: "2em"}}>
                  <img src={ncshsLogo} alt="NCSHS Logo" className="w-25"/>
                  <div className="d-flex flex-column align-items-center align-items-md-start">
                    <h4 className="font-regular text-center text-md-start">Naga City Science High School</h4>
                    <h6 className="font-regular">High School Diploma</h6>
                    <p className="font-light">2011 - 2015</p>
                    <div className="py-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="">
        <div className="h-100 w-100 d-flex flex-column align-items-end p-3 py-lg-0 with-animation">
          <h1 className="font-bold mega mb-4 mb-xxl-0">Experience</h1>
          <div className="w-100 d-flex flex-row align-items-center justify-content-center">
            <button 
              className="d-none d-lg-inline-block bttn-transparent p-0 px-md-2 px-lg-3 px-xl-4"
              onClick={()=>{scrollToLeft(experienceRef, workRef)}}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="w-100 h-100 d-flex scroll-horizontal scrollbar-hidden p-3 p-xxl-5" ref={experienceRef}>
              {workExperience.map((experience, index) => {
                return (
                  <>
                  {index === 0?
                    <div className="flex-basis-75 flex-basis-xl-50 flex-basis-xxl-25 me-4 me-lg-5" ref={workRef} key={experience.position}>
                      <ExperienceCard
                        date={experience.date}
                        position={experience.position}
                        company={experience.company}
                        image={experience.image}
                        description={experience.description}
                        index={index}
                      />
                    </div>
                    :
                      <div className="flex-basis-75 flex-basis-xl-50 flex-basis-xxl-25 me-4 me-lg-5" key={experience.position}>
                        <ExperienceCard
                          date={experience.date}
                          position={experience.position}
                          company={experience.company}
                          image={experience.image}
                          description={experience.description}
                          index={index}
                        />
                      </div>
                    }
                  </>
                )
              }
              )}
            </div>
            <button 
              className="d-none d-lg-inline-block bttn-transparent p-0 px-md-2 px-lg-3 px-xl-4"
              onClick={()=>{scrollToRight(experienceRef, workRef)}}
            >
              <FontAwesomeIcon icon={faChevronRight}/>
            </button>
          </div>
        </div>
      </section>
      <section id="certifications" className="bg-blue-5">
        <div className="h-100 w-100 d-flex flex-column align-items-start p-3 py-lg-0 with-animation">
          <h1 className="font-bold mega mb-4 mb-xxl-0">Certifications</h1>
          <div className="w-100 d-flex flex-row align-items-center justify-content-center">
            <button 
              className="d-none d-lg-inline-block bttn-transparent p-0 px-md-2 px-lg-3 px-xl-4"
              onClick={()=>{scrollToLeft(certificationsRef, certificateRef)}}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="w-100 h-100 d-flex scroll-horizontal scrollbar-hidden p-3 p-xxl-5" ref={certificationsRef}>
              {certifications.map((experience, index) => {
                return (
                  <>
                  {index === 0?
                    <div className="flex-basis-75 flex-basis-xl-50 flex-basis-xxl-25 me-4 me-lg-5" ref={certificateRef} key={experience.position}>
                      <CertificateCard
                        date={experience.date}
                        certification={experience.certification}
                        grantee={experience.grantee}
                        image={experience.image}
                        description={experience.description}
                        index={index}
                      />
                    </div>
                    :
                      <div className="flex-basis-75 flex-basis-xl-50 flex-basis-xxl-25 me-4 me-lg-5" key={experience.position}>
                        <CertificateCard
                          date={experience.date}
                          certification={experience.certification}
                          grantee={experience.grantee}
                          image={experience.image}
                          description={experience.description}
                          index={index}
                        />
                      </div>
                    }
                  </>
                )
              }
              )}
            </div>
            <button 
                className="d-none d-lg-inline-block bttn-transparent p-0 px-md-2 px-lg-3 px-xl-4" 
                onClick={()=>{scrollToRight(certificationsRef, certificateRef)}}
              >
                <FontAwesomeIcon icon={faChevronRight}/>
              </button>
          </div>
        </div>
      </section>
    </div>
  ); 
}

export default Resume
