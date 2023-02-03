import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setLoginMessage } from '../store/slices/appSlice'
import { addToCartThunk } from '../store/slices/cartSlice'
import '../styles/product-card.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addToCart = () => {
    if (localStorage.getItem('token')) {
      const productCart = {
        productId: product.id,
        quantity: 1,
      }
      dispatch(addToCartThunk(productCart))
    } else {
      dispatch(setLoginMessage('You must first log in to add products to your cart.'))
      navigate('/login')
    }
  }

  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
        <div className='image'>
          <img
            src={product.images?.[1]?.url}
            alt=''
            className='over'
            crossOrigin='anonymous'
          />
          <img src={product.images?.[0]?.url} alt='' crossOrigin='anonymous' />
        </div>
        <div className='info'>
          <span className='brand'>{product.brand}</span>
          <strong>{product.title}</strong>
          <span className='price'>Price</span>
          <span className='amount'>$ {product.price}</span>
        </div>
      </Link>
      <button className='cart-button' onClick={addToCart}>
        <i className='fa-solid fa-shopping-cart'></i>
      </button>
    </div>
  )
}

export default ProductCard
