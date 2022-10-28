import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { FaShoppingCart, FaBell, FaUserCog, FaSearch } from "react-icons/fa"
import { scrollTop } from '../../App'
import { useSelector } from 'react-redux'


function Header(){
    const cart = useSelector((state) => state.cart)
    

    return(
       <>
        <header id="header">
            <div className='header__logo'>
                <img src={logo}/>
            </div>
            <div className='header__title'>
                <Link to="/" onClick={scrollTop}>AD Store</Link>
            </div>
            <div className='header__search'>
                <div className='header__search-box'>
                    <div className='search-icon'>
                        <FaSearch></FaSearch>
                    </div>
                    <input className='search-input' placeholder='Tìm kiếm sản phẩm...'/>
                </div>
            </div>
            <div className='header__account'>
                <div className="header__cart">
                    <div className='item cart'>
                        <Link to="/detail-cart" onClick={scrollTop}>
                            <FaShoppingCart></FaShoppingCart>
                            <span className="header__cart-number">{cart.cartItems.length}</span>
                        </Link>
                        {/* <span className="header__cart-number">3</span> */}
                    </div>
                    <div className="header__cart-list">
                        <div className="header__cart-list--no-cart">
                            <div className="header__cart-list--no-cart-img"></div>
                            <div className="header__cart-list--no-cart-msg">Chưa có sản phẩm</div>
                        </div>
                        
                    </div>
                </div>
                <div className='item notify'>
                    <FaBell></FaBell>
                </div>
                <div className='item login'>                    
                    <Link to="/login"><FaUserCog></FaUserCog></Link>
                </div>
            </div>
        </header>
       </>
    )
}

export default Header