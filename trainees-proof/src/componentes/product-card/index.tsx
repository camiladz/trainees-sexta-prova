import { ChangeEvent, useState } from "react"
import { CatalogProduct } from "../../types/catalog-product"
import { useMinicart } from "../../hooks/useMinicart"
import { DEFAULT_QUANTITY_SELECTOR_OPTIONS } from "../../constants"
import './styles.css'

type Props = {
    product: CatalogProduct
}
export const ProductCard = ({ product }: Props) => {
    const { addToCart } = useMinicart()
    const [selectedOption, setSelectedOption] = useState(1)

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(Number(event.target.value));
    };

    const handleAddToCart = () => {
        addToCart(product, selectedOption)
    }
    return <>
        <div className="productSummary">
            <img src={product.imageUrl} />
            <div className="productNameContent">
                <span className="productName">
                    {product.name}
                </span>
            </div>
            <div className="productPriceContent">
                {product.listPrice > product.price && (
                    <span className="productListPrice">
                        {product.listPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                )}
                <span className="productPrice">
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <span className="productPromotion">
                    Compre 2 leve 3!
                </span>
            </div>
            <div className="productQuantity">
                <span className="quantityText">
                    Selecione o peso
                </span>
                <select className="gramDropdown" value={selectedOption} onChange={handleOptionChange}>
                    <option value="">Escolha {product.isWeighable ? 'o peso' : 'a quantidade'}</option>
                    {
                        DEFAULT_QUANTITY_SELECTOR_OPTIONS.map((option) => {
                            const label = product.isWeighable ? `${option.value * product.unitWeight!}g` : option.label

                            return <option key={option.value} value={option.value}>{label}</option>
                        })
                    }
                </select>
            </div>
            <button className="addToCartButton" onClick={handleAddToCart}>
                Adicionar
            </button>
        </div>
    </>
}