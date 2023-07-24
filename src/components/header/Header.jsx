import React from 'react';
import Title from '../title/Title';
import { headerImages } from './../../data/data.js';
import './index.css';
function Header() {
  return (
    <section className="header">
      {headerImages.map(image => (
        <img
          key={image.id}
          className="header__image"
          src={image.url}
          alt={`image-${image.id}`}
        />
      ))}
      <Title />
    </section>
  );
}

export default Header;
