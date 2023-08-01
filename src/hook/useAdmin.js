import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/admin/${user?.email}`)
            console.log('from admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}