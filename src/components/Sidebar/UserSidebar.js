import "./Sidebar.css"
import { NavLink, useNavigate } from "react-router-dom"

export default function UserSidebar(params) {
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.setItem('isLogin', false)
        localStorage.setItem('username', "")
        localStorage.setItem('role', "")
        navigate("/login")
    }
    return (
        <>
            <div className="sidebar">
                <ul className="list-group">
                    <li className="list-group-item"><NavLink to="/user/profile">Tài khoản của tôi</NavLink></li>
                    <li className="list-group-item"><NavLink to="/user/orders">Quản lý đơn hàng</NavLink></li>
                    <li className="list-group-item"><NavLink to="/user/orders-history">Lịch sử mua hàng</NavLink></li>
                    <li className="list-group-item"><NavLink to="/user/returns">Quản lý đổi trả</NavLink></li>
                    <li className="list-group-item"><NavLink to="/user/notifications">Thông báo</NavLink></li>
                    <li className="list-group-item" onClick={handleLogOut}><a className="logout">Đăng xuất</a></li>
                </ul>
            </div>
        </>
    )
};
