import './ProductDetail.css'
import apiConfig from '../../api/apiConfigs'
import { useParams } from "react-router-dom"
import { FaPlus, FaMinus } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'
import { caculate, formatTien } from '../../ultils/Format'
function ProductsDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [price, setPrice] = useState(0)
    const [percent, setPercent] = useState("")

    const dispatch =  useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        fetch(`${apiConfig.baseUrl}/loaisanpham/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                console.log(data)
                setPrice(data.ctGiamGiaLSP[0]
                    ? caculate(data)
                    : data.thayDoiGiasLSP[0].giamoi);
                setPercent(data.ctGiamGiaLSP[0]
                    ? data.ctGiamGiaLSP[0].phantram
                    : "")
            })
    }, [])

    console.log(price)
    return (
        <>
            <div className="content">
                <div className="section-item">
                    <div className="section-image__main">
                        <img src={product.anh} alt="" />
                    </div>
                </div>
                <div className="section-item">
                    <div className="section-detail__type">
                        AD Store
                    </div>

                    <div className="section-detail__name">
                        {product.tenloai}
                    </div>

                    <div className="section-detail__description">
                        <p>{product.mota}</p>
                    </div>

                    <div className="section-detail__price">
                        <div className="old-price">{formatTien(price,'$')}</div>
                        <div className="discount">{`${percent} %`}</div>
                    </div>
                    <div className="section-detail__price-discount">
                        {formatTien(price,'$')}
                    </div>
                    <div className="section-detail__add-cart">
                        {/* <div className="quantity">
                            <button className="btn btn-primary des"><FaMinus /></button>
                            <input type="text" className="quan" defaultValue={1} />
                            <button className="btn btn-primary ins"><FaPlus /></button>
                        </div> */}
                        <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                            <img src="./asset/images/icon-cart.svg" alt="" />
                            Th??m v??o gi??? h??ng
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-detail mt-5 ms-5">
                <h4 className="detail-tille">C???u h??nh ??i???n tho???i {product.tenloai}</h4>
                <ul className="list-group w-50 mb-5">
                    <li className="list-group-item d-flex">
                        <div className='w-25'>M??n h??nh </div>
                        <div>{product.manhinh}</div>
                    </li>
                    <li className="list-group-item d-flex">
                        <div className='w-25'>H??? ??i???u h??nh </div>
                        <div>{product.hedieuhanh}</div>
                    </li>
                    <li className="list-group-item d-flex">
                        <div className='w-25'>Chip </div>
                        <div>{product.chip}</div>
                    </li>
                    <li className="list-group-item d-flex">
                        <div className='w-25'>RAM </div>
                        <div>{product.ram}</div>
                    </li>
                    <li className="list-group-item d-flex">
                        <div className='w-25'>B??? nh??? trong </div>
                        <div>{product.rom}</div>
                    </li>
                    <li className="list-group-item d-flex">
                        <div className='w-25'>Dung l?????ng Pin</div>
                        <div>{product.pin}</div>
                    </li>
                    <li className="list-group-item d-flex">
                        <div className='w-25'>S??? l?????ng </div>
                        <div>{product.soluongton}</div>
                    </li>
                    <li className="list-group-item d-flex">
                        <div className='w-25'>B???o h??nh</div>
                        <div>{product.thoigianbh} th??ng</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProductsDetail