import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className='px-3 py-2 m-1 bg-gray-300 rounded-lg shadow hover:bg-gray-400'>{name}</button>
    </div>
  )
}

export default Button