import { useEffect, useState } from "react"
import style from "./Modal.module.css"

function ModalProduct(props) {
    const {hide} = props
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }

    const [productImg, setProductImg] = useState()

    useEffect(() => {
        return () => {
            productImg && URL.revokeObjectURL(productImg.preview)
        }
    }, [productImg])

    const handlePreviewImg = (e) =>{
        const file = e.target.files[0]
        file.preview  = URL.createObjectURL(file)
        setProductImg(file)
    }

    return (
        <>
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Loại sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hide}></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label>Mã loại</label>
                                <input type="text" className="form-control" placeholder="Mã loại" />
                            </div>

                            <div className="mb-3">
                                <label>Tên loại</label>
                                <input type="text" className="form-control" placeholder="Tên loại" />
                            </div>
                            <div className="mb-3">
                                <label>Ảnh</label>
                                <div className={style.product_img}>
                                    <input type="file" className="form-control" onChange={handlePreviewImg}/>
                                    {productImg && (
                                        <img src={productImg.preview} alt="" width="70px" height="50px" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalProduct