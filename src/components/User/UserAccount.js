import './User.css'



function UserAccount() {
    return (
        <>
            <div className="user">
                <div className="user-title">
                    <h3>Hồ sơ của tôi</h3>
                </div>
                <div className="user-profile">
                    <form action="">
                        <div className="frofile-item">
                            <div className="username">
                                <label htmlFor="">Tên đăng nhập</label>
                                <div>anhdat</div>
                            </div>
                        </div>
                        <div className="frofile-item">
                            <div className="fullname">
                                <label htmlFor="">Tên</label>
                                <div>
                                    <input type="text" value="Lê Phước Anh Đạt"/>
                                </div>
                            </div>
                        </div>
                        <div className="frofile-item">
                            <div className="email">
                                <label htmlFor="">Email</label>
                                <div>nguyenvana@gmail.com</div>
                            </div>
                        </div>
                        <div className="frofile-item">
                            <div className="numberphone">
                                <label htmlFor="">Số điện thoại</label>
                                <div>0123456789</div>
                            </div>
                        </div>
                        <div className="frofile-item">
                            <div className="address">
                                <label htmlFor="">Địa chỉ</label>
                                <div>Hồ Chí Minh</div>
                            </div>
                        </div>
                        <div className="frofile-item">
                            <div className="dayofbirth">
                                <label htmlFor="">Ngày sinh</label>
                                <div>1999-12-11</div>
                            </div>
                        </div>
                        <div className="frofile-item">
                            <button className='btn btn-primary'>Lưu</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserAccount