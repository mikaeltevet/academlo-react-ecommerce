import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filters from '../components/Home/Filters'
import SearchBox from '../components/Home/SearchBox'
import ProductCard from '../components/ProductCard'
import { getProductsThunk } from '../store/slices/productsSlice'
import '../styles/home.css'

const Home = () => {
  const { productsList, productsFiltered } = useSelector(
    (state) => state.products
  )
  const products = productsFiltered.length ? productsFiltered : productsList
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch])

  return (
    <div className='home'>
      <aside className='fixed'>
        <Filters handleClose={() => {}} />
      </aside>
      <section className='main-container'>
        <SearchBox />
        <ul className='products-list'>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
