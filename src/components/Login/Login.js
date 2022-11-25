import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { scrollTop } from '../../App'
import { toast } from "react-toastify"
import apiConfigs from '../../api/apiConfigs'


function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassWord] = useState("")
    const [accounts, setAccounts] = useState([])
    const [role, setRole] = useState("")

    let navigate = useNavigate()

    // useEffect(() => {
    //     fetch(`${apiConfigs.baseUrl}/taikhoan`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setAccounts(data)
    //         })
    // }, [])

    console.log(accounts)

    const login = () => {
        localStorage.setItem('isLogin', false)
        const formData = {
            matk: username,
            password: password
        }

        fetch(`${apiConfigs.baseUrl}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw Error(response.status)
            })
            .then((data) => {
                toast.success("Đăng nhập thành công", {
                    position: "top-center"
                })

                localStorage.setItem('isLogin', true)
                localStorage.setItem('username', data.name)
                localStorage.setItem('role', data.authorities[0])
                setAccounts(data)

                if (data.authorities[0] === "ROLE_USER") {
                    navigate("/user/profile")
                } else if (data.authorities[0] === "ROLE_ADMIN") {
                    navigate("/manager")
                }

                console.log('Success:', data);
            })
            .catch((error) => {
                toast.error("Tên đăng nhập hoặc mật khẩu không đúng", {
                    position: "top-center"
                })
                // loadData()
                console.error('Error:', error);
            });

        scrollTop()
    }

    // const onSubmitLogin = (e) => {
    //     const formData = {
    //         matk: username,
    //         password: password
    //     }
    //     login(formData)

    //     scrollTop()
    // }


    // const onSubmitLogin = (e) => {
    //     e.preventDefault()
    //     localStorage.setItem('isLogin', false)
    //     let acc = accounts.find(a => a.matk.trim() === username && a.password.trim() === password)
    //     console.log("acc: " + acc)
    //     if (acc === undefined) {
    //         toast.error("Tên đăng nhập hoặc mật khẩu không đúng", {
    //             position: "top-center"
    //         })
    //         return
    //     }
    //     else {
    //         localStorage.setItem('isLogin', true)
    //         setRole(acc.quyen.maquyen.trim())
    //         if (acc.quyen.maquyen.trim() === "NV") {
    //             navigate("/manager")
    //             toast.success("Đăng nhập thành công", {
    //                 position: "top-center"
    //             })
    //         }
    //         else if (acc.quyen.maquyen.trim() === "KH") {
    //             navigate("/user/profile")
    //             toast.success("Đăng nhập thành công", {
    //                 position: "top-center"
    //             })
    //         }
    //     }
    //     console.log(localStorage.getItem("isLogin"))
    //     scrollTop()
    // }


    return (
        <>
            <div className="container">
                <form className='login-form p-3'>
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
                        <button type='button' className="btn btn-primary" onClick={login}>
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
            </div>
        </>
    )
}

export default Login;