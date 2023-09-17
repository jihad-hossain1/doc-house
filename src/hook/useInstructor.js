import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/instructor/${user?.email}`)
            // console.log('from instructor response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}