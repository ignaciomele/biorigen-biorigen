import React from 'react'
import '../location/location.css'

export default function Location() {
    return (
        <div className='location'>
            <h3 className='text-location'>¿Dónde estámos?</h3>
            <div className='map-location'>
                <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.268467589727!2d-71.35279617078241!3d-40.16290897382149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110e6e7331babd%3A0x880f4ec2445ed5e0!2sRivadavia%201244%2C%20Q8370%20San%20Martin%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1640898567045!5m2!1ses!2sar" width="600" height="450" loading="lazy" frameborder="0" title="Google Maps"></iframe>
            </div>
        </div>
    )
}