import { useEffect, useState } from "react"
import style from "./Modal.module.css"

function ModalProduct(props) {
    const {hide} = props
    let modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }

    // const [productImg, setProductImg] = useState()

    // useEffect(() => {
    //     return () => {
    //         productImg && URL.revokeObjectURL(productImg.preview)
    //     }
    // }, [productImg])

    // const handlePreviewImg = (e) =>{
    //     const file = e.target.files[0]
    //     file.preview  = URL.createObjectURL(file)
    //     setProductImg(file)
    //     console.log(file)
    // }

    return (
        <>
            <div className={style["modal"]} style={modalStyle}>
                
            </div>
        </>
    )
}

export default ModalProduct