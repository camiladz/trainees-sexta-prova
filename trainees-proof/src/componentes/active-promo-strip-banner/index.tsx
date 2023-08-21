import "./styles.css"

export const ActivePromoStripBanner = () => {
    return <div className='activePromoStripBanner'>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00002 7.50008H8.00835M13 12.5001H13.0084M13.8334 6.66675L7.16669 13.3334M18.8334 10.0001C18.8334 14.6025 15.1024 18.3334 10.5 18.3334C5.89765 18.3334 2.16669 14.6025 2.16669 10.0001C2.16669 5.39771 5.89765 1.66675 10.5 1.66675C15.1024 1.66675 18.8334 5.39771 18.8334 10.0001ZM8.41669 7.50008C8.41669 7.7302 8.23014 7.91675 8.00002 7.91675C7.7699 7.91675 7.58335 7.7302 7.58335 7.50008C7.58335 7.26996 7.7699 7.08341 8.00002 7.08341C8.23014 7.08341 8.41669 7.26996 8.41669 7.50008ZM13.4167 12.5001C13.4167 12.7302 13.2301 12.9167 13 12.9167C12.7699 12.9167 12.5834 12.7302 12.5834 12.5001C12.5834 12.27 12.7699 12.0834 13 12.0834C13.2301 12.0834 13.4167 12.27 13.4167 12.5001Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {/* Necessária uma API para pegar infos da promoção ativada como valor do desconto */}
        <span>Parabéns, você ativou descontos de 10% em todos os produtos do site!</span>
    </div>
}