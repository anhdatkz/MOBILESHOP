import './ProductDetail.css'
import apiConfig from '../../api/apiConfigs'
import { useParams } from "react-router-dom"
import { FaPlus, FaMinus } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'
function ProductsDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [price, setPrice] = useState(0)

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
                setPrice(data.thayDoiGiasLSP[0].giamoi);
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
                        <div className="price">{price} $</div>
                        <div className="discount"></div>
                    </div>
                    <div className="section-detail__price-discount">
                        
                    </div>
                    <div className="section-detail__add-cart">
                        <div className="quantity">
                            <button className="btn btn-primary des"><FaMinus /></button>
                            <input type="text" className="quan" defaultValue={1} />
                            <button className="btn btn-primary ins"><FaPlus /></button>
                        </div>
                        <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                            <img src="./asset/images/icon-cart.svg" alt="" />
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-detail mt-5 ms-5">
                <h4 className="detail-tille">Cấu hình Điện thoại {product.tenloai}</h4>
                <ul class="list-group w-50 mb-5">
                    <li class="list-group-item d-flex">
                        <div className='w-25'>Màn hình </div>
                        <div>{product.manhinh}</div>
                    </li>
                    <li class="list-group-item d-flex">
                        <div className='w-25'>Hệ điều hành </div>
                        <div>{product.hedieuhanh}</div>
                    </li>
                    <li class="list-group-item d-flex">
                        <div className='w-25'>Chip </div>
                        <div>{product.chip}</div>
                    </li>
                    <li class="list-group-item d-flex">
                        <div className='w-25'>RAM </div>
                        <div>{product.ram}</div>
                    </li>
                    <li class="list-group-item d-flex">
                        <div className='w-25'>Bộ nhớ trong </div>
                        <div>{product.rom}</div>
                    </li>
                    <li class="list-group-item d-flex">
                        <div className='w-25'>Dung lượng Pin</div>
                        <div>{product.pin}</div>
                    </li>
                    <li class="list-group-item d-flex">
                        <div className='w-25'>Số lượng </div>
                        <div>{product.soluongton}</div>
                    </li>
                    <li class="list-group-item d-flex">
                        <div className='w-25'>Bảo hành</div>
                        <div>{product.thoigianbh} tháng</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProductsDetail