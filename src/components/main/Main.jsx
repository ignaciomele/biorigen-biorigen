import React, { Fragment } from 'react'
import Articles from '../articles/Articles'
import Location from '../location/Location'
import Turnos from '../navbar/turnos/Turnos'

const Main = () => {
  return (
    <Fragment>
        <Articles />
        <Turnos/>
        <Location />
    </Fragment>
  )
}

export default Main
