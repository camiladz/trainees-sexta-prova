import { promoShelfMock, defaultShelfMock } from "../../mocks";

export function getShelfProducts(hasAgePromo: boolean) {
    if (hasAgePromo) return promoShelfMock;

    return defaultShelfMock;
}