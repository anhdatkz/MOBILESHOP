import { useState, useEffect } from 'react'
import apiConfigs from '../../api/apiConfigs'

function ModalBrand(props) {
    const { hide, mahang } = props

    const [hang, setHang] = useState("")

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



    const addBrand = (data) => {
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
                alert("Thêm thành công!")
                // loadData()
                console.log('Success:', data);
                hide()
            })
            .catch((error) => {
                alert("Thêm thất bại!" + error)
                // loadData()
                console.error('Error:', error);
                hide()
            });
    }

    const handleAdd = ()=>{
        let mahang = document.querySelector('input[name="mahang"').value
        let tenhang = document.querySelector('input[name="tenhang"').value
        
        let formData = {
            mahang: mahang,
            tenhang: tenhang
        }

        addBrand(formData)
        //console.log(formData)
    }

    return (
        <>
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
                                <input type="text" className="form-control" placeholder="Mã hãng"
                                    name='mahang' defaultValue={hang.mahang} />
                            </div>

                            <div className="mb-3">
                                <label>Tên hãng</label>
                                <input type="text" className="form-control" placeholder="Tên hãng"
                                    name='tenhang' defaultValue={hang.tenhang}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleAdd}>Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalBrand