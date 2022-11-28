import { Fragment, useEffect, useState } from "react"
import apiConfig from "../../api/apiConfigs"
import ModalUserOrderDetail from "../Modal/ModalUserOrderDetail"
import "./User.css"

function UserOrder() {

    const [orderInfo, setOrderInfo] = useState([])
    const [modal, setModal] = useState(false)
    const [idGioHang, setIdGioHang] = useState("")


    const username = localStorage.getItem('username')

    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/giohang/kh/${username}`)
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


    console.log(orderInfo)
    return (
        <>
            <div className="col-md-12">
                <table className="order">
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
                                <td className="order-status">{orders.trangThai.trangthai}</td>
                                <td><button className="btn btn-primary btn-order" onClick={() => showModal(orders.idgiohang)}>Chi tiết</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modal === true ? <ModalUserOrderDetail hide={closeModal} idgiohang={idGioHang}/> : <Fragment/>}
        </>
    )
}

export default UserOrder