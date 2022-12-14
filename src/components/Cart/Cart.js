import "./Cart.css"
import { Link, useNavigate } from 'react-router-dom'
import { FaRegWindowClose } from "react-icons/fa"
import cartEmpty from '../../assets/images/cartEmpty.png'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, decreaseCartItem, getTotals, removeFromCart } from "../../features/cartSlice"
import { toast } from "react-toastify"
import { caculate, formatTien } from "../../ultils/Format"


function Cart(props) {

    const [checkout, setCheckout] = useState(false)
    let isLogin = localStorage.getItem("isLogin")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const cartItems = cart.cartItems

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleIncreaseCartItem = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleDecreaseCartItem = (cartItem) => {
        dispatch(decreaseCartItem(cartItem))
    }

    const onClickCheckout = () => {
        if (isLogin == "true") {
            navigate("/checkout")
        }
        else {
            toast.error("Vui lòn đăng nhập", {
                position: "top-center"
            })
            navigate("/login")
        }
        // setCheckout(false)
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    return (
        <>
            <div className="cart">
                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <img src={cartEmpty} alt="" />
                        <h5>Không có sản phẩm nào trong giỏ hàng của bạn!</h5>
                        <Link to="/">
                            <button className="btn btn-warning">Tiếp tục mua sắm</button>
                        </Link>
                    </div>
                ) : (
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Ảnh</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.tenloai}</td>
                                            <td><img src={item.anh} alt="" className="cart-item-img" /></td>
                                            <td>{item.ctGiamGiaLSP[0]
                                                ? (item.thayDoiGiasLSP[0].giamoi - item.thayDoiGiasLSP[0].giamoi * item.ctGiamGiaLSP[0].phantram / 100)
                                                : formatTien(item.thayDoiGiasLSP[0].giamoi, '$')}</td>
                                            <td>
                                                <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => handleDecreaseCartItem(item)}>-</span>
                                                <span className="btn btn-info"> {item.cartQuantity} </span>
                                                <span className="btn btn-primary" style={{ margin: '2px' }} onClick={() => handleIncreaseCartItem(item)}>+</span>
                                            </td>
                                            <td>{item.ctGiamGiaLSP[0]
                                                ? formatTien(caculate(item) * item.cartQuantity, '$')
                                                : formatTien(item.thayDoiGiasLSP[0].giamoi * item.cartQuantity, '$')}</td>
                                            <td><FaRegWindowClose onClick={() => handleRemoveFromCart(item)} /></td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="fw-bold">Tổng thanh toán</td>
                                    <td className="fw-bold"> {formatTien(cart.cartTotalAmount,'$')}</td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            // <Link to={isLogin ? "/checkout" : "/login"}>
                            <button className="btn-checkout btn btn-primary" onClick={() => onClickCheckout()}>Đặt hàng</button>
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
                )}
            </div >
        </>
    )
}

export default Cart