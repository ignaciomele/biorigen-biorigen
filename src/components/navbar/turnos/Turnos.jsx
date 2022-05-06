import React, { Fragment } from 'react'
import './turnos.css'


export default function Turnos() {
    return(
        <Fragment>
            <main className='main-turnos'>
                 <section className="container">
                        <h2 className="subTitle">Turnos</h2>
                        <p className="paragraph1">Para pedir turnos, recibir más información acerca del espacio, terapias y profesionales, envianos un mensaje de WhatsApp al 02972531307 o haciendo click aquí: 
                    <a href="https://walink.co/f8babd"
                    target='_blank'
                    rel="noopener noreferrer">https://walink.co/f8babd
                    </a>, y nosotros te guiaremos.</p>
                        <p className="paragraph1">Nuestros horarios de atención son de Lunes a Viernes de 08hs a 21hs y sábados de 08hs a 12hs.</p>
                        <hr/>
                    </section>
                </main>
        </Fragment>
    )
}