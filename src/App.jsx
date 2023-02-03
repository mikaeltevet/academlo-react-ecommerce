import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, LoadingScreen } from './components/Components'
import NavBar from './components/NavBar/NavBar'
import ProtectedRoutes from './components/ProtectedRoutes'
import {
  Home, LogIn, Product,
  Purchases, SignUp,
  UserInfo
} from './pages/Pages'

function App() {
  const isLoading = useSelector((state) => state.app.isLoading)
  return (
    <HashRouter>
      {isLoading && <LoadingScreen />}
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/user' element={<UserInfo />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  )
}

export default App
