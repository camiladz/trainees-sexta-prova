import classNames from "classnames"
import { useMinicart } from "../../hooks/useMinicart"
import { CartItem } from "../cart-item"
import './style.css'
import { useMemo } from "react"


export const Minicart = () => {

    const { minicartOpen, minicartProducts, closeMinicart } = useMinicart()

    const itemsSubtotal = useMemo(() => {
        const subtotal = minicartProducts.reduce((prevTotal, currItem) => {
            return prevTotal + currItem.price
        }, 0)

        return subtotal
    }, [minicartProducts])

    return <div className={classNames('minicart', { 'minicart--open': minicartOpen })}>
        <div className="minicartHeader">
            <h1>Minhas compras</h1>
            <button className="minicartCloseButton" onClick={closeMinicart}>
                <svg className="minicartCloseIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1667 5.83331L5.83337 14.1666M5.83337 5.83331L14.1667 14.1666" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        {minicartProducts.map((product) => {
            return (<>
                <CartItem product={product} />
            </>)
        })}
        <div className="minicartFooter">
            <div className="minicartSubtotal">
                <span className="minicartSubtotalHeading">Subtotal</span>
                <span className="minicartSubtotalValue">{itemsSubtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <button className="minicartCheckout">Ir para o carrinho</button>
        </div>
    </div>
}