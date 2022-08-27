

function ModalProduct(props) {
    const {hide} = props
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
    return (
        <>
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Mã loại</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hide}></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label>Mã hãng</label>
                                <input type="text" className="form-control" placeholder="Mã hãng" />
                            </div>

                            <div className="mb-3">
                                <label>Tên hãng</label>
                                <input type="text" className="form-control" placeholder="Tên hãng" />
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