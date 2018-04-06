import React from 'react'


const Clima = ({clima}) =>
  <div className="tile" key={clima.id}>
    <h4>{clima.city}</h4>
    <p>{clima.temperature}</p>
    <p>{clima.status}</p>
  </div>

export default Clima
