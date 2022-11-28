import { useState, useEffect } from 'react'
import apiConfigs from '../../api/apiConfigs'
import style from "./Modal.module.css"

function ModalBrand(props) {
    const { hide, idgiohang } = props

    console.log(idgiohang)

    const [ctgh, setCTGH] = useState([])

    useEffect(() => {
        fetch(`${apiConfigs.baseUrl}/ctgh/${idgiohang}`)
            .then((res) => res.json())
            .then((data) => {
                setCTGH(data)
            })
    }, [])
    console.log(ctgh)

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }


    return (
        <>
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chi tiết đơn hàng #{idgiohang}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hide}></button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ctgh.map((order) => (
                                    <tr key={order.id.maloaictgh}>
                                        <td>{order.id.maloaictgh}</td>
                                        <td>{order.soluong}</td>
                                        <td className="order-total">{order.tong} $</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalBrand