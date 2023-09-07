import React from 'react'
import { useState } from 'react'
import puppyList from './data.js'

export default function ShowPuppies () {
  const [puppies, setPuppies] = useState(puppyList)
  // set to null to conditionally render an element in jsx
  const [featPupId, setFeatPupId] = useState(null)
 
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
