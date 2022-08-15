import "./Sidebar.css"
import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <>
            <div className="sidebar w-25 h-100 bg-info">
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/manager/brand">Hãng</Link></li>
                    <li className="list-group-item"><Link to="/manager/product">Loại sản phẩm</Link></li>
                    <li className="list-group-item"><Link to="/manager/employee">Nhân viên</Link></li>
                    <li className="list-group-item"><Link to="/manager/order">Đơn đặt hàng khách hàng</Link></li>    
                    <li className="list-group-item"><Link to="/manager/report">Thống kê doanh thu</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar