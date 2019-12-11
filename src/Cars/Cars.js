import React from 'react'

import Car   from    './Car/Car';

const state = {
  cars: [
    {name: 'Ford', year: 2018},
    {name: 'Audi', year: 2016},
    {name: 'Mazda', year: 2010},
  ]
}

const Cars =() => {

  return (
    <div style={{ width: 400, margin: 'auto', paddingToP: '20px'}}>
      { state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
          />
        )
      }) }
    </div>
  )
}
export default Cars