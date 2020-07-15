import React from 'react'
import moment from 'moment'

const Pdp = () => {
  const renderTime = moment().format('MMMM Do YYYY, h:mm:ss a')
  return <div>Pdp rendered at {renderTime}</div>
}

export default Pdp
