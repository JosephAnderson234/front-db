import { DatabaseResponse } from "@interfaces/Database";
import { useDatabaseListStore } from "@utils/useDatabaseListStore";
import { getListDatabase } from "@services/databases/database";
import { useEffect } from "react";

export const useDatabaseList = () => {
    const { databases, setDatabases, clearDatabases } = useDatabaseListStore();
    
    const updateDatabases = (newDatabases: DatabaseResponse) => {
        setDatabases(newDatabases);
    };
    
    const resetDatabases = () => {
        clearDatabases();
    };

    useEffect(()=>{
        if(databases) return;
        getListDatabase()
            .then((response) => {
                setDatabases(response);
            })
            .catch((error) => {
                console.error("Error fetching databases:", error);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return {
        databases,
        updateDatabases,
        resetDatabases,
    };
}