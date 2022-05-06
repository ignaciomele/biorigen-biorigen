import React, { Fragment } from "react"
import '../articles/articles.css'

export default function Articles() {
        return (
            <Fragment>
                <header>
                    <section className="header">
                        <h1 className="biorigen-title">BIO<span>rigen</span></h1>
                        <h4>Centro de bienestar integral</h4>
                        <svg className="waveButton" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M0.00,49.98 C162.81,139.63 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z">
                            </path>
                        </svg>
                    </section>
                </header>
                <main>
                    <section className="container">
                        <h2 className="subTitle">¿Qué es Biorigen?</h2>
                        <p className="paragraph1">Somos un equipo de Profesionales de la Salud que trabajamos inter y trans disciplinariamente, para lograr mejorar el estado de salud de los consultantes e intentar revertir el estado de desequilibrio en que se puede encontrar un paciente.</p>
                        <hr />
                        <h2 className="subTitle">¿Cómo trabajamos?</h2>
                        <p className="paragraph1">Nuestro principal objetivo se centra en proporcionar educación para que la población aprenda conceptos importantísimos de como funciona nuestro cuerpo y mente, para que podamos mantenernos en salud o intentar conseguirla si ya la perdimos. Queremos una especie humana mas fuerte de lo que es ahora, debilitada por su forma de vida, el sedentarismo, malos habitos alimenticios, posturales, etc.</p>
                        <hr/>
                    </section>
                </main>
            </Fragment>
        )
}