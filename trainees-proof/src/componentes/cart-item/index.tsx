import { ChangeEvent } from "react"
import { DEFAULT_QUANTITY_SELECTOR_OPTIONS } from "../../constants"
import { CartProduct } from "../../types/cart-product"
import { useMinicart } from "../../hooks/useMinicart"
import './styles.css'

type Props = {
    product: CartProduct
}

export const CartItem = ({ product }: Props) => {
    const { updateProductQuantity, closeMinicart } = useMinicart()

    const handleUpdateProductQuantity = (ev: ChangeEvent<HTMLSelectElement>) => {
        updateProductQuantity(product.id, Number(ev.target.value))
    }

    return <>
        <div className="minicartProductContent">
            <img src={product.imageUrl} alt="Product Image" className="productCartImage" />
            <div className="productInfoContent">
                <div className="minicartProductImageandName">
                    <div className="productNameBrand">
                        <div className="productCartBrand">
                            {product.brand}
                        </div>
                        <div className="productCartName">
                            {product.name}
                        </div>
                    </div>
                </div>
                <div className="productCartPriceAndQuantity">
                    <span className="productCartPrice">
                        {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <select className="quantityDropdown" value={product.quantity} onChange={handleUpdateProductQuantity}>
                        {
                            DEFAULT_QUANTITY_SELECTOR_OPTIONS.map((option) => {
                                return <option key={option.value} value={option.value}>{option.label}</option>
                            })
                        }
                    </select>
                    <button className="TrashCloseMinicartIcon" onClick={closeMinicart}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="#0F172A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </>
}