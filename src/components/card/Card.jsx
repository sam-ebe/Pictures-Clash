import React from 'react'
import './index.css'

function Card({ image }) {
  const { title, url } = image;
  return (
    <li className='card'>
      <img className='card__image' src={url} />
      <p className='card__title'>{title}</p>
    </li>
  )
}

export default Card