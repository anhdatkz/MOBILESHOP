import './Navbar.css'
import { useEffect, useState } from 'react'
import apiConfigs from "../../api/apiConfigs"
import {FaAngleDown} from "react-icons/fa"
import { Link } from 'react-router-dom'
function Navbar(){  
    const [hangs, setHangs] = useState([])

    useEffect(()=>{
        fetch(`${apiConfigs.baseUrl}/hang`)
            .then((res) => res.json())
            .then((data) =>{
                setHangs(data)
                console.log(data)
            })
    },[])

    return(
        <>
        <nav id='nav'>
            <ul className='nav__list'>
                <li className='nav-item'><Link to="/">Trang chủ</Link></li>
                <li className='nav-item'>
                    <a>Hãng <FaAngleDown></FaAngleDown></a>
                    <ul className='subnav'>
                        {hangs.map((hang, index) => (
                            <li className='subnav-item'key={index}>
                                <Link to={`/brand/${hang.mahang}`}>{hang.tenhang}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='nav-item'><a>Liên hệ</a></li>
                <li className='nav-item'><a>Giới thiệu</a></li>
                <li className='nav-item'>
                    <a>Khác <FaAngleDown></FaAngleDown></a>
                    <ul className='subnav'>
                        <li className='subnav-item'><a href=''>Hướng dẫn thanh toán</a></li>
                        <li className='subnav-item'><a href=''>Chính sách bảo hành</a></li>
                        <li className='subnav-item'><a href=''>Chính sách vận chuyển</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar