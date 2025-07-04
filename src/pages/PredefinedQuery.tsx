import { executePredefinedQuery } from "@services/databases/queries";
import { useState } from "react";
import { useLocation } from "react-router";
import { Listable, ListableDatabase } from "@components/List";
import { DatabaseItem } from "@interfaces/Database";

const PredefinedQuery = () => {
    const location = useLocation();
    const queryKey = location.pathname.split("/").pop();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [queryResult, setQueryResult] = useState<any>(null);
    const [page, setPage] = useState(1);
    const perPage = 10; // Número de registros por página
    const [totalPages, setTotalPages] = useState(0); // Nuevo estado para el total de páginas
    const [loading, setLoading] = useState(false);
    const [databaseSelected, setDatabaseSelected] = useState<DatabaseItem|null>(null);

    const handleExecuteQuery = async () => {
        try {
            setLoading(true);
            if (!queryKey || !databaseSelected) {
                console.error("Query key is not defined");
                return;
            }
            const result = await executePredefinedQuery(queryKey, databaseSelected?.name, page, perPage);
            setQueryResult(result);
            // Asumiendo que el resultado incluye el total de registros en result.total
            if (result.result.pagination.total_pages) {
                setTotalPages(result.result.pagination.total_pages);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Predefined Query Page</h1>
            <Listable>
                <ListableDatabase selectedState={databaseSelected} onChange={setDatabaseSelected} />
            </Listable>
            <div className="mb-4">
                <button
                    onClick={handleExecuteQuery}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? 'Executing...' : 'Execute Query'}
                </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
                <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                    disabled={page <= 1}
                >
                    Previous
                </button>

                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={page}
                        onChange={(e) => setPage(Number(e.target.value))}
                        className="border p-2 w-20"
                        placeholder="Page"
                        min="1"
                        max={totalPages}
                    />
                    <span>of {totalPages}</span>
                    
                </div>

                <button
                    onClick={() => setPage(page + 1)}
                    className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                    disabled={totalPages > 0 && page >= totalPages}
                >
                    Next
                </button>
            </div>

            {queryResult && (
                <pre className="bg-gray-100 p-4 rounded overflow-auto">
                    {JSON.stringify(queryResult, null, 2)}
                </pre>
            )}
        </div>
    );
}

export default PredefinedQuery;