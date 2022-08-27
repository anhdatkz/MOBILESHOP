import "./Manager.css"
import {FaEdit, FaTrashAlt} from "react-icons/fa"

function OrderManager(){
    return(
        <>
            <div className="manager w-75">
                <div className="order">
                    <div className="order-header d-flex justify-content-between">
                        <h2 className="title">Danh sách đơn hàng khách hàng</h2>
                        <button className="btn btn-primary">Thêm</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã đơn hàng</th>
                                <th>Tên KH</th>
                                <th>Ngày đặt</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Duyệt đơn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DH001</td>
                                <td>Nguyễn Văn An</td>
                                <td>12/8/2022</td>
                                <td>1998 $</td>
                                <td>Đã duyệt</td>
                                <td>
                                    <FaEdit/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OrderManager