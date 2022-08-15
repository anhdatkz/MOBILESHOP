import "./Cart.css"
import { Link } from 'react-router-dom'
import { FaRegWindowClose } from "react-icons/fa"
import logo from '../../assets/images/logo.jpg'
import { useState } from "react"
import PayPal from "../Paypal/Paypal"

function Cart(props) {

    const { cartItems, onAdd } = props
    const [checkout, setCheckout] = useState(false)

    const onClickCheckout = () => {
        setCheckout(true)
    }

    return (
        <>
            <div className="cart">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>aaaaaaaaaaa</td>
                                <td><img src={logo} alt="" className="cart-item-img" /></td>
                                <td>800 $</td>
                                <td>
                                    <span className="btn btn-primary" style={{ margin: '2px' }}>-</span>
                                    <span className="btn btn-info"> 1 </span>
                                    <span className="btn btn-primary" style={{ margin: '2px' }}>+</span>
                                </td>
                                <td>aaaaaaaaaa</td>
                                <td><FaRegWindowClose /></td>
                            </tr>
                            <tr>
                                <td>aaaaaaaaaaa</td>
                                <td><img src={logo} alt="" className="cart-item-img" /></td>
                                <td>800 $</td>
                                <td>
                                    <span className="btn btn-primary" style={{ margin: '2px' }}>-</span>
                                    <span className="btn btn-info"> 1 </span>
                                    <span className="btn btn-primary" style={{ margin: '2px' }}>+</span>
                                </td>
                                <td>aaaaaaaaaa</td>
                                <td><FaRegWindowClose /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="fw-bold">Tổng cộng</td>
                                <td className="fw-bold">1200000 $</td>
                            </tr>
                        </tbody>
                    </table>
                    {checkout ? (
                        <PayPal/>
                    ) : (
                        <Link to="/checkout">
                            <button className="btn-checkout btn btn-primary" onClick={onClickCheckout}>Thanh toán</button>
                        </Link>
                    )}
                </div>
            </div >
        </>
    )
}

export default Cart