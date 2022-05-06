import React from 'react'
import { Link } from 'react-router-dom'

export default function TherapyCard({ therapy }) {
    return (
        <div className="col-sm-6">
            <div className="card1">
                <div className="card-body">
                    <h5 className="card-title">{therapy.title}</h5>
                    <p className="card-text">{therapy.body}</p>
                    <Link className="btn btn-primary1" to={"/profesionales"}>Ver profesionales</Link>
                </div>
            </div>
        </div>
    )
}