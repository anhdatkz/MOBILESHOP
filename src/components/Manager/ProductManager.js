import "./Manager.css"
import {FaEdit, FaTrashAlt} from "react-icons/fa"

function ProductManager(){
    return(
        <>
            <div className="manager w-75">
                <div className="product-manager">
                    <div className="product-header d-flex justify-content-between">
                        <h2 className="title">Loại sản phẩm</h2>
                        <button className="btn btn-primary">Thêm</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã loại</th>
                                <th>Ảnh</th>
                                <th>Tên loại</th>
                                <th>Số lượng tồn</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SAMSUNG</td>
                                <td><img className="product-img-manager" src="https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/250262.jpg" alt="" /></td>
                                <td>SAMSUNG</td>
                                <td>20</td>
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

export default ProductManager