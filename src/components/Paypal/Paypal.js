import "./Paypal.css"
import "../Cart/Cart.css"
import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

function PayPal({ isCheckout }) {
    const paypal = useRef();
    const cart = useSelector((state) => state.cart)
    const cartItems = cart.cartItems

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
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, [paypal]);

    return (
        <>
            <div className="checkout">
                <div className="customer">
                    <div className="customer-info">
                        <div className="delivery-address">
                            <h4>Địa chỉ nhận hàng</h4>
                            <h6 className="name">Lê Phước Anh Đạt</h6>
                            <div className="address">A2 Hẻm 60 Đường Man Thiện, Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh</div>
                            <div className="phone">0123456789</div>
                            <div className="email">nguyenvana@gmail.com</div>
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