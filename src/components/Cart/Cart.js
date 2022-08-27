import "./Cart.css"
import { Link, useNavigate } from 'react-router-dom'
import { FaRegWindowClose } from "react-icons/fa"
import logo from '../../assets/images/samsung-galaxy-s22-ultra-1-1.jpg'
import { useState } from "react"


function Cart(props) {

    const { cartItems, onAdd } = props
    const [checkout, setCheckout] = useState(false)
    let isLogin = localStorage.getItem("isLogin")
    let navigate = useNavigate()

    const onClickCheckout = () => {
        if(isLogin == "" || isLogin == "false"){
            alert("Vui lòng đăng nhập trước khi đặt hàng")
            navigate("/login")
        }
        else{
            navigate("/checkout")
        }
        // setCheckout(false)
    }

    return (
        <>
            <div className="cart">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Ảnh</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SamSung Galaxy S22 Ultra</td>
                                <td><img src={logo} alt="" className="cart-item-img" /></td>
                                <td>999 $</td>
                                <td>
                                    <span className="btn btn-primary" style={{ margin: '2px' }}>-</span>
                                    <span className="btn btn-info"> 2 </span>
                                    <span className="btn btn-primary" style={{ margin: '2px' }}>+</span>
                                </td>
                                <td>1998 $</td>
                                <td><FaRegWindowClose /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="fw-bold">Tổng cộng</td>
                                <td className="fw-bold"> 1998 $</td>
                            </tr>
                        </tbody>
                    </table>
                    {
                        // <Link to={isLogin ? "/checkout" : "/login"}>
                            <button className="btn-checkout btn btn-primary" onClick={onClickCheckout}>Đặt hàng</button>
                        // </Link>
                    }
                    {/* { isLogin ? (
                        <PayPal/>
                    ) : (
                        <Link to="/checkout">
                            <button className="btn-checkout btn btn-primary" onClick={onClickCheckout}>Đặt hàng</button>
                        </Link>
                    )} */}
                </div>
            </div >
        </>
    )
}

export default Cart