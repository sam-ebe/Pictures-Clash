import React from 'react'
import Card from './../card/Card'
import { exampleImages } from '../../data/data'
import './index.css'
export default function CardList() {
  return (
    <>
      <p>or choose a theme below</p>
      <ul className="cardlist">
        {exampleImages.map(image => (
          <Card key={image.id} image={image} />
        ))}
      </ul>
    </>
  )
}
