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
        <a href='https://www.instagram.com/academlohq/'>
          <i className='fa-brands fa-instagram'></i>
        </a>
        <a href='https://www.linkedin.com/company/academlo/'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
        <a href='https://www.youtube.com/c/academlo'>
          <i className='fa-brands fa-youtube'></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
