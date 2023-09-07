import React from 'react'
import { useState } from 'react'
import puppyList from './data.js'

export default function ShowPuppies () {
  const [puppies, setPuppies] = useState(puppyList)
  // set to null to conditionally render an element in jsx
  const [featPupId, setFeatPupId] = useState(null)
 
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  // console.log('Featured pup: ', featuredPup)
  return (
    <div className='ShowPuppies'>
      <h1>Puppy Pals!</h1>
      {
        puppies.map((puppy) => {
          return <p className='names' onClick={() =>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })       
      }
      {
      featPupId && (
        // notice both h2 and ul tags within same parent this so info can be updated from current
        <div>
          <h2>Selected pup -{'>'} {featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )
      } 
    </div>
  )
}
