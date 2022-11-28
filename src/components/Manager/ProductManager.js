import "./Manager.css"
import { FaEdit, FaTrashAlt, FaList } from "react-icons/fa"
import { useState, useEffect, Fragment } from 'react'
import apiConfig from '../../api/apiConfigs'
import ModalProduct from "../Modal/ModalProduct"

function ProductManager() {
    const [lsp, setlsp] = useState([])
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState("")
    const [maLSP, setMaLSP] = useState("")

    const showModalEdit = (mahang) => {
        console.warn(mahang)
        setAction("delete")
        setModal(true)
    }

    const showModalAdd = () => {
        setAction("add")
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }


    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/lsp`)
            .then((res) => res.json())
            .then((data) => {
                setlsp(data)
                console.log(data)
            })
    }, [])


    return (
        <>
            <div className="manager">
                <div className="product-manager">
                    <div className="product-header d-flex justify-content-between">
                        <h2 className="title">Loại sản phẩm</h2>
                        <button className="btn btn-primary" onClick={() => showModalAdd()}>Thêm</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã loại</th>
                                <th>Ảnh</th>
                                <th>Tên loại</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lsp.map((lsp, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{lsp.maloai}</td>
                                    <td><img className="product-img-manager" src={lsp.anh} alt="" /></td>
                                    <td>{lsp.tenloai}</td>
                                    <td>{lsp.soluongton}</td>
                                    <td>{lsp.ctGiamGiaLSP[0]
                                        ? (lsp.thayDoiGiasLSP[0].giamoi - lsp.thayDoiGiasLSP[0].giamoi * lsp.ctGiamGiaLSP[0].phantram / 100)
                                        : lsp.thayDoiGiasLSP[0].giamoi} $</td>
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
            {modal === true ? <ModalProduct hide={closeModal} maLSP={maLSP} action={action}/> : <Fragment/>}
        </>
    )
}

export default ProductManager