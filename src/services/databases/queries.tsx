import { DatabaseQuery, DatabaseQueryPredefined, DatabaseQueryResponse, DatabaseRequestPredefined } from "@interfaces/Database"
import Api from "@services/Api"


export const executeQuery = async (data: DatabaseQuery) => {
    const api = await Api.getInstance()

    try {
        const response = await api.post<DatabaseQuery, DatabaseQueryResponse>(
            data, 
            {
            url: '/query',})
        return response.data
    } catch (error) {
        console.error("Error executing query:", error)
        throw error
    }
}


export const getListPredefinedQueries = async () => {
    const api = await Api.getInstance()
    try {
        const response = await api.get<null, DatabaseQueryPredefined>({url:"/predefined-queries"})
        return response.data
    } catch (error) {
        console.error("Error fetching predefined queries:", error)
        throw error
    }
}

export const executePredefinedQuery = async (queryKey: string, database: string, page: number, per_page: number) => {
    const api = await Api.getInstance()
    try {
        const data: DatabaseRequestPredefined = {
            database,
            page, // Default to the first page
            per_page, // Default number of records per page
        }
        const response = await api.post<DatabaseRequestPredefined, DatabaseQueryResponse>(data, {
            url: `/predefined-query/${queryKey}`,
        })
        return response.data
    } catch (error) {
        console.error("Error executing predefined query:", error)
        throw error
    }
}