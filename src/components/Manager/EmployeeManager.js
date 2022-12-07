import style from "./Manager.module.css"
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { useState, useEffect } from 'react'
import apiConfigs from "../../api/apiConfigs"

function EmployeeManager() {
    const [nhanviens, setNhanViens] = useState([])

    useEffect(() => {
        fetch(`${apiConfigs.baseUrl}/nhanvien`)
            .then((res) => res.json())
            .then((data) => {
                setNhanViens(data)
            })
    }, [])
    console.log(nhanviens)


    return (
        <>
            <div className={style["manager"]}>
                <div className="employee">
                    <div className="employee-header d-flex justify-content-between">
                        <h2 className="title">Nhân viên</h2>
                        <button className="btn btn-primary">Thêm</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã nhân viên</th>
                                <th>Họ tên</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {nhanviens.map((nv, index) => (
                                <tr key={index}>
                                    <td>{nv.manv}</td>
                                    <td>{nv.hoten}</td>
                                    <td className="d-flex">
                                        <div className="edit mx-5"><FaEdit /></div>
                                        <div className="delete"><FaTrashAlt /></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeManager