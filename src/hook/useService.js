import { useQuery } from "@tanstack/react-query";

const useService = () => {
    const {
        data: services = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["service"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/service`);
            return res.json();
        },
    });

    return [services, loading, refetch];
};

export default useService;