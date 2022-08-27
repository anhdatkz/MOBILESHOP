import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    return (
        <>
            <form className='container p-3 register-form'>
                <h3>Đăng ký</h3>

                <div className="mb-3">
                    <label>CMND</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ID"
                    />
                </div>

                <div className="mb-3">
                    <label>Họ tên</label>
                    <input type="text" className="form-control" placeholder="Họ tên" />
                </div>

                <div className="mb-3">
                    <label>Địa chỉ</label>
                    <input type="text" className="form-control" placeholder="Địa chỉ" />
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="mb-3">
                    <label>Tên đăng nhập</label>
                    <input type="text" className="form-control" 
                    placeholder="Tên đăng nhập" />
                </div>

                <div className="mb-3">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Đăng ký
                    </button>
                </div>
                <p className="forgot-password text-right">
                   Đã có tài khoản <Link to="/login">Đăng nhập?</Link>
                </p>
            </form>
        </>
    )
}

export default Register;