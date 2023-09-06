import React from 'react'
import { useState } from 'react'
import puppyList from './data.js'
// import Puppy from './main.jsx'

export default function ShowPuppies () {
  const [showPuppyList, setShowPuppyList] = useState(false)
  // console.log('imported puppy array: ', puppyList)

  const togglePuppyList = () => {
    setShowPuppyList(!showPuppyList)
  }
  return (
    <div className='ShowPuppies'>
      <h1>View best doggo names in town!</h1>
      <p><em>In no particular order.</em></p>
      <button onClick={togglePuppyList}>{showPuppyList ? 'Hide Puppy List' : 'Show Puppy List'}
      </button>
      {showPuppyList && (
        <ul>
          {puppyList.map((puppy) => (
            <li key={puppy.id}>{puppy.name}</li>
          ))}
        </ul>
      )
      }
    </div>
  )
}
