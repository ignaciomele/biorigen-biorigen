import React, { useEffect, useState } from 'react'
import './professionals.css'
import { professionals } from '../../../professionals.json'
import ProfessionalSection from '../../professionalSection/professionalSection'


export default function Professionals() {
    const [sections, setSections] = useState({section1: [], section2: []})

    useEffect(() => {
        if (professionals && professionals.length) setSections(() => professionals.reduce((acc, prof, idx) => {
            if (idx < Math.round(professionals.length / 2)) {
                acc.section1.push(prof)
            } else {
                acc.section2.push(prof)
            }
            return acc
        }, { section1: [], section2: [] }))
    }, [professionals])


  return (
    <div>
        <ProfessionalSection 
            sectionClass='section1'
            therapies={sections.section1}      
        />
        <ProfessionalSection 
            sectionClass='section1'
            therapies={sections.section1}      
        />
    </div>
  )
}