import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useBookInfo = () => {
    const { user, loading } = useContext(AuthContext);

    const { refetch, data: bookInfo = [] } = useQuery({
        queryKey: ["bookingInfo", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_BASE_URL}/bookingInfo?email=${user?.email}`);
            console.log("res from axios bookingInfo", res);

            return res.data;
        },
    });

    return [bookInfo, refetch];
};
export default useBookInfo;