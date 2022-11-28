import "./Manager.css"
import {FaEdit, FaTrashAlt} from "react-icons/fa"
import { Fragment, useEffect, useState } from "react"
import ModalUserOrderDetail from "../Modal/ModalUserOrderDetail"
import apiConfig from "../../api/apiConfigs"

function OrderManager(){
    const [orderInfo, setOrderInfo] = useState([])
    const [modal, setModal] = useState(false)
    const [idGioHang, setIdGioHang] = useState("")

    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/giohang`)
            .then((res) => res.json())
            .then((data) => {
                setOrderInfo(data)
                console.log(data)
            })
    }, [])

    const showModal = (idgiohang) => {
        setIdGioHang(idgiohang)
        console.log("idGioHang" + idGioHang)
        return setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }

    return(
        <>
            <div className="manager">
                <div className="manager-order">
                    <div className="order-header d-flex justify-content-between">
                        <h2 className="title">Danh sách đơn hàng</h2>
                    </div>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>Mã ĐH</th>
                            <th>Người nhận</th>
                            <th>Địa chỉ</th>
                            <th>SĐT</th>
                            <th>Ngày đặt</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderInfo.map((orders) => (
                            <tr key={orders.idgiohang}>
                                <td>{orders.idgiohang}</td>
                                <td>{orders.tennguoinhan}</td>
                                <td>{orders.diachinhan}</td>
                                <td>{orders.sdtnguoinhan}</td>
                                <td>{orders.ngay}</td>
                                <td className="order-total">{orders.tongtien} $</td>
                                <td className="status">{orders.trangThai.trangthai}</td>
                                <td><button className="btn btn-primary btn-order" onClick={() => showModal(orders.idgiohang)}>Chi tiết</button><FaEdit/></td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
            {modal === true ? <ModalUserOrderDetail hide={closeModal} idgiohang={idGioHang}/> : <Fragment/>}
        </>
    )
}

export default OrderManager