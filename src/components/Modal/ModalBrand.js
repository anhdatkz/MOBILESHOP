import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import apiConfigs from '../../api/apiConfigs'

function ModalBrand(props) {
    const { hide, mahang, action } = props

    const [hang, setHang] = useState("")
    let maHangRef = useRef("")
    let tenHangRef = useRef("")

    useEffect(() => {
        fetch(`${apiConfigs.baseUrl}/hang/${mahang}`)
            .then((res) => res.json())
            .then((data) => {
                setHang(data)
            })
    }, [])
    console.log(hang)

    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }



    const handleAddBrand = (data) => {
        fetch(`${apiConfigs.baseUrl}/hang`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                response.json()
            })
            .then((data) => {
                toast.success("Thêm hãng thành công!", {
                    position: "top-center"
                })
                console.log('Success:', data);
                hide()
            })
            .catch((error) => {
                toast.error("Thêm hãng thất bại!", {
                    position: "top-center"
                })
                console.error('Error:', error);
                hide()
            });
    }
    const handleEditBrand = (data, mahang) => {
        fetch(`${apiConfigs.baseUrl}/hang/${mahang}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                response.json()
            })
            .then((data) => {
                toast.success("Chỉnh sửa thông tin thành công!", {
                    position: "top-center"
                })
                console.log('Success:', data);
                hide()
            })
            .catch((error) => {
                toast.error("Chỉnh sửa thất bại!", {
                    position: "top-center"
                })
                console.error('Error:', error);
                hide()
            });
    }

    const handleAdd = () => {
        // let mahang = document.querySelector('input[name="mahang"').value
        // let tenhang = document.querySelector('input[name="tenhang"').value

        let formData = {
            mahang: maHangRef.current.value.trim(),
            tenhang: tenHangRef.current.value.trim()
        }
        handleAddBrand(formData)
        //console.log(formData)
    }

    const handleEdit= () => {
        // let mahang = document.querySelector('input[name="mahang"').value
        // let tenhang = document.querySelector('input[name="tenhang"').value

        let formData = {
            mahang: maHangRef.current.value.trim(),
            tenhang: tenHangRef.current.value.trim()
        }
        handleEditBrand(formData, mahang)
    }
    return (
        <>
            {action === "add" ? (
                <div className="modal show fade" style={modalStyle}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Hãng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hide}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label>Mã hãng</label>
                                    <input ref={maHangRef} type="text" className="form-control" placeholder="Mã hãng"
                                        name='mahang' required={true}/>
                                </div>

                                <div className="mb-3">
                                    <label>Tên hãng</label>
                                    <input ref={tenHangRef} type="text" className="form-control" placeholder="Tên hãng"
                                        name='tenhang' required={true} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleAdd}>Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="modal show fade" style={modalStyle}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Hãng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hide}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label>Mã hãng</label>
                                    <input ref={maHangRef} type="text" className="form-control" placeholder="Mã hãng"
                                        name='mahang' defaultValue={hang.mahang} readOnly/>
                                </div>

                                <div className="mb-3">
                                    <label>Tên hãng</label>
                                    <input ref={tenHangRef} type="text" className="form-control" placeholder="Tên hãng"
                                        name='tenhang' defaultValue={hang.tenhang} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleEdit}>Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalBrand