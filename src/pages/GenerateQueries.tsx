import { Listable, ListableDatabase } from "@components/List";
import { useState } from "react";
import { DatabaseItem } from "@interfaces/Database";
import { InputQuery } from "@components/Inputs";
import { DataPaginatedCard } from "@components/Card";

const GenerateQueriesPage = () => {
    const [databaseSelected, setDatabaseSelected] = useState<DatabaseItem| null>(null);
    const [query, setQuery] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold my-4">Pagina para generar consultas a una base de datos seleccionada</h1>
            <p className="text-gray-700 my-2">Seleccione una base de datos para la consulta</p>
            <Listable>
                <ListableDatabase selectedState={databaseSelected} onChange={setDatabaseSelected}/>
            </Listable>

            <InputQuery query={query} setQuery={setQuery} error={error} setError={setError}/>
            
            
            
            {databaseSelected && (
                <DataPaginatedCard database={databaseSelected.name} query={query}/>
            )}
        </div>
    );
}


export default GenerateQueriesPage;