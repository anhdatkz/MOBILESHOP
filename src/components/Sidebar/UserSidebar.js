import "./Sidebar.css"
import { Link } from "react-router-dom"

export default function UserSidebar(params) {
    return (
        <>
            <div className="sidebar w-25">
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/user/profile">Tài khoản của tôi</Link></li>
                    <li className="list-group-item"><Link to="/user/notifications">Thông báo</Link></li>
                    <li className="list-group-item"><Link to="/user/orders">Quản lý đơn hàng</Link></li>
                    <li className="list-group-item"><Link to="/user/returns">Quản lý đổi trả</Link></li>
                    <li className="list-group-item"><Link to="/login">Đăng xuất</Link></li>
                </ul>
            </div>
        </>
    )
};
