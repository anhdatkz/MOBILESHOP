import "./Manager.css"
import {FaEdit, FaTrashAlt} from "react-icons/fa"

function BrandManager() {
    return (
        <>
            <div className="manager w-75">
                <div className="brand">
                    <div className="brand-header d-flex justify-content-between">
                        <h2 className="title">Hãng</h2>
                        <button className="btn btn-primary">Thêm</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã hãng</th>
                                <th>Tên hãng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SAMSUNG</td>
                                <td>SAMSUNG</td>
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

export default BrandManager