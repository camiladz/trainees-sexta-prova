import { ActivePromoStripBanner } from "../componentes/active-promo-strip-banner"
import { AgeModal } from "../componentes/age-modal"
import { BannerFull } from "../componentes/bannerFull"
import { BenefitsBar } from "../componentes/benefits-bar"
import { Footer } from "../componentes/footer"
import { Header } from "../componentes/header"
import { Minicart } from "../componentes/minicart"
import { Shelf } from "../componentes/shelf"
import { useAgeModal } from "../hooks/useAgeModal"
import { getShelfProducts } from "../services"

export const HomePage = () => {
    const { userHasAgePromotion } = useAgeModal()
    const products = getShelfProducts(userHasAgePromotion)
    return <>
        <Header />
        {userHasAgePromotion && <ActivePromoStripBanner />}
        <Minicart />
        <AgeModal />
        <BannerFull />
        <BenefitsBar />
        <Shelf products={products} />
        <Footer />
    </>
}