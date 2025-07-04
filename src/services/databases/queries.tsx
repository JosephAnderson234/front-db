import { DatabaseQuery, DatabaseQueryPredefined, DatabaseQueryResponse } from "@interfaces/Database"
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