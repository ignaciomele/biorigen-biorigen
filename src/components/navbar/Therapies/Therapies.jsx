import React, { useEffect, useState } from 'react'
import { therapies } from '../../../therapies.json'
import TherapySection from '../../therapiesSection/TherapySection'
import './therapies.css'

export default function Therapies() {
    const [sections, setSections] = useState({ section1: [], section2: [] })

    useEffect(() => {
        if (therapies && therapies.length) setSections(() => therapies.reduce((acc, th, idx) => {
            if (idx < Math.round(therapies.length / 2)) {
                acc.section1.push(th)
            } else {
                acc.section2.push(th)
            }
            return acc
        }, { section1: [], section2: [] }))
    }, [therapies])

    return (
        <div>
            <TherapySection
                sectionClass='section1'
                therapies={sections.section1}
            />
            <TherapySection
                sectionClass='section2'
                therapies={sections.section2}
            />
        </div>
    )
}