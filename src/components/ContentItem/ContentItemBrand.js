import apiConfig from '../../api/apiConfigs'
import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import "./ContentItem.css"
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"

function ContentItemBrand(props) {
    const { id } = useParams()

    const [loaiSP, setLoaiSP] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/loaisanpham/search/query=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setLoaiSP(data)
                console.log(data)
            })
    }, [id])

    const handleClick = (item) => {
        console.log(item)
        if (cartItems.indexOf(item) !== -1) return;
        setCartItems([...cartItems, item]);
        console.log(cartItems)
    };

    if (loaiSP.length === 0) {
        return (
            <div className="content__item">
                <div className="content__item-title">
                    Sản phẩm "{id}" hiện đang cập nhật! Vui lòng trở lại sau!
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='content__item'>
                <div className='content__item-title'>{id}</div>
                <div className='content__item-list'>
                    <ul className='list-product'>
                        {loaiSP.map((loaisp, index) => (
                            <li className='product' key={index}>
                                <Link to={`/detail-product/${loaisp.maloai}`}>
                                    <div className='product__img'>
                                        <img src={loaisp.anh} />
                                    </div>
                                    <div className='product__name'>{loaisp.tenloai}</div>
                                    <div className='product__old-price'>
                                        <div className="old-price">
                                            {loaisp.thayDoiGiasLSP[0].giamoi}$
                                        </div>
                                        <div className="percent">
                                            {loaisp.ctGiamGiaLSP[0] ? `${loaisp.ctGiamGiaLSP[0].phantram} %` : ""}
                                        </div>
                                    </div>
                                    <div className='product__new-price'>{loaisp.ctGiamGiaLSP[0]
                                        ? (loaisp.thayDoiGiasLSP[0].giamoi - loaisp.thayDoiGiasLSP[0].giamoi * loaisp.ctGiamGiaLSP[0].phantram / 100)
                                        : loaisp.thayDoiGiasLSP[0].giamoi} $
                                    </div>
                                    <ul className='product__star'>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                    </ul>
                                </Link>
                                {/* <button className='btn-add-cart btn btn-primary' onClick={() => handleClick(loaisp)}>Thêm vào giỏ hàng</button> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContentItemBrand
