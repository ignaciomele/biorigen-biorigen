import React, { Fragment, useEffect, useState } from "react";
import mockupFaqs from '../../../mockupFaqs.json'
import '../Fq/fq.css'

export default function Fq(){
    const [faqsData, setDaqsData] = useState([])

    useEffect(() => {
        if (faqsData.faqs && faqsData.faqs.length) setDaqsData(() => faqsData.faqs.map(faqs => ({ ...faqs})))
    }, [])

    return(
        <Fragment>
            <div className="background-faqs">
                <div className="main-faqs">
                <h2 className="title-faqs">Preguntas Frecuentes</h2>
                    {mockupFaqs.faqs.map(faqs => (
                        <div key={faqs.id} className="body-faqs">
                            <h3 className="title-mockup"><li>{faqs.title}</li></h3>
                            <p className="paragraph-faqs">{faqs.body}</p>
                        </div>
                        )
                    )}
                </div>
            </div>
        </Fragment>
    )
}