/* import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePaginatedRequest = (fetchFunction: ({ page, perPage }: { page: number, perPage: number }) => Promise<any>) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(25);
    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            await fetchFunction({ page, perPage });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const nextPage = async () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
            await fetchData();
        }
    }
    const previousPage = async () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
            await fetchData();
        }
    }
    return {
        page,
        perPage,
        setPerPage,
        totalRecords,
        totalPages,
        nextPage,
        previousPage,
        setTotalRecords,
        setTotalPages,
    }
} */