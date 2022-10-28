import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuatity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.maloai === action.payload.maloai
            )

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("Tăng số lượng thành công!", {
                    position: "top-right"
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success("Thêm sản phẩm vào giỏ hàng thành công!", {
                    position: "top-right"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action){
            const nextCartItem = state.cartItems.filter(
                cartItem => cartItem.maloai !== action.payload.maloai
            )

            state.cartItems = nextCartItem

            toast.error("Xóa sản phẩm khỏi giỏ hàng thành công!", {
                position: "top-right"
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        decreaseCartItem(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.maloai === action.payload.maloai
            )

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.info("Giảm số lượng thành công!", {
                    position: "top-right"
                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItem = state.cartItems.filter(
                    cartItem => cartItem.maloai !== action.payload.maloai
                )
    
                state.cartItems = nextCartItem
    
                toast.error("Xóa sản phẩm khỏi giỏ hàng thành công!", {
                    position: "top-right"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        getTotals(state, action){
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { thayDoiGiasLSP, cartQuantity} = cartItem
                    const itemTotal = thayDoiGiasLSP[0].giamoi * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity = state.cartItems.length

                    return cartTotal
                },{
                    total: 0,
                    quantity: 0
                }
            )

            state.cartTotalQuatity = quantity
            state.cartTotalAmount = total
            
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart(state, action){
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    decreaseCartItem,
    getTotals,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer