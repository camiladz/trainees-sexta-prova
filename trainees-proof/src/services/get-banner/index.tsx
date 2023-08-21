import { bannersMock } from '../../mocks'

export function getBanner(hasAgePromo: boolean) {
    if (hasAgePromo) return bannersMock.agePromo

    return bannersMock.default
}