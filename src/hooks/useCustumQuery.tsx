import { DatabaseQuery, DatabaseQueryResponse } from "@interfaces/Database";
import { useState } from "react";
import { executeQuery } from '@services/databases/queries';


export const useCustomQuery = () => {
    const [data, setData] = useState<DatabaseQueryResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [page, setPage] = useState<number>(1);
    const per_page = 25; // Default items per page, can be adjusted as needed
    const [querySelected, setQuerySelected] = useState<string>("");
    const [database, setDatabase] = useState<string>("");


    const runQuery = async (query?:string | null, database?: string| null) => {
        setIsLoading(true);
        setError(null);

        // Reset data if query or database changes
        setQuerySelected(query || "");
        setDatabase(database || "");

        try {
            if( !querySelected || !database) {
                return
            }
            const paginatedQuery:DatabaseQuery = {
                query: querySelected,
                database,
                page: page,
                per_page: per_page
            };
            
            const result = await executeQuery(paginatedQuery);
            setData(result);
            return result;
        } catch (err) {
            setError(err as Error);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const nextPage = async () => {
        if (data && data.result.pagination.page < data.result.pagination.total_pages) {
            setPage(prevPage => prevPage + 1);
            await runQuery(querySelected, database);
        }
    }

    const previousPage = async () => {
        if (data && data.result.pagination.page > 1) {
            setPage(prevPage => prevPage - 1);
            await runQuery(querySelected, database);
        }
    }

    return {
        data,
        isLoading,
        error,
        runQuery,
        page,
        setPage,
        setQuerySelected,
        nextPage,
        previousPage,
    };
};