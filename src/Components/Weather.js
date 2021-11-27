import React from 'react'

const Weather = (props) => {
      return (
            <div className="data">
                  {props.city && <p>
                        <span>City : </span>
                        <span>{props.city}</span>
                  </p>}
                  {props.country && <p>
                        <span>Country : </span>
                        <span>{props.country}</span>
                  </p>}
                  {props.temp && <p>
                        <span>Tempreture : </span>
                        <span>{props.temp}</span>
                  </p>}
                  {props.humidity && <p>
                        <span>Humidity : </span>
                        <span>{props.humidity}</span>
                  </p>}
                  {props.description && <p>
                        <span>Description : </span>
                        <span>{props.description}</span>
                  </p>}
                  {props.error && <p>
                        <span>Error : </span>
                        <span>{props.error}</span>
                  </p>}
            </div>
      )
}

export default Weather
