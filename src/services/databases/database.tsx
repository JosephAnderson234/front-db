import { DatabaseResponse } from "@interfaces/Database"
import Api from "@services/Api"

export const getListDatabase = async () => {
    const api = await Api.getInstance()

    try{
        const response = await api.get<null, DatabaseResponse>({url:'/databases'})
        return response.data
    } catch (error) {
        console.error("Error fetching databases:", error)
        throw error
    }
}