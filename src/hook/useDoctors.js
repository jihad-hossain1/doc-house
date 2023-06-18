import { useQuery } from "@tanstack/react-query";

const useDoctors = () => {
    const {
        data: doctors = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/doctors`);
            return res.json();
        },
    });

    return [doctors, loading, refetch];
};

export default useDoctors;