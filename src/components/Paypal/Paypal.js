import "./Paypal.css"
import "../Cart/Cart.css"
import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import apiConfig from '../../api/apiConfigs'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../../features/cartSlice"

function PayPal({ isCheckout }) {
    const paypal = useRef();
    const cart = useSelector((state) => state.cart)
    const cartItems = cart.cartItems
    const [userInfo, setUserInfo] = useState({})
    const username = localStorage.getItem('username')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch(`${apiConfig.baseUrl}/khachhang/tk/${username}`)
            .then((res) => res.json())
            .then((data) => {
                setUserInfo(data)
                console.log(data)
            })
    },[])

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Cool looking table",
                                amount: {
                                    currency_code: "USD",
                                    value: cart.cartTotalAmount,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    dispatch(clearCart())
                    navigate("/")
                    toast.success("Đặt hàng thành công!", {
                        position: "top-center"
                    })
                },
                onError: (err) => {
                    console.log(err);
                    toast.error("Đặt hàng thất bại!", {
                        position: "top-center"
                    })
                },
            })
            .render(paypal.current);
    }, [paypal, cart, dispatch]);

    return (
        <>
            <div className="checkout">
                <div className="customer">
                    <div className="customer-info">
                        <div className="delivery-address">
                            <h4>Địa chỉ nhận hàng</h4>
                            <h6 className="name">{userInfo.tenkh}</h6>
                            <div className="address">{userInfo.diachi}</div>
                            <div className="phone">{userInfo.sdt}</div>
                            <div className="email">{userInfo.email}</div>
                        </div>
                        <div className="delivery-mode">
                            <h4>Hình thức giao hàng</h4>
                            <div>Giao Tiết Kiệm</div>
                            <div>Miễn phí vận chuyển</div>
                        </div>
                        <div className="delivery-mode">
                            <h4>Hình thức thanh toán</h4>
                            <div>Thanh toán tiền mặt khi nhận hàng</div>
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <h5>Chi tiết giỏ hàng</h5>
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
                                {
                                    cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.tenloai}</td>
                                            <td><img src={item.anh} alt="" className="cart-item-img" /></td>
                                            <td>{item.thayDoiGiasLSP[0].giamoi} $</td>
                                            <td>
                                                <span className="btn btn-info"> {item.cartQuantity} </span>
                                            </td>
                                            <td>{item.thayDoiGiasLSP[0].giamoi * item.cartQuantity} $</td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="fw-bold">Tổng thanh toán</td>
                                    <td className="fw-bold"> {cart.cartTotalAmount} $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div >
                <div className="paypal">
                    <div ref={paypal}></div>
                </div>
            </div>
        </>
    )
}

export default PayPal