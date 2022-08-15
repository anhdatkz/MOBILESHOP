import "./Manager.css"
import {FaEdit, FaTrashAlt} from "react-icons/fa"

function EmployeeManager(){
    return(
        <>
            <div className="manager w-75">
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
                            <tr>
                                <td>NV01</td>
                                <td>Lê Phước Anh Đạt</td>
                                <td className="d-flex">
                                    <div className="edit mx-5"><FaEdit/></div>
                                    <div className="delete"><FaTrashAlt/></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeManager