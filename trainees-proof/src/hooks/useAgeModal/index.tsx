import { useContext } from "react"
import { AgeModalContext } from "../../context/AgeModalContext"

export const useAgeModal = () => {
    const value = useContext(AgeModalContext)
    return value
}