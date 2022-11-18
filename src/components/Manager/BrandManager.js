import "./Manager.css"
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { useState, useEffect, Fragment } from 'react'
import apiConfigs from "../../api/apiConfigs"
import ModalBrand from "../Modal/ModalBrand"

function BrandManager() {

    const [hangs, setHangs] = useState([])
    const [modal, setModal] = useState(false)
    const [mahang, setMaHang] = useState("")


    useEffect(() => {
        fetch(`${apiConfigs.baseUrl}/hang`)
            .then((res) => res.json())
            .then((data) => {
                setHangs(data)
            })
    }, [modal])
    console.log(hangs)

    const showModal = (mahang) =>{
        setMaHang(mahang.trim())
        console.warn(mahang)
        return setModal(true)
    }

    const closeModal = () =>{
        setModal(false)
        console.log(modal)
    }

    return (
        <>
            <div className="manager">
                <div className="brand">
                    <div className="brand-header d-flex justify-content-between">
                        <h2 className="title">Hãng</h2>
                        <button className="btn btn-primary" onClick={() => showModal("")}>Thêm</button>
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
                            {hangs.map((hang, index) => (
                                <tr key={index}>
                                    <td>{hang.mahang}</td>
                                    <td>{hang.tenhang}</td>
                                    <td className="d-flex">
                                        <div className="action edit" onClick={() => showModal(hang.mahang)}><FaEdit/></div>
                                        <div className="action delete"><FaTrashAlt /></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {modal === true ? <ModalBrand hide={closeModal} mahang={mahang}/> : <Fragment/>}
        </>
    )
}

export default BrandManager