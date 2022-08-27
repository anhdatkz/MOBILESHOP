import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { scrollTop } from '../../App'
import apiConfig from '../../api/apiConfigs'

function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassWord] = useState("")
    const [accounts, setAccounts] = useState([])
    const [role, setRole] = useState("")

    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/taikhoan`)
            .then((res) => res.json())
            .then((data) => {
                setAccounts(data)
            })
    }, [])

    console.log(accounts)

    const onSubmitLogin = (e) => {
        e.preventDefault()
        localStorage.setItem('isLogin', false)
        let acc = accounts.find(a => a.matk.trim() === username && a.password.trim() === password)
        console.log(acc)
        if (acc === undefined) {
            alert("Đăng nhập thất bại! Mời bạn kiểm tra lại Username or PassWord!")
            return
        }
        else {
            localStorage.setItem('isLogin', true)
            setRole(acc.quyen.maquyen.trim())
            if (acc.quyen.maquyen.trim() === "NV") {
                navigate("/manager")
                alert("Đăng nhập thành công!")
            }
            else if (acc.quyen.maquyen.trim() === "KH") {
                navigate("/user")
                alert("Đăng nhập thành công!")
            }
        }
        console.log(localStorage.getItem("isLogin"))
        scrollTop()
    }


    return (
        <>
            <form className='container p-3 login-form' onSubmit={onSubmitLogin}>
                <h3>Đăng nhập</h3>

                <div className="mb-3">
                    <label>Tên đăng nhập</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên đăng nhập"
                        value={username}
                        onChange={e => setUserName(e.target.value.trim())}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={e => setPassWord(e.target.value.trim())}
                        required
                    />
                </div>

                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        Đăng nhập
                    </button>
                    <button type="submit" className="btn btn-primary">
                        <Link to="/register" className='text-white'>Đăng ký</Link>
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Quên <a href="#">mật khẩu?</a>
                </p>
            </form>
        </>
    )
}

export default Login;