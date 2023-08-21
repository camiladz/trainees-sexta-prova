import "./styles.css"

export const BenefitsBar = () => {

    return <div className="benefitsBarContent">
        <div className="benefitDiscount">
            <svg className="benefitDiscountIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66675 6.66663H6.67508M1.66675 4.33329L1.66675 8.06205C1.66675 8.46971 1.66675 8.67353 1.7128 8.86534C1.75363 9.03541 1.82097 9.19798 1.91235 9.3471C2.01542 9.51529 2.15954 9.65942 2.4478 9.94767L8.83832 16.3382C9.82836 17.3282 10.3234 17.8233 10.8942 18.0087C11.3963 18.1719 11.9372 18.1719 12.4393 18.0087C13.0101 17.8233 13.5051 17.3282 14.4952 16.3382L16.3383 14.4951C17.3284 13.505 17.8234 13.01 18.0089 12.4392C18.172 11.9371 18.172 11.3962 18.0089 10.8941C17.8234 10.3233 17.3284 9.82824 16.3383 8.8382L9.94779 2.44767C9.65954 2.15942 9.51541 2.0153 9.34722 1.91223C9.1981 1.82084 9.03553 1.7535 8.86547 1.71268C8.67365 1.66663 8.46983 1.66663 8.06218 1.66663L4.33341 1.66663C3.39999 1.66663 2.93328 1.66663 2.57676 1.84828C2.26316 2.00807 2.00819 2.26304 1.8484 2.57664C1.66675 2.93316 1.66675 3.39987 1.66675 4.33329ZM7.08342 6.66663C7.08342 6.89674 6.89687 7.08329 6.66675 7.08329C6.43663 7.08329 6.25008 6.89674 6.25008 6.66663C6.25008 6.43651 6.43663 6.24996 6.66675 6.24996C6.89687 6.24996 7.08342 6.43651 7.08342 6.66663Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="discountText">
                Descontos todos os dias!
            </span>
        </div>
        <div className="benefitVariety">
            <svg className="benefitVarietyicon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.069 2.8778C10.2611 2.48869 10.3571 2.29413 10.4875 2.23197C10.601 2.17789 10.7327 2.17789 10.8462 2.23197C10.9765 2.29413 11.0726 2.48869 11.2646 2.8778L13.0869 6.56944C13.1436 6.68432 13.1719 6.74176 13.2134 6.78635C13.2501 6.82584 13.2941 6.85783 13.3429 6.88056C13.3981 6.90623 13.4615 6.91549 13.5883 6.93402L17.6643 7.5298C18.0935 7.59253 18.3082 7.6239 18.4075 7.72874C18.4939 7.81995 18.5345 7.94529 18.5181 8.06985C18.4992 8.21302 18.3438 8.36436 18.0331 8.66702L15.0847 11.5387C14.9928 11.6282 14.9468 11.673 14.9172 11.7263C14.8909 11.7734 14.8741 11.8252 14.8676 11.8788C14.8603 11.9393 14.8711 12.0025 14.8928 12.129L15.5885 16.1851C15.6618 16.6129 15.6985 16.8269 15.6296 16.9538C15.5696 17.0642 15.463 17.1417 15.3394 17.1646C15.1973 17.1909 15.0053 17.0899 14.6211 16.8879L10.9771 14.9716C10.8636 14.9119 10.8068 14.882 10.747 14.8703C10.6941 14.8599 10.6396 14.8599 10.5867 14.8703C10.5268 14.882 10.4701 14.9119 10.3565 14.9716L6.7126 16.8879C6.32843 17.0899 6.13634 17.1909 5.99431 17.1646C5.87073 17.1417 5.7641 17.0642 5.70411 16.9538C5.63516 16.8269 5.67185 16.6129 5.74522 16.1851L6.4409 12.129C6.46259 12.0025 6.47343 11.9393 6.4661 11.8788C6.4596 11.8252 6.44276 11.7734 6.4165 11.7263C6.38685 11.673 6.34089 11.6282 6.24898 11.5387L3.30063 8.66702C2.98988 8.36436 2.83451 8.21302 2.8156 8.06985C2.79915 7.94529 2.83979 7.81995 2.9262 7.72874C3.02553 7.6239 3.24014 7.59253 3.66937 7.5298L7.74542 6.93402C7.87218 6.91549 7.93556 6.90623 7.99076 6.88056C8.03963 6.85783 8.08363 6.82584 8.12032 6.78635C8.16175 6.74176 8.1901 6.68432 8.24681 6.56944L10.069 2.8778Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="varietyText">
                Maior variedade de produtos frescos e naturais
            </span>
        </div>
        <div className="benefitShipping">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1666 1.66663L3.74443 10.5732C3.45376 10.922 3.30842 11.0964 3.3062 11.2437C3.30427 11.3717 3.36133 11.4935 3.46093 11.574C3.57551 11.6666 3.80253 11.6666 4.25658 11.6666H10.3332L9.49989 18.3333L16.922 9.42675C17.2127 9.07794 17.358 8.90354 17.3602 8.75624C17.3622 8.62819 17.3051 8.50637 17.2055 8.42588C17.0909 8.33329 16.8639 8.33329 16.4099 8.33329H10.3332L11.1666 1.66663Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="shippingText">
                Entrega rápida para a grande São Paulo
            </span>
        </div>
        <div className="benefitPayment">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3334 8.33329H1.66675M9.16675 11.6666H5.00008M1.66675 6.83329L1.66675 13.1666C1.66675 14.1 1.66675 14.5668 1.8484 14.9233C2.00819 15.2369 2.26316 15.4918 2.57676 15.6516C2.93328 15.8333 3.39999 15.8333 4.33341 15.8333L15.6667 15.8333C16.6002 15.8333 17.0669 15.8333 17.4234 15.6516C17.737 15.4918 17.992 15.2369 18.1518 14.9233C18.3334 14.5668 18.3334 14.1 18.3334 13.1666V6.83329C18.3334 5.89987 18.3334 5.43316 18.1518 5.07664C17.992 4.76304 17.737 4.50807 17.4234 4.34828C17.0669 4.16663 16.6002 4.16663 15.6667 4.16663L4.33342 4.16663C3.39999 4.16663 2.93328 4.16663 2.57676 4.34828C2.26316 4.50807 2.00819 4.76304 1.8484 5.07664C1.66675 5.43316 1.66675 5.89987 1.66675 6.83329Z" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="paymentText">
                Pagamento seguro no PIX ou Cartão
            </span>
        </div>
    </div>
}