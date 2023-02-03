import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  deleteFromCartThunk,
  modifyQuantityThunk
} from '../../store/slices/cartSlice'

const CartProduct = ({ cartProduct, handleClose }) => {
  const dispatch = useDispatch()
  const modifyQuantity = (quantity) => {
    dispatch(modifyQuantityThunk(cartProduct.id, { quantity }))
  }
  return (
    <li key={cartProduct.id}>
      <div className='product-info'>
        <img src={cartProduct.product.images?.[0].url} alt='' />
        <div className='details'>
          <span className='brand'>{cartProduct.brand}</span>
          <Link
            to={`/product/${cartProduct.product.id}`}
            className='name'
            onClick={handleClose}
          >
            {cartProduct.product.title}
          </Link>
          <div className='quantity-box'>
            <div className='flex'>
              <button
                onClick={() => modifyQuantity(cartProduct.quantity - 1)}
                disabled={cartProduct.quantity <= 1}
              >
                <i className='fa-solid fa-minus'></i>
              </button>
              <div className='value'>{cartProduct.quantity}</div>
              <button onClick={() => modifyQuantity(cartProduct.quantity + 1)}>
                <i className='fa-solid fa-plus'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='button-delete'>
          <button onClick={() => dispatch(deleteFromCartThunk(cartProduct.id))}>
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      </div>
      <div className='total'>
        <span className='label'>Total: </span>
        <b>$ {cartProduct.product.price * cartProduct.quantity}</b>
      </div>
    </li>
  )
}

export default CartProduct
