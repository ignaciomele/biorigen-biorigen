import React from 'react'
import TherapyCard from '../therapiesCard/TherapyCard'
import './therapySection.css'

export default function TherapySection({ therapies, sectionClass }) {
    return (
        <section className={sectionClass}>
            {sectionClass === 'section1' && 
            <h2 className='therapy-title'>Terapias</h2>}
            <div className="row">
                {therapies.map((ther, idx) => (
                    <TherapyCard
                        key={idx}
                        therapy={ther}
                    />
                ))
                }
            </div>
        </section>
    )
}