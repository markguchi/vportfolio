import adnuLogo from '../images/resume/adnu_logo.png'
import ncshsLogo from '../images/resume/ncshs_logo.png'
import { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { Intro } from './Home';
import { addIntersectionObserver, sectionHeight } from '../utilities/functions';

function Resume(props) {
  const height = sectionHeight()
  const experienceRef = useRef(null)
  const workRef = useRef(null)
  const certificationsRef = useRef(null)
  const certificateRef = useRef(null)
  const sectionStyle = {"height": "max-content", "minHeight": height}
  const starsContainer = ["", "", "", "", ""]

  const workExperience = props.workExperience
  const certifications = props.certifications
  const skillSet = props.skillSet

  useEffect(() => {
    addIntersectionObserver()
  }, []);

  const scrollToRight = (parentRef, childRef) => {
    parentRef.current.scrollLeft = parentRef.current.scrollLeft + childRef.current.clientWidth
  }

  const scrollToLeft = (parentRef, childRef) => {
    parentRef.current.scrollLeft = parentRef.current.scrollLeft - childRef.current.clientWidth
  }

  function WorkCard(props){
    const [isFlipped, setIsFlipped] = useState(false)

    return(
      <div className={"w-100 d-flex flex-column align-items-center animate bump-scoot-right delay-" + props.index} style={{gap: "2em"}}>
        <div className="curvy-card py-2 px-4">
          {props.date}
        </div> 
        {!isFlipped?
          <div className="frame shape-square text-white p-5 shadow-none bg-gradient-blue clickable rotate-out d-flex flex-column align-items-center justify-content-center" style={{gap: "2em"}} onClick={()=>{setIsFlipped(!isFlipped)}}>
            <h3>{props.position}</h3>
            {props.image && (<img className="w-25 object-fit-contain" alt={props.company + " logo"} src={props.image}/>)}
            <h4 className="opacity-75">{props.company}</h4>
          </div>
        :
          <div className="frame shape-square p-3 shadow-none bg-white clickable rotate-in d-flex flex-column align-items-center justify-content-center" style={{gap: "1.5em"}} onClick={()=>{setIsFlipped(!isFlipped)}}>
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
        <div className="frame shape-square p-0 shadow-none bg-transparent d-flex flex-column align-items-center justify-content-center overflow-visible" style={{gap: "2em"}}>
            {props.image && (<img className="w-100 object-fit-contain shadow-full" alt={props.grantee + " logo"} src={props.image}/>)}
          </div>
      </div>      
    )
  }

  return (
    <div id="resume">
      
      <Intro/>
      <section id="skills" className="bg-blue-5" style={sectionStyle}>
        <div className="h-100 w-100 d-flex flex-row align-items-end with-animation">
          <div className="row h-100 w-100 m-0 h-0">
              <div className="col-7 px-4">
                <div className="curvy-card shadow-none animate fade-in">
                  <div className="w-100 h-100 d-flex flex-row justify-content-start align-items-start" style={{gap: "2em"}}>
                    <h1 className="mega"><FontAwesomeIcon icon={skillSet[0].icon}/></h1>
                    <div className="w-100 d-flex flex-column align-items-start">
                      <h3 className="font-regular">{skillSet[0].set}</h3>
                      <h5 className="font-light">{skillSet[0].description}</h5>
                      <div className="py-2"></div>
                      <div className="w-100 emphasis ps-4 opacity-75">
                        {skillSet[0].skills.map((skill) => {
                          return(
                            <div className="d-flex flex-row align-items-center justify-content-between">
                              <p className="d-flex flex-column justify-content-start align-items-start">
                                <small className="font-light text-blue">{skill.category}</small>
                                <span>{skill.skill}</span>
                              </p>
                              <p className="font-light d-flex flex-row">
                                {starsContainer.slice(5 - skill.rating).map((skill) => {
                                  return (
                                    <FontAwesomeIcon icon={faStar} className="mx-1"/>
                                  )
                                })}
                                {starsContainer.slice(skill.rating).map((skill) => {
                                  return (
                                    <FontAwesomeIcon icon={faStar} className="mx-1 opacity-25"/>
                                  )
                                })}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 px-4">
                {skillSet.slice(1, skillSet.length).map((skillset) => {
                  return (
                    <div className="col-12 mb-5">
                      <div className="curvy-card shadow-none animate fade-in very-slow">
                        <div className="w-100 h-100 d-flex flex-row justify-content-start align-items-start" style={{gap: "2em"}}>
                          <h2><FontAwesomeIcon icon={skillset.icon}/></h2>
                          <div className="d-flex flex-column align-items-start">
                            <h4 className="font-regular text-start">{skillset.set}</h4>
                            <p className="font-light text-start">{skillset.description}</p>
                            <div className="py-1"></div>
                            <div className="w-100 emphasis ps-4 opacity-75">
                              {skillset.skills.map((skill) => {
                                return(
                                  <div className="d-flex flex-row align-items-center justify-content-between">
                                    <p className="d-flex flex-column justify-content-start align-items-start">
                                      <small className="font-light text-blue">{skill.category}</small>
                                      <span>{skill.skill}</span>
                                    </p>
                                    <p className="font-light d-flex flex-row">
                                      {starsContainer.slice(5 - skill.rating).map((skill) => {
                                        return (
                                          <FontAwesomeIcon icon={faStar} className="mx-1"/>
                                        )
                                      })}
                                      {starsContainer.slice(skill.rating).map((skill) => {
                                        return (
                                          <FontAwesomeIcon icon={faStar} className="mx-1 opacity-25"/>
                                        )
                                      })}
                                    </p>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          <div className="px-3"></div>
          <h1 className="font-bold giga text-sideways top">Skills</h1>
        </div>
      </section>
      <section id="education" className="" style={sectionStyle}>
        <div className="h-100 w-100 d-flex flex-row align-items-end with-animation">
          <h1 className="font-bold giga text-sideways bottom">Education</h1>
          <div className="px-5"></div>
          <div className="h-100 d-flex flex-row align-items-start" style={{gap: "5em"}}>
            <div className="curvy-card mt-5 animate grow-bottom">
              <div className="w-100 h-100 d-flex flex-row justify-content-start align-items-start" style={{gap: "2em"}}>
                <img src={adnuLogo} alt="AdNU Logo" style={{width: "10em"}}/>
                <div className="d-flex flex-column align-items-start">
                  <h3 className="font-regular">Ateneo de Naga University</h3>
                  <h5 className="font-regular">BS Information Technology</h5>
                  <h6 className="font-light">2015 - 2016,  2018 - 2023</h6>
                  <div className="py-2"></div>
                  <div className="emphasis ps-4 opacity-75">
                  <p className="d-flex flex-column justify-content-start align-items-start">
                    <small className="font-light text-blue">Awards</small>
                    <span>President's Lister (2015-2016)</span>
                  </p>
                  <p className="d-flex flex-column justify-content-start align-items-start">
                    <small className="font-light text-blue">Capstone Project</small>
                    <span className="text-start">IMS: Inventory Management System Integrated with Indoor Mapping and Sales Forecasting Through Web and Mobile Application</span>
                  </p>

                  </div>
                </div>
              </div>
            </div>
            <div className="curvy-card animate grow-bottom very-slow">
              <div className="w-100 h-100 d-flex flex-row justify-content-start align-items-start" style={{gap: "2em"}}>
                <img src={ncshsLogo} alt="NCSHS Logo" style={{width: "7em"}}/>
                <div className="d-flex flex-column align-items-start">
                  <h4 className="font-regular text-start">Naga City Science High School</h4>
                  <h6 className="font-regular">High School Diploma</h6>
                  <p className="font-light">2011 - 2015</p>
                  <div className="py-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="" style={sectionStyle}>
        <div className="h-100 w-100 d-flex flex-column align-items-end with-animation">
          <h1 className="font-bold mega">Experience</h1>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <button 
              className="bttn-transparent px-4"
              onClick={()=>{scrollToLeft(experienceRef, workRef)}}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="w-100 h-100 d-flex scroll-horizontal scrollbar-hidden p-5" style={{gap: "5em"}} ref={experienceRef}>
              {workExperience.map((experience, index) => {
                return (
                  <>
                  {index === 0?
                    <div className="flex-basis-25" ref={workRef} key={experience.position}>
                      <WorkCard
                        date={experience.date}
                        position={experience.position}
                        company={experience.company}
                        image={experience.image}
                        description={experience.description}
                        index={index}
                      />
                    </div>
                    :
                      <div className="flex-basis-25" key={experience.position}>
                        <WorkCard
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
              className="bttn-transparent px-4"
              onClick={()=>{scrollToRight(experienceRef, workRef)}}
            >
              <FontAwesomeIcon icon={faChevronRight}/>
            </button>
          </div>
        </div>
      </section>
      <section id="certifications" className="bg-blue-5" style={sectionStyle}>
        <div className="h-100 w-100 d-flex flex-column align-items-start with-animation">
          <h1 className="font-bold mega">Certifications</h1>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <button 
              className="bttn-transparent px-4"
              onClick={()=>{scrollToLeft(certificationsRef, certificateRef)}}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="w-100 h-100 d-flex scroll-horizontal scrollbar-hidden p-5" style={{gap: "5em"}} ref={certificationsRef}>
              {certifications.map((experience, index) => {
                return (
                  <>
                  {index === 0?
                    <div className="flex-basis-25" ref={certificateRef} key={experience.position}>
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
                      <div className="flex-basis-25" key={experience.position}>
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
                className="bttn-transparent px-4" 
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
