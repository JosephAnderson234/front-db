import { useCustomQuery } from "@hooks/useCustumQuery"

interface DataPaginatedCardProps {
    database: string;
    query: string;
}

export const DataPaginatedCard = (props: DataPaginatedCardProps) => {
    const { data, isLoading, error, nextPage, previousPage, runQuery } = useCustomQuery();

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={() => runQuery(props.query, props.database)}>
                Generate Query
            </button>
            <div className="border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Data Paginated Card</h2>
            </div>
            <div className="space-y-4">
                {isLoading && <p className="text-gray-600">Loading...</p>}
                {error && <p className="text-red-500">Error: {error.message}</p>}
                {data && (
                    <div className="space-y-4">
                        <pre className="bg-gray-50 p-4 rounded-md overflow-auto max-h-96">
                            {JSON.stringify(data.result.data, null, 2)}
                        </pre>
                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={previousPage}
                                disabled={data.result.pagination.page <= 1}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            <span className="text-gray-600">
                                Page {data.result.pagination.page} of {data.result.pagination.total_pages}
                            </span>
                            <button
                                onClick={nextPage}
                                disabled={data.result.pagination.page >= data.result.pagination.total_pages}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}