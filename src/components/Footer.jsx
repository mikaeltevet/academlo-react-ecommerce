import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='copyright'>
        Hecho con &hearts; por Miguel &Aacute;ngel Garc&iacute;a para Academlo
        &copy; 2022
      </div>
      <div className='social-networks'>
        <a href='https://www.instagram.com/mikaeltevet'>
          <i className='fa-brands fa-instagram'></i>
        </a>
        <a href='https://www.linkedin.com/in/miguelangelgarciadelacruz'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
        <a href='https://www.youtube.com/channel/UCjxRzM5I-8YuRWD5lMYVrpw'>
          <i className='fa-brands fa-youtube'></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
