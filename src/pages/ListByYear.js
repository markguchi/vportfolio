import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { addIntersectionObserver } from "../utilities/functions";

import WorkCard from "../layout/WorkCard";

export default function ListByYear(props){
    const {state} = useLocation()
    const value = state
    let data = props.data.filter((datum) => datum.years.includes(parseInt(value)))

    useEffect(() => {
        addIntersectionObserver()
    },[])
    
    if(value)
    {
        return(
            <section id="year">
                <div className="w-100 row align-items-stretch justify-content-start with-animation">
                    <h1 className="primary-text giga animate appear-top">
                        <strong>Works from {value}</strong>
                    </h1>
                    <div className="py-5"></div>
                    <div className="w-100 row">
                        {data.map((work) => {
                            return(
                                <div className="col-12 col-md-6 col-lg-4 p-2 p-md-3 p-xl-4 px-1 py-3 p-md-2 p-lg-3" key={work.title}>
                                    <WorkCard
                                        work={work}
                                        isCategoryVisible={props.isCategoryVisible}
                                    />
                                </div>
                            )
                        })}
                     </div>
                </div>
            </section>
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