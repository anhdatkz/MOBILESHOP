import "./Paypal.css"
import { useEffect, useRef } from "react"


function PayPal({ isCheckout }) {
    const paypal = useRef();

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
                                    value: 650.00,
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
    }, []);

    return (
        <>
            <div>
                <div className="customer">
                    <div className="name"></div>
                    <div className="address"></div>
                    <div className="phone"></div>
                    <div className="email"></div>
                </div>
                <div className="paypal">
                    <div ref={paypal}></div>
                </div>
            </div>
        </>
    )
}

export default PayPal