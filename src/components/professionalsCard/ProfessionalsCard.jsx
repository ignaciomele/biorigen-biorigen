import React, { Fragment } from 'react'
import logobiorigen from '../../static/logobiorigen.jpg'


export default function professionalCard({ professional }) {
    return (
        <Fragment>
            <div className='col-md-4 title-bio'>
                <h3 className='title-therapy'>{professional.title}</h3>                               
            </div>
            <div className='col-md-4'>
                <img src={logobiorigen} class="card-img-top" alt="logobiorigen"/>
                <div className="card-body">
                    <p className="card-text">{professional.body}</p>
                </div>
            </div>
      </Fragment>
    )
}

