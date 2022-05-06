import React from 'react'
import ProfessionalCard from '../professionalsCard/ProfessionalsCard'

export default function ProfessionalSection({ professionals, sectionClass }) {
    return (
        <section className={sectionClass}>
            {sectionClass === 'section1' &&
                <h1>Profesionales</h1>
            }
            <div className="row">
            {professionals.map((prof, idx) => (
                    <ProfessionalCard
                        key={idx}
                        professional={prof}
                    />
                ))
                }
            </div>
        </section>
    )
}