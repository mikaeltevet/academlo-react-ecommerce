import { useState } from 'react'
import Cart from './Cart'
import '../../styles/navbar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import { setLoginMessage } from '../../store/slices/app.slice'

const NavBar = () => {

    const [ isCartOpen, setIsCartOpen ] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const openCart = () => {
        if(localStorage.getItem("token")){
            setIsCartOpen(!isCartOpen)
            dispatch(getCartThunk())
        } else {
            navigate("/login")
            dispatch(setLoginMessage("You have to Log In to access to your cart"))
        }
    }

    const openPurchases = () => {
        navigate("/purchases")
    }

    return (
        <div className="navbar">
            <div className="fixed">
                <nav>
                    <div className="title">
                        <strong onClick={() => navigate("/")}>
                            e-commerce
                        </strong>
                    </div>

                    <button className="icon" onClick={() => navigate("/user")} >
                        <i className="icon-user"></i>
                    </button>

                    <button onClick={openPurchases} className='icon'>
                        <i className="icon-archive"></i>
                    </button>

                    <button 
                        className="icon" 
                        onClick={openCart}
                        style={{color: isCartOpen ? 'var(--primary)' : ''}}
                    >
                        <i className="icon-shopping-cart"></i>
                    </button>
                </nav>

                <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
                    <Cart handleClose={() => setIsCartOpen(false)} />
                </div>

                { isCartOpen && 
                    <div className="overlay" onClick={() => setIsCartOpen(false)}></div>
                }
            </div>
        </div>
    )
}

export default NavBar