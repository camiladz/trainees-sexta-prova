import { MinicartContext } from "../../context/MinicartContext/index"
import { useContext } from 'react'

export const useMinicart = () => {
    const value = useContext(MinicartContext)
    return value
}