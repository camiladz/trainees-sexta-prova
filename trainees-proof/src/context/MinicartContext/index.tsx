
import { ReactNode, createContext, useState } from "react"

import { CartProduct } from "../../types/cart-product"
import { CatalogProduct } from "../../types/catalog-product"

type MinicartContextType = {
    minicartProducts: CartProduct[],
    addToCart: (product: CatalogProduct, quantity: number) => void,
    removeFromCart: (productId: number) => void,
    updateProductQuantity: (productId: number, quantity: number) => void,
    minicartOpen: boolean,
    openMinicart: () => void,
    closeMinicart: () => void
}

type Props = {
    children: ReactNode
}

export const MinicartContext = createContext({} as MinicartContextType)

export const MinicartContextProvider = ({ children }: Props) => {

    const [minicartOpen, setMinicartOpen] = useState<MinicartContextType['minicartOpen']>(false)
    const [minicartProducts, setMinicartProducts] = useState<MinicartContextType['minicartProducts']>([])

    const updateCartProducts = (product: CartProduct) => {
        const productInMinicart = minicartProducts.find((cartProduct) => {
            return cartProduct.id === product.id
        })
        if (productInMinicart) {
            const updatedProduct = { ...productInMinicart, quantity: productInMinicart.quantity + product.quantity }
            const filteredProducts = minicartProducts.filter((cartProduct) => cartProduct.id !== product.id)
            setMinicartProducts([...filteredProducts, updatedProduct])
        } else {
            setMinicartProducts([...minicartProducts, product])
        }
    }

    const addToCart = (catalogProduct: CatalogProduct, quantity: number) => {
        // Necessária uma API para adicionar o produto ao carrinho no servidor

        updateCartProducts({
            ...catalogProduct,
            quantity
        })

        openMinicart()
    }

    const removeFromCart = (productId: number) => {
        // Necessária uma API para remover o produto do carrinho no servidor

        const filteredProducts = minicartProducts.filter((product) => product.id !== productId)
        setMinicartProducts(filteredProducts)
    }

    const updateProductQuantity = (productId: number, quantity: number) => {
        // Necessária uma API para atualizar o produto do carrinho no servidor

        const productInMinicart = minicartProducts.find((cartProduct) => {
            return cartProduct.id === productId
        })

        if (!productInMinicart) return

        const updatedProduct = { ...productInMinicart, quantity }
        const filteredProducts = minicartProducts.filter((cartProduct) => cartProduct.id !== productId)
        setMinicartProducts([...filteredProducts, updatedProduct])
    }

    const openMinicart = () => {
        setMinicartOpen(true)
    }

    const closeMinicart = () => {
        setMinicartOpen(false)
    }

    return <MinicartContext.Provider value={{
        removeFromCart, addToCart, updateProductQuantity, minicartProducts, minicartOpen, openMinicart, closeMinicart
    }}>
        {children}
    </MinicartContext.Provider>
}