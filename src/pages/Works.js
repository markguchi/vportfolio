import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import WorkCard from '../layout/WorkCard'
import { categoryIcons } from '../utilities/library'

import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addIntersectionObserver } from '../utilities/functions'

export default function Works(props) {
    const works = props.works
    const location = useLocation();
    const navigate = useNavigate()
    const [index, setIndex] = useState(0);

    const sliceImages = (set) => {
        if(set.length < 4)
        {
            return set
        }
        else
        {
            return set.slice(0, 4)
        }
    }

    useEffect(() => {
        setIndex(0)
    }, [location]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        addIntersectionObserver()
    }, []);


    return(
    <div id="works" className="w-100 row align-items-stretch justify-content-start">
        <section className="col-12 mb-4 mb-md-0">
            <div className="w-100 row">
                <div className="d-none d-xl-flex col-xl-1 text-start p-2 p-lg-3 p-xl-4 pe-0"/>
                <div className="col-md-7 col-lg-7 col-xl-6 p-2 p-lg-3 p-xl-4 with-animation">
                    <div 
                        className="w-100 d-flex align-items-center justify-content-center animate appear-left" 
                        style={{
                            height: "400px",
                            overflow: "hidden",
                            textAlign: "center",
                            backgroundSize: "auto 100%",
                            backgroundPosition: "center"
                        }}
                    >
                        <Carousel 
                            id="recent-work-carousel"
                            className="w-100 h-100"
                            slide={true}
                            activeIndex={index}
                            onSelect={handleSelect}
                        >
                            {sliceImages(works[0].screens).map((image) => {
                                    return(
                                        <Carousel.Item key={image.img}>
                                            <img
                                                src={image.img}
                                                alt={""}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-4 p-2 p-lg-3 p-xl-4 with-animation">
                    <div className="w-100 h-100 d-flex align-items-start justify-content-center flex-column animate appear-right" style={{ gap: "1em" }}>
                        <div className="w-100 d-flex align-items-center justify-content-between">
                            <Link className="text-decoration-none" to={"/view-work/" + works[0].id}>
                                <h1 className="tera lh-half font-bold"><strong>{works[0].title}</strong></h1>
                            </Link>
                            {props.isCategoryVisible &&
                                <h2>
                                    <a className="clickable text-decoration-none" onClick={()=>{navigate('/listbycategory', { state: works[0].category })}}>
                                        <FontAwesomeIcon icon={categoryIcons[works[0].category]}/>
                                    </a>
                                </h2>
                            }            
                        </div>   
                        <h3 className="subtitle font-light clickable">
                            <a className="clickable text-decoration-none" onClick={()=>{navigate('/listbytype', { state: works[0].subtitle })}}>
                                {works[0].subtitle}
                            </a>
                        </h3>
                        <h4>
                            {works[0].years.map((year, index)=>{
                                return(
                                    <span key={year}>
                                        <a className="clickable text-decoration-none" onClick={()=>{navigate('/listbyyear',  { state: year } )}}>
                                            {year}
                                        </a>
                                        {index !== works[0].years.length - 1 &&
                                            <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                        </h4>
                        <h5 className="w-100 font-light lh-wholeAndHalf" style={{textAlign: "justify"}}>
                            {works[0].description}
                        </h5>
                        <p className="text-start">
                            <span>Tags: </span>
                            {works[0].tags.map((tag, index)=>{
                                return(
                                    <span key={tag}>
                                        <a className="clickable" onClick={()=>{navigate('/listbytag', { state: tag })}}>
                                            {tag}
                                        </a>
                                        {index !== works[0].tags.length - 1 &&
                                            <span>, </span>
                                        }
                                    </span>  
                                )
                            })}
                        </p>
                    </div>
                </div>
                <div className="d-none d-xl-flex col-xl-1 text-start p-2 p-lg-3 p-xl-4 pe-0"/>
            </div>
        </section>
        <section className="w-100 row section-padding animate fade-blur-float">
            {works.slice(1).map((work) => {
                return(
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-4 p-md-3 p-lg-4 px-1 py-3 p-md-2 p-lg-3 mb-4 mb-md-0  with-animation" key={work.title}>
                        <WorkCard
                            work={work}
                            isCategoryVisible={props.isCategoryVisible}
                        />
                    </div>
                )
            })}
        </section>
    </div>
    )
}