import React, { useState } from 'react'
import '../../styles/gallery.css'

const Gallery = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(1)
  const percent = 100 / images.length

  return (
    <div className='images-gallery'>
      <div className='gallery'>
        <div className='button-gallery left'>
          <button
            onClick={() =>
              currentImage > 1 && setCurrentImage(currentImage - 1)
            }
            disabled={currentImage <= 1}
          >
            <i className='fa-solid fa-chevron-left' />
          </button>
        </div>
        <div className='button-gallery right'>
          <button
            onClick={() =>
              currentImage < images.length && setCurrentImage(currentImage + 1)
            }
            disabled={currentImage >= images.length}
          >
            <i className='fa-solid fa-chevron-right' />
          </button>
        </div>

        <ul
          className='images-list'
          style={{
            width: `${100 * images.length}%`,
            transform: `translateX(-${(currentImage - 1) * percent}%)`,
          }}
        >
          {images.map(({ id, url }) => (
            <li key={id}>
              <img src={url} alt='' />
            </li>
          ))}
        </ul>
      </div>

      <ul className='images-preview'>
        {images.map(({ id, url }, i) => (
          <li
            key={id}
            className={currentImage === i + 1 ? 'selected' : ''}
            onClick={() => setCurrentImage(i + 1)}
          >
            <img src={url} alt='' />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery
