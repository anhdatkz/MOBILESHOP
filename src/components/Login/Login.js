import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { scrollTop } from '../../App'
import apiConfig from '../../api/apiConfigs'

function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassWord] = useState("")
    const [accounts, setAccounts] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/taikhoan`)
            .then((res) => res.json())
            .then((data) => {
                setAccounts(data)
            })
    }, [])

    console.log(accounts)

    const onSubmitLogin  = (e) =>{
        e.preventDefault()
        let acc = accounts.find(a => a.matk.trim() === username && a.password.trim() === password)
        console.log(acc)

        if(acc === undefined){
            alert("Đăng nhập thất bại! Mời bạn kiểm tra lại Username or PassWord!")
            return
        }
        else{
            if(acc.quyen.maquyen.trim() === "NV"){
                navigate("/manager/brand")
                alert("Đăng nhập thành công!")
            }
            else if(acc.quyen.maquyen.trim() === "KH"){
                navigate("/")
                alert("Đăng nhập thành công!")
            }
        }
        
        scrollTop()
    }

    
    return (
        <>
            <form className='container p-3 login-form' onSubmit={onSubmitLogin}>
                <h3>Sign In</h3>

                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUserName(e.target.value.trim())}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
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
                        Submit
                    </button>
                    <button type="submit" className="btn btn-primary">
                        <Link to="/register" className='text-white'>Register</Link>
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </>
    )
}

export default Login;