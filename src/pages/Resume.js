import me1 from '../images/me_1.jpg';
import adnuLogo from '../images/adnu_logo.png'
import ncshsLogo from '../images/ncshs_logo.png'
import pandaliveryLogo from '../images/pandalivery_logo.png'
import asiawiseLogo from '../images/asiawise_logo.png'
import hahsyLogo from '../images/hahsy_logo.png'
import { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Resume() {
  const height = (window.screen.height * .75) + "px"
  const experienceRef = useRef(null)
  const workRef = useRef(null)
  const sectionStyle = {"height": height}

  useEffect(() => {
    const intersectionCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('start');
        }
        else
        {
          entry.target.classList.remove('start');
  
        }
      }
    }
    const observer = new IntersectionObserver(intersectionCallback);
    const items = document.querySelectorAll('.animate');
    for (const item of items) {
      observer.observe(item);
    }
  }, []);

  const scrollToRight = () => {
    experienceRef.current.scrollLeft = experienceRef.current.scrollLeft + workRef.current.clientWidth
  }

  const scrollToLeft = () => {
    experienceRef.current.scrollLeft = experienceRef.current.scrollLeft - workRef.current.clientWidth
  }

  const workExperience = [
    {
      "date": "Feb 2023 - May 2023",
      "position": "Junior Software Engineer",
      "company": "Pandalivery",
      "image": pandaliveryLogo,
      "description": [
        "Lead the UI/UX team",
        "Developed a website",
        "Co-developed mobile applications"
      ]
    },
    {
      "date": "Jul 2021 - Jan 2023",
      "position": "Office Staff",
      "company": "Hahsy Industries Inc., Naga",
      "image": hahsyLogo,
      "description": [
        "Processed customer orders and requests",
        "Scheduled order purchases and delivery errands",
        "Handled sales invoice issuance and purchasing duties",
        "Generated and compiled summary reports"
      ]
    },
    {
      "date": "Jun 2018 - Feb 2021",
      "position": "Tutor",
      "company": "Asiawise Study Center, Inc",
      "image": asiawiseLogo,
      "description": [
        "Worked on classes of great volume",
        "Aided in developing and improving student’s school performance",
        "Helped students complete school deliverables"
      ]
    },
    {
      "date": "Jun 2018 - Aug 2019",
      "position": "Teacher Assistant",
      "company": "Ateneo de Naga University",
      "image": adnuLogo,
      "description": [
        "Helped instructors manage classes",
        "Corrected students’ mistakes and gave out lectures regarding the subject matter",
        "Addressed student concerns and queries"
      ]
    },
    {
      "date": "Aug 2016 - Jan 2017",
      "position": "Food Service Worker",
      "company": "Chogee and Friends Eatery",
      "image": null,
      "description": [
        "Skillfully addressed guest's service needs",
        "Delivered friendly and fast service",
        "Managed closing duties, including inventory checking and restocking"
      ]
    },
  ]

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
            {props.image && (<img className="w-25 object-fit-contain" src={props.image}/>)}
            <h4 className="opacity-75">{props.company}</h4>
          </div>
        :
          <div className="frame shape-square p-3 shadow-none bg-white clickable rotate-in d-flex flex-column align-items-center justify-content-center" style={{gap: "1.5em"}} onClick={()=>{setIsFlipped(!isFlipped)}}>
            {props.description.map((item) =>
              <h6>
                {item}
              </h6>
            )}
          </div>
        }
      </div>      
    )
  }

  return (
    <div id="resume">
      <section id="intro" style={sectionStyle}>
        <div className="h-100 d-flex align-items-center justify-content-center p-5 flex-column">
            <h1 className="font-regular zetta lh-3quarter animate appear-bottom fast">Mark Borja</h1>
            <h1 className="font-regular zetta lh-3quarter animate appear-bottom very-fast">Gutierrez</h1>
            <div className="py-3"></div>
            <h3 className="font-light opacity-75 d-flex flex-row text-blue" style={{gap: "1.25em"}}>
              <span className="animate appear-top fast">Software Developer</span>
              <span className="animate appear-top">Software Engineer</span>
              <span className="animate appear-top slow">UI Designer</span>
            </h3>
          </div>
      </section>
      <section id="profile" style={sectionStyle}>
        <div className="row h-100">
          <div className="col-5">
            <div className="h-100 d-flex flex-row align-items-center justify-content-end">
              <div>
                <div className="frame shape-square lg animate fade-blur-float" width="300">
                  <img src={me1}/>
                </div>
              </div>
              <div className="d-flex flex-column align-items-start ps-5">
                <div className="frame shape-square sm animate fade-blur-float slow mb-5" width="300">

                </div>
                <div className="frame shape-square xs animate fade-blur-float very-slow" width="300">

                </div>
              </div>
            </div>
          </div>
          <div className="col-7 text-start ps-5">
            <div className="h-100 d-flex align-items-start justify-content-center ps-5 pt-5 flex-column text-center">
              <div className="py-3"></div>
              <p className="text-start font-light lh-2">
                <div className="row">
                  <div className="col-6 p-3">
                    While accomplishing my degree, I have taken up multiple jobs to support my studies. I worked as a food service crew in a small canteen, a teacher assistant in the university, a tutor in a renowned study center, and an office staff in a corporation.
                  </div>
                  <div className="col-6 p-3">
                    Also, I dabbled in freelance work which consisted mainly of commissioned artworks such as t-shirt designs, posters, and infographics, and some technical and creative writing, and website design. 
                  </div>
                  <div className="col-12 p-3">
                    Because of my former jobs I learned how to manage people, understand business processes, prioritize tasks, and most importantly, work with different personalities. They have helped me learn new skills and knowledge that prepared me as an IT professional.
                  </div>
                  <h5 className="col-12 p-3 lh-2">
                    In the Information Technology environment, I consider myself a jack-of-all-trades. I am able to take on leadership duties as well as programming duties. I am a capable full-stack developer and a passionate web and mobile UI designer. Moreover, I enjoy project documentation that usually includes itemization of objectives and needs, and diagramming.
                  </h5>
                </div>
                 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="bg-blue-5" style={sectionStyle}>
        <div className="h-100 w-100 d-flex flex-row align-items-end">
          <h1 className="font-bold giga text-upwards">Education</h1>
          <div className="px-5"></div>
          <div className="h-100 d-flex flex-row align-items-start" style={{gap: "5em"}}>
            <div className="curvy-card mt-5 animate grow-bottom">
              <div className="w-100 h-100 d-flex flex-row justify-content-start align-items-start" style={{gap: "2em"}}>
                <img src={adnuLogo} style={{width: "10em"}}/>
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
                <img src={ncshsLogo} style={{width: "7em"}}/>
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
        <div className="h-100 w-100 d-flex flex-column align-items-end">
          <h1 className="font-bold mega">Experience</h1>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <button className="bttn-transparent px-4" onClick={scrollToLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="w-100 h-100 d-flex scroll-horizontal scrollbar-hidden p-5" style={{gap: "5em"}} ref={experienceRef}>
              {workExperience.map((experience, index) => {
                return (
                  <>
                  {index === 0?
                    <div className="flex-basis-25" ref={workRef}>
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
                      <div className="flex-basis-25">
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
            <button className="bttn-transparent px-4" onClick={scrollToRight}><FontAwesomeIcon icon={faChevronRight}/></button>
          </div>
        </div>
      </section>
      <section id="credentials" className="" style={sectionStyle}>
        <div className="h-100 w-100 d-flex flex-column align-items-start">
          <h1 className="font-bold mega">Experience</h1>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <button className="bttn-transparent px-4" onClick={scrollToLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="w-100 h-100 d-flex scroll-horizontal scrollbar-hidden p-5" style={{gap: "5em"}} ref={experienceRef}>
              {workExperience.map((experience, index) => {
                return (
                  <>
                  {index === 0?
                    <div className="flex-basis-25" ref={workRef}>
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
                      <div className="flex-basis-25">
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
            <button className="bttn-transparent px-4" onClick={scrollToRight}><FontAwesomeIcon icon={faChevronRight}/></button>
          </div>
        </div>
      </section>
    </div>
  ); 
}

export default Resume;
