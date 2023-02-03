import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import History from '../components/History'
import Gallery from '../components/Product/Gallery'
import ProductInfo from '../components/Product/ProductInfo'
import ProductCard from '../components/ProductCard'
import { getProductsThunk } from '../store/slices/productsSlice'
import '../styles/product-detail.css'

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [product, setProduct] = useState({})
  const [productsFiltered, setProductsFiltered] = useState([])
  const productsList = useSelector((state) => state.products.productsList)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    const productFind = productsList.find(
      (productItem) => productItem.id === +id
    )
    const filtered = productsList.filter(
      (productItem) => productItem.category.id === productFind?.category.id
    )
    setProductsFiltered(filtered)
    setProduct(productFind)
  }, [id, dispatch, productsList])

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch])

  return (
    <section className='product-detail main-container'>
      <History currentPage={product?.title} />
      <div className='product-info-flex'>
        <div className='col'>
          <Gallery images={product?.images} />
        </div>
        <div className='col'>
          <ProductInfo product={product} />
        </div>
      </div>
      <div className='suggestions'>
        <strong>Discover similar products</strong>
        <ul>
          {productsFiltered.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Product
