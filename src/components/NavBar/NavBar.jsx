import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLoginMessage } from '../../store/slices/appSlice'
import { getCartThunk } from '../../store/slices/cartSlice'
import '../../styles/navbar.css'
import Cart from './Cart'

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const openCart = () => {
    if (localStorage.getItem('token')) {
      setIsCartOpen(!isCartOpen)
      dispatch(getCartThunk())
    } else {
      navigate('/login')
      dispatch(setLoginMessage('You must first log in to view your cart.'))
    }
  }

  const openPurchases = () => {
    navigate('/purchases')
  }

  return (
    <div className='navbar'>
      <div className='fixed'>
        <nav>
          <div className='title'>
            <strong onClick={() => navigate('/')}>e-commerce</strong>
          </div>

          <button className='icon' onClick={() => navigate('/user')}>
            <i className='fa-solid fa-user'></i>
          </button>

          <button onClick={openPurchases} className='icon'>
            <i className='fa-solid fa-archive'></i>
          </button>

          <button
            className='icon'
            onClick={openCart}
            style={{ color: isCartOpen ? 'var(--primary)' : '' }}
          >
            <i className='fa-solid fa-shopping-cart'></i>
          </button>
        </nav>

        <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
          <Cart handleClose={() => setIsCartOpen(false)} />
        </div>

        {isCartOpen && (
          <div className='overlay' onClick={() => setIsCartOpen(false)}></div>
        )}
      </div>
    </div>
  )
}

export default NavBar
