import { CatalogProduct } from '../../types/catalog-product'
import { ProductCard } from '../product-card'
import './styles.css'

type Props = {
    products: CatalogProduct[]
}
export const Shelf = ({ products }: Props) => {
    return <div className='productCardContent'>
        <div className="productCardShelf">
            <div className="productCardLeftArrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {products.map((product) => {
                return <>
                    <ProductCard product={product} />
                </>
            })}
            <div className="productCardRightArrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <div className="shelfDots">
            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#2563EB" />
                <circle cx="20" cy="4" r="4" fill="#CBD5E1" />
                <circle cx="36" cy="4" r="4" fill="#CBD5E1" />
                <circle cx="52" cy="4" r="4" fill="#CBD5E1" />
            </svg>
        </div>
    </div>
}