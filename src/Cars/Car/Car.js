import React from 'react'

const Car = props => {
  const { name, year } = props;

  return <div>{name} in {year}</div>
}
export default Car