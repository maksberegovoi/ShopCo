import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth } from '../../redux/features/user/selectors/selectors.js'
import {
    useAddCartItemMutation,
    useCartPreviewQuery,
    useDeleteCartItemMutation,
    useGetCartQuery,
    useUpdateCartItemQuantityMutation
} from '../../api/cart/cartAPI.js'
import { getLocalCartItems } from '../../redux/features/cart/selectors/cartSelectors.js'
import {
    addToCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart
} from '../../redux/features/cart/slice/cartSlice.js'
import toast from 'react-hot-toast'
import { isDev } from '../../utils/consts.js'

const EMPTY_CART = {
    items: [],
    summary: {
        subTotal: 0,
        total: 0,
        totalDiscount: 0,
        deliveryFee: 0
    }
}

export const useCart = () => {
    const dispatch = useDispatch()
    const localItems = useSelector(getLocalCartItems)
    const isAuth = useSelector(getIsAuth)

    const [updateCartItemQuantity] = useUpdateCartItemQuantityMutation()
    const [addCartItem] = useAddCartItemMutation()
    const [deleteCartItem] = useDeleteCartItemMutation()
    const {
        data: notAuthData,
        isLoading: isNotAuthDataLoading,
        isError: isNotAuthDataError,
        error: notAuthDataError
    } = useCartPreviewQuery({ items: localItems }, { skip: isAuth })

    const {
        data: authData,
        isLoading: isAuthDataLoading,
        isError: isAuthDataError,
        error: authDataError
    } = useGetCartQuery(undefined, {
        skip: !isAuth
    })

    const cartItems = isAuth
        ? (authData?.items ?? [])
        : (notAuthData?.items ?? [])
    const cart = isAuth ? authData : notAuthData

    const addToCartHandler = async ({ productVariantId, quantity }) => {
        if (isAuth) {
            try {
                await addCartItem({ productVariantId, quantity }).unwrap()
                toast.success('Added to cart')
            } catch (err) {
                if (isDev) {
                    console.log(err)
                }
                toast.error('Something went wrong')
                throw err
            }
        } else {
            dispatch(addToCart({ productVariantId, quantity }))
            toast.success('Added to cart')
        }
    }

    const removeFromCartHandler = (cartItemId, productVariantId) => {
        if (isAuth) {
            deleteCartItem(cartItemId)
        } else {
            dispatch(removeFromCart(productVariantId))
        }
    }

    const increment = (cartItemId, productVariantId, currQuantity) => {
        if (isAuth) {
            updateCartItemQuantity({
                id: cartItemId,
                quantity: currQuantity + 1
            })
        } else {
            dispatch(incrementQuantity(productVariantId))
        }
    }

    const decrement = (cartItemId, productVariantId, currQuantity) => {
        if (isAuth) {
            updateCartItemQuantity({
                id: cartItemId,
                quantity: currQuantity - 1
            })
        } else {
            dispatch(decrementQuantity(productVariantId))
        }
    }

    return {
        cart: cart ?? EMPTY_CART,
        cartItems,
        decrement,
        increment,
        addToCartHandler,
        removeFromCartHandler,
        isLoading: isAuth ? isAuthDataLoading : isNotAuthDataLoading,
        isError: isAuth ? isAuthDataError : isNotAuthDataError,
        error: isAuth ? authDataError : notAuthDataError
    }
}
