import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { categoryIcons, techIcons } from "../utilities/library";
import { addIntersectionObserver } from "../utilities/functions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function View(props){
    const navigate = useNavigate()
    const [imageToViewIndex, setImageToViewIndex] = useState(0)
    const [showEnlargedImageModal, setShowEnlargedImageModal] = useState(false)

    useEffect(() => {
        addIntersectionObserver()
    },[])

    function EnlargedImage(params) {
        const [currentIndex, setCurrentIndex] = useState(0)

        const [dimensions, setDimensions] = useState({ 
            height: window.innerHeight,
            width: window.innerWidth
        })

        const [touchStart, setTouchStart] = useState(null)
        const [touchEnd, setTouchEnd] = useState(null)

        const [isGalleryThumbnailsScrollable, setIsGalleryThumbnailsScrollable] = useState(false)

        const minSwipeDistance = 50 

        const onTouchStart = (e) => {
            setTouchStart(e.targetTouches[0].clientX)
        }

        const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

        const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextImage() : previousImage()
            
        }
        
        useEffect(() => {
            const handleResize = () => {
              setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }

            const checkForScrollBar = () => {
                let galleryThumbnails = document.querySelector('.gallery-thumbnails')
                let scrollableCheck = galleryThumbnails.scrollWidth > galleryThumbnails.clientWidth
                setIsGalleryThumbnailsScrollable(scrollableCheck);
            }

            window.addEventListener('resize', () => {    
                handleResize();
                checkForScrollBar();    
            })

            return _ => {
              window.removeEventListener('resize', handleResize)
            }
        }, [])

        useEffect(() => {
            params.currentIndex? setCurrentIndex(params.currentIndex) : setCurrentIndex(0)
        }, [params.currentIndex])

        let activeImage = document.querySelector('.album-entry')
        const createAlbum = () => {
            let tempAlbum = []

            for(var i = 0; i < props.data.screens.length; i++)
            {
                tempAlbum.push(
                    {
                        'img': props.data.screens[i].img,
                        'description': props.data.screens[i].desc
                    }
                )
            }

            return tempAlbum
        }

        const album = createAlbum()

        useEffect(() => {
            let body = document.querySelector('body')
            if(params.show)
            {
                body.classList.add('no-scroll')
            }
            else
            {
                body.classList.remove('no-scroll')
    
            }

        }, [params.show])

        const animateImageChangeNext= () => {
            activeImage.classList.add('animate-from-right')
        }

        const animateImageChangePrevious = () => {
            activeImage.classList.add('animate-from-left')
        }

        const animateImageChange = () => {
            activeImage.classList.add('animate-static')
        }

        const removeImageAnimation = () => {
            setTimeout(() => {
                activeImage.classList.remove('animate-static')
                activeImage.classList.remove('animate-from-left')
                activeImage.classList.remove('animate-from-right')
            }, 500)
        }

        const nextImage = () => {
            animateImageChangeNext()
            if(params.isEndless){
                currentIndex === album.length - 1? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
            }
            else{
                setCurrentIndex(currentIndex + 1)
            }
            removeImageAnimation()
        }

        const previousImage = () => {
            animateImageChangePrevious()
            if(params.isEndless){
                currentIndex === 0? setCurrentIndex(album.length - 1) : setCurrentIndex(currentIndex - 1)
            }
            else{
                setCurrentIndex(currentIndex - 1)
            }
            removeImageAnimation()
        }

        return(
            <>
                <div className={"lightbox-modal" + (params.show? " show": "")} style={{height: dimensions.height, width: dimensions.width}}>
                    <button className="lightbox-close" onClick={params.onHide}>×</button>
                    <div className="lightbox-contents">
                        <button 
                            className="gallery-nav"
                            disabled={params.isEndless? false : currentIndex === 0}
                            onClick={()=>{
                                previousImage()
                            }}
                        >
                            &#10094;
                        </button>
                        <div className="lightbox-gallery">
                            <div className="lightbox-gallery-content touchable">
                                <div className="gallery-images" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                                    <div className="album-entry">
                                        <img src={album[currentIndex].img} alt={album[currentIndex].description}/>
                                    </div>
                                </div>
                                <div className="gallery-image-description">
                                    {album[currentIndex].description}
                                </div>
                                <div className="gallery-thumbnails">
                                    {isGalleryThumbnailsScrollable && 
                                        <div className="gallery-thumbnails-overflow-indicator">
                                            &#10095;
                                        </div>
                                    }
                                    {album.map((albumImage, index) => {
                                        return(
                                            <div 
                                                key={albumImage.img}
                                                className={"album-thumbnail " + (index === currentIndex? "active": "clickable")}
                                                style={{aspectRatio: "3/4"}} 
                                                onClick={()=>{
                                                    animateImageChange()
                                                    setCurrentIndex(index)
                                                    removeImageAnimation()
                                                }}
                                            >
                                                <img src={albumImage.img} alt={albumImage.description}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <button 
                            className="gallery-nav"
                            disabled={params.isEndless? false : currentIndex === album.length - 1}
                            onClick={()=>{
                                nextImage()
                            }}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </>
        )
    }

    if(props.data)
    {
        return(
            <>
                <EnlargedImage
                    show={showEnlargedImageModal}
                    isEndless={true}
                    onHide={()=>{setShowEnlargedImageModal(false)}}
                    currentIndex={imageToViewIndex}
                />
                <div id="work-view" className="w-100 h-100 m-0 p-0 row align-items-stretch justify-content-center">
                <section id="view">
                            <div className="w-100 d-flex flex-column justify-content-between align-items-center">
                                <div className="w-100 w-lg-75 w-xl-50 d-flex align-items-center justify-content-center with-animation">
                                    <hr className="flex-grow-1 my-4 animate fade-in"/>
                                    <h5 className="opacity-75 px-3 animate appear-top">
                                        <span className="clickable text-decoration-none animate fade-in mb-2" onClick={()=>{navigate('/listbycategory', { state: props.data.category })}}>
                                            <FontAwesomeIcon icon={categoryIcons[props.data.category]}/>
                                        </span>
                                    </h5>
                                    <hr className="flex-grow-1 my-2 animate fade-in"/>
                                </div>
                                <div className="py-5"></div>
                                <div className="w-100 w-lg-75 w-xl-50 text-center m-0 with-animation">
                                    <div className="animate appear-bottom mb-4 d-flex align-items-start justify-content-center">
                                        <h1 className="tera">
                                            <strong className="font-bold">
                                                {props.data.title}
                                            </strong>
                                        </h1>
                                        {props.data.reference &&
                                            <a href={props.data.reference}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center with animation">
                                        {props.data.category === "development" &&
                                                <>
                                                <div className="px-2 px-lg-4 flex-basis-50 opacity-50 animate appear-top text-end"
                                                >
                                                    {props.data.languages.map((language) => {
                                                        return (
                                                            <img 
                                                                key={language}
                                                                src={techIcons[language]}
                                                                alt={language}
                                                                title={language.charAt(0).toUpperCase() + language.slice(1)}
                                                                className="tech-icon opacity-75 mx-2"
                                                            />
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex-separator px-2 opacity-50 animate appear-top">•</div>
                                            </>
                                        }
                                        <div className={
                                            "px-2 px-lg-4 flex-basis-50 opacity-50 animate appear-top " +
                                            (props.data.category === "development"? "text-start" : "text-center")
                                        }>
                                            {props.data.technologies.map((technology) => {
                                                return (
                                                    <img 
                                                        key={technology}
                                                        src={techIcons[technology]}
                                                        alt={technology}
                                                        title={technology.charAt(0).toUpperCase() + technology.slice(1).replace("_", " ")}
                                                        className="tech-icon opacity-75 mx-2"
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="py-5"></div>
                                <div className="w-100 w-lg-75 w-xl-50 d-flex align-items-center justify-content-center with-animation">
                                    <hr className="flex-grow-1 my-4 animate fade-in"/>
                                    <h4 className="opacity-75 px-3 animate appear-top">
                                    {props.data.years.map((year, index)=>{
                                                return(
                                                    <span 
                                                        key={year}
                                                        className="clickable text-decoration-none"
                                                        onClick={()=>{navigate('/listbyyear',  { state: year } )}}
                                                    >
                                                        {year}
                                                        {index !== props.data.years.length - 1 &&
                                                            <span> • </span>
                                                        }
                                                    </span>
                                                )
                                            })}
                                        
                                    </h4>
                                    <hr className="flex-grow-1 my-2 animate fade-in"/>
                                </div>
                                <div className="py-2 py-md-5"></div>
                                <div className="py-2 py-md-5"></div>
                                <div className="w-100 w-lg-75 w-xl-50">
                                    <div className="h-100 text-start border-round d-flex flex-column align-items-start justify-content-between">
                                        <div className="mb-3 font-light d-flex animate with-animation">
                                            <h1 className="tera animate fade-in very-slow">&ldquo;</h1>
                                            <h4 className="px-5 text-justified animate fade-in very-slow">{props.data.description}</h4>
                                            <h1 className="tera align-self-end animate fade-in very-slow">&rdquo;</h1>
                                        </div>
                                        <div className="py-4"></div>
                                        {props.data.contributions &&
                                            <div className="p-1 p-md-2 p-lg-3 p-xl-4 p-xxl-5 w-100 d-flex flex-column flex-md-row align-items-center justify-content-center with-animation">
                                                <h2 className="flex-grow-1 d-flex align-items-center text-center text-md-end opacity-75 animate appear-right very-slow" style={{fontWeight: "300"}}>
                                                    Specific contributions
                                                </h2>
                                                <div className="d-none d-md-flex flex-column px-5 animate grow-bottom very-slow">
                                                    <div className="h-50 emphasis-md ms-2 pe-2" style={{width: "2px"}}>
                                                    </div>
                                                    <FontAwesomeIcon icon={faUserGroup} className="py-2 opacity-75"/>
                                                    <div className="h-50 emphasis-md ms-2 pe-2" style={{width: "2px"}}>
                                                    </div>
                                                </div>
                                                <h6 className="animate appear-left very-slow">
                                                    <ul className="font-light lh-2">
                                                        {props.data.contributions.map((contribution)=>{
                                                            return(
                                                                <li key={contribution}>{contribution}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </h6>
                                            </div>
                                        }   
                                    </div>
                                </div>
                                <div className="py-2 py-md-5"></div>
                                <div className="w-100 w-lg-75 py-2">
                                    <h1 className="text-center with-animation"><span className="animate fade-in">Screens</span></h1>
                                        <div className="py-3"></div>
                                        <div className="w-100 row">
                                            {props.data.screens.map((screen, index) => {
                                                return (
                                                    <div 
                                                        key={screen.img}
                                                        className={
                                                            props.data.content === undefined || props.data.content === null?
                                                                "with-animation col-6 col-md-4 p-2 m-0)"
                                                            :
                                                                ("with-animation col-6 col-md-" + (12/props.data.screens.length) + " p-2 m-0 animate bump-scoot-right delay-" + (index % 3))
                                                        }
                                                    >
                                                        <div 
                                                            className={
                                                                "screen-card" + (screen.desc ? " hoverable" : "") +
                                                                " animate bump-scoot-right delay-" + (index % 3)
                                                            }>
                                                            <img
                                                                src={screen.img}
                                                                alt={""}
                                                                title={screen.desc}
                                                                className="bg-white"
                                                                onClick={() => {
                                                                    setImageToViewIndex(index)
                                                                    setShowEnlargedImageModal(true)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {props.data.content === undefined || props.data.content === null?
                                            <></>
                                        :
                                            <>
                                                <div className="py-3"></div>
                                                <div>
                                                    {props.data.content.type === "document"?
                                                        <object width="100%" height="100vh" data={props.data.content.src + "#zoom=50"} type="application/pdf" style={{height: "96vh"}} aria-label="document"/>
                                                    :
                                                        props.data.content.type === "video"?
                                                            <video width="100%" height="100vh" style={{height: "96vh"}} controls>
                                                                <source src={props.data.content.src} type="video/mp4"/>
                                                            </video>
                                                        :
                                                            props.data.content.type === "youtube"?
                                                                <iframe
                                                                    width="100%"
                                                                    height="480"
                                                                    src={props.data.content.src}
                                                                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                                                    allowFullScreen
                                                                    title="Embedded youtube"
                                                                    style={{height: "96vh"}}
                                                                />
                                                            :
                                                            <></>
                                                    }
                                                    </div>
                                            </>
    }
                                </div>
                                <div className="py-2 py-md-3 py-lg-4 py-xl-5"></div>
                                <div className="w-100 w-md-50 text-center px-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5 with-animation">
                                        {props.data.tags.map((tag) => {
                                            return(
                                                <h6 
                                                    key={tag}
                                                    className="d-inline-block px-2 mb-4 animate fade-in"
                                                >
                                                    <span 
                                                        className="clickable text-decoration-none bg-blue-25 p-2 px-3 border-round text-nowrap"
                                                        onClick={()=>{navigate('/listbytag', { state: tag })}}
                                                    >
                                                        {tag}
                                                    </span>
                                                </h6>  
                                            )
                                        })}
                                </div> 
                            </div>
                        </section>
                </div>
            </>
        )
    }
    else
    {
        return(
            <div>

            </div>
        )
    }
}