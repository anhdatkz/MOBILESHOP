import "./Manager.css"
import { FaEdit, FaTrashAlt, FaList } from "react-icons/fa"
import { useState, useEffect } from 'react'
import apiConfig from '../../api/apiConfigs'

function ProductManager() {
    const [loaiSP, setLoaiSP] = useState([])

    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/loaisanpham`)
            .then((res) => res.json())
            .then((data) => {
                setLoaiSP(data)
                console.log(data)
            })
    }, [])


    return (
        <>
            <div className="manager">
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
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loaiSP.map((lsp, index) => (
                                <tr key={index}>
                                    <td>{lsp.maloai}</td>
                                    <td><img className="product-img-manager" src={lsp.anh} alt="" /></td>
                                    <td>{lsp.tenloai}</td>
                                    <td>{lsp.soluongton}</td>
                                    <td>{lsp.thayDoiGiasLSP[0].giamoi}</td>
                                    <td className="d-flex justify-content-between">
                                        <div className="edit"><FaEdit/></div>
                                        <div className="delete"><FaTrashAlt /></div>
                                        <div className="detail-list"><FaList/></div>
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

export default ProductManager