import './Slider.css'
import slider from '../../assets/images/mountains-1412683.png'
import {FaAngleLeft, FaAngleRight} from "react-icons/fa"

function Slider(){
    return(
        <>
        <section id='slider'>
            <div className='slider__img'>
                <div className='icon prev'><FaAngleLeft/></div>
                <div>
                    <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/s22%20new.png"alt=''></img>
                </div>
                <div className='icon next'><FaAngleRight/></div>
                <div className='slider__img-text'>
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Slider