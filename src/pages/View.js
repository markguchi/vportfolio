import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

import { categoryIcons } from "../utilities/library";

import { Modal, Accordion } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { addIntersectionObserver } from "../utilities/functions";

export default function View(props){
    const navigate = useNavigate()
    const [imageToViewIndex, setImageToViewIndex] = useState(0)
    const [showEnlargedImageModal, setShowEnlargedImageModal] = useState(false)
    const location = useLocation();

    useEffect(() => {
        addIntersectionObserver()
    },[])

    function EnlargedImage(params) {
        const createAlbum = () => {
            let tempAlbum = []

            for(var i = 0; i < props.data.screens.length; i++)
            {
                tempAlbum.push(
                    {
                        'original': props.data.screens[i].img,
                        'thumbnail': props.data.screens[i].img,
                        'description': props.data.screens[i].desc
                    }
                )
            }

            return tempAlbum
        }

        return(
            <Modal
                {...params}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="screens-gallery"
            >
                <Modal.Header>
                    <button 
                        onClick={()=>{params.onHide()}}
                    >
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <ReactImageGallery 
                        items={createAlbum()} 
                        thumbnailPosition="bottom"
                        showPlayButton={false}
                        startIndex={imageToViewIndex}
                    />
                </Modal.Body>
            </Modal>
        )
    }

    if(props.data)
    {
        return(
            <>
                <EnlargedImage
                    show={showEnlargedImageModal}
                    onHide={()=>{setShowEnlargedImageModal(false)}}
                />
                <div id="work-view" className="w-100 h-100 m-0 p-0 row align-items-stretch justify-content-center">
                    <div className="col-12 px-1 py-2 p-md-0 text-start">
                        <section id="view">
                            <div className="w-100 d-flex flex-column justify-content-between align-items-center with-animation">
                                <h5 className="opacity-75 px-3">
                                    <a className="clickable text-decoration-none animate fade-in" onClick={()=>{navigate('/listbycategory', { state: props.data.category })}}>
                                        <FontAwesomeIcon icon={categoryIcons[props.data.category]}/>
                                    </a>
                                </h5>
                                <h1 className="primary-text tera m-0 animate appear-bottom"><strong>{props.data.title}</strong></h1>
                                <div className="w-50 d-flex align-items-center justify-content-center">
                                    <hr className="flex-grow-1 my-4 animate fade-in"/>
                                    <h5 className="opacity-75 px-3 animate appear-top">
                                        <a className="clickable text-decoration-none font-light" onClick={()=>{navigate('/listbytype', { state: props.data.subtitle })}} style={{letterSpacing: "0.5em"}}>
                                            {props.data.subtitle.toUpperCase()}
                                        </a>
                                    </h5>
                                    <hr className="flex-grow-1 my-2 animate fade-in"/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center" style={{gap: "1em"}}>
                                    <div className="flex-grow-1">
                                        <h5>
                                            {props.data.years.map((year, index)=>{
                                                return(
                                                    <span key={year}>
                                                        <a className="clickable text-decoration-none" onClick={()=>{navigate('/listbyyear',  { state: year } )}}>
                                                            {year}
                                                        </a>
                                                        {index !== props.data.years.length - 1 &&
                                                            <span>, </span>
                                                        }
                                                    </span>
                                                )
                                            })}
                                        </h5>
                                    </div>
                                </div>
                                <div className="py-5"></div>

                            </div>
                            <div className="bg-white p-5 text-center border-round font-light">
                                <h5 className="mb-3" style={{fontWeight: "300"}}>{props.data.description}</h5>
                                    {props.data.contributions &&
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className="shadow-none">
                                                    <h5  style={{fontWeight: "300"}}>
                                                        <FontAwesomeIcon icon={faUserGroup} className="me-2"/>Specific contributions
                                                    </h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                        <ul>
                                                            {props.data.contributions.map((contribution)=>{
                                                                return(
                                                                    <li key={contribution}>{contribution}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    }
                            </div>
                        </section>
                        <section id="gallery">
                            <div>
                                {props.data.content?
                                    <>
                                        <div className="w-100 row mb-5">
                                            {props.data.screens.map((screen, index) => {
                                                return (
                                                    <div className="col-12 col-md-2 col-lg-3 px-1 py-3 p-md-2 p-lg-3" key={screen.img}>
                                                        <div className={"screen-card" + (screen.desc ? " hoverable" : "")} style={{height: "200px"}}>
                                                            <div className="screen-card-foreground">
                                                                <div className="screen-card-container">
                                                                    <div className="w-100 d-flex align-items-start justify-content-start" style={{ height: "200px" }}>
                                                                        <img
                                                                            src={screen.img}
                                                                            alt={""}
                                                                            className="bg-white"
                                                                            onClick={() => {
                                                                                setImageToViewIndex(index)
                                                                                setShowEnlargedImageModal(true)
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="screen-card-background">
                                                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                                                    {screen.desc}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {props.data.content.type === "document"?
                                            <object width="100%" height="100vh" data={props.data.content.src + "#zoom=50"} type="application/pdf" style={{height: "96vh"}} aria-label="document"/>
                                        :
                                            props.data.content.type === "video"?
                                                <video width="100%" height="100vh" style={{height: "96vh"}} controls>
                                                    <source src={props.data.content.src} type="video/mp4"/>
                                                </video>
                                            :
                                            <iframe
                                                width="100%"
                                                height="480"
                                                src={props.data.content.src}
                                                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                                allowFullScreen
                                                title="Embedded youtube"
                                                style={{height: "96vh"}}
                                            />
                                        }
                                    </>
                                :
                                    <div className="w-100 row">
                                        {props.data.screens.map((screen, index) => {
                                            return(
                                                <div className="col-12 col-md-3 col-lg-3 px-1 py-3 p-md-2 p-lg-3" key={screen.img}>
                                                    <div className={"screen-card" + (screen.desc? " hoverable": "")}>
                                                        <div className="screen-card-foreground">
                                                            <div className="screen-card-container">
                                                                <div className="w-100 d-flex align-items-start justify-content-start" style={{height: "250px"}}>
                                                                    <img 
                                                                        src={screen.img}
                                                                        alt={""}
                                                                        className="bg-white"
                                                                        onClick={()=>{
                                                                            setImageToViewIndex(index)
                                                                            setShowEnlargedImageModal(true)
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="screen-card-background">
                                                            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                                                {screen.desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                            <h5>
                                <span>Tags: </span>
                                {props.data.tags.map((tag, index) => {
                                    return(
                                        <span key={tag}>
                                            <Link className="flex-grow-1" to="/listbytag"  onClick={()=>{localStorage.setItem('selectedTag', tag)}} onMouseEnter={()=>{localStorage.setItem('selectedTag', tag)}}>
                                                {tag}
                                            </Link>
                                            {index !== props.data.tags.length - 1 &&
                                                <span>, </span>
                                            }
                                        </span>  
                                    )
                                })}
                            </h5>   
                        </section>
                    </div>
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