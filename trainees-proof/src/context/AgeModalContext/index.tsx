import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { AGE_PROMO_MINIMUM_AGE, USER_BIRTH_DATE_LOCALSTORAGE_KEY } from "../../constants";

type AgeModalContextType = {
    userBirthDate: number | undefined
    updateUserBirthDate: (birthDate: number) => void
    userHasAgePromotion: boolean,
    openModal: boolean,
    closeModal: () => void
}

type Props = {
    children: ReactNode,
}

export const AgeModalContext = createContext({} as AgeModalContextType)

export const AgeModalContextProvider = ({ children }: Props) => {
    const [userBirthDate, setUserBirthDate] = useState(() => Number(window.localStorage.getItem(USER_BIRTH_DATE_LOCALSTORAGE_KEY)) || undefined)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (!userBirthDate) setOpenModal(true)
    }, [userBirthDate])

    // Necessária uma API para aplicação a promoção
    const userHasAgePromotion = useMemo(() => {
        if (!userBirthDate) return false

        // Necessária uma API para obter detalhes sobre a promoção como idade mínima
        const ageLimitDate = new Date()
        ageLimitDate.setFullYear(ageLimitDate.getFullYear() - AGE_PROMO_MINIMUM_AGE)

        const hasAgePromotion = userBirthDate <= ageLimitDate.getTime()

        return hasAgePromotion
    }, [userBirthDate])

    // Necessária uma API para cadastro de informações do usuário como data de nascimento
    const updateUserBirthDate = (birthDate: number) => {
        setUserBirthDate(birthDate)
        window.localStorage.setItem(USER_BIRTH_DATE_LOCALSTORAGE_KEY, String(birthDate))
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return <AgeModalContext.Provider value={{ openModal, closeModal, userBirthDate, updateUserBirthDate, userHasAgePromotion }}>
        {children}
    </AgeModalContext.Provider>
}