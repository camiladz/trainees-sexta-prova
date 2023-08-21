import { useAgeModal } from '../../hooks'
import { getBanner } from '../../services'
import "./styles.css"

export const BannerFull = () => {

    const { userHasAgePromotion } = useAgeModal()

    const banner = getBanner(userHasAgePromotion)

    return <div className='bannerFullContent'>
        <img src={banner} className='bannerFull' />
        <div className="leftArrow">
            <svg className='leftArrowIcon' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_222_2870)">
                    <path d="M0 22C0 9.84974 9.84974 0 22 0V0C34.1503 0 44 9.84974 44 22V22C44 34.1503 34.1503 44 22 44V44C9.84974 44 0 34.1503 0 22V22Z" fill="white" fill-opacity="0.75" />
                    <path d="M24 28L18 22L24 16" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_b_222_2870" x="-4" y="-4" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_222_2870" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_222_2870" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
        <div className="rightArrow">
            <svg className='rightArrowIcon' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_222_2871)">
                    <path d="M0 22C0 9.84974 9.84974 0 22 0V0C34.1503 0 44 9.84974 44 22V22C44 34.1503 34.1503 44 22 44V44C9.84974 44 0 34.1503 0 22V22Z" fill="white" fill-opacity="0.75" />
                    <path d="M20 28L26 22L20 16" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_b_222_2871" x="-4" y="-4" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_222_2871" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_222_2871" result="shape" />
                    </filter>
                </defs>
            </svg>

        </div>
        <div className="bannerDotsContent">
            <svg className='bannerDots' width="72" height="16" viewBox="0 0 72 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8C72 12.4183 68.4183 16 64 16H8C3.58172 16 0 12.4183 0 8Z" fill="white" />
                <circle cx="12" cy="8" r="4" fill="#2563EB" />
                <circle cx="28" cy="8" r="4" fill="#CBD5E1" />
                <circle cx="44" cy="8" r="4" fill="#CBD5E1" />
                <circle cx="60" cy="8" r="4" fill="#CBD5E1" />
            </svg>

        </div>
    </div>
}