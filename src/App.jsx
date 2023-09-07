import React from 'react'
import { useState } from 'react'
import puppyList from './data.js'
// import Puppy from './main.jsx'

export default function ShowPuppies () {
  const [puppies, setPuppies] = useState(puppyList)
 
  console.log('puppers ', puppies)
  return (
    <div className='ShowPuppies'>
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
    </div>
  )
}
