import './Content.css'
import ContentItem from "../ContentItem/ContentItem"
import productImg from '../../assets/images/samsung-galaxy-s22-ultra-1-1.jpg'
import {FaStar} from 'react-icons/fa'


function Content(props){
    const listContent = ["Bán chạy", "Khuyến mãi", "Sản phẩm mới"]

    return(
        <div id='content'>
        <ContentItem title={listContent[0]}/>
        <ContentItem title={listContent[1]}/>
        <ContentItem title={listContent[2]}/>
        </div>
    )
}

export default Content