export interface DatabaseItem{
    name: string;
    description: string;
}

export interface DatabaseResponse{
    databases: DatabaseItem[];
}



export interface DatabaseQuery{
    database: string;
    query: string;
    page: number;
    per_page: number;
}


export interface databaseQueryPredefinedItem{
    description: string;
    key: string;
}

export interface DatabaseQueryPredefined{
    queries: databaseQueryPredefinedItem[];

}


export interface DatabaseRequestPredefined{
    databse: string;
    page: number;
    per_page: number;
}

export interface DatabaseQueryResponsePredefined{
    success: boolean;
    result:{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any[];
        pagination:{
            page: number;
            per_page: number;
            total_records: number;
            total_pages: number;
        }
    }
}