import { useEffect } from "react";
import { useQueryPredefinedListStore } from "@utils/useQueyPredefinedList";
import { getListPredefinedQueries } from "@services/databases/queries";
import { DatabaseQueryPredefined } from "@interfaces/Database";
export const usePredefinedQueries = () => {
    const { queries, setQueries, clearQueries } = useQueryPredefinedListStore();

    const updateQueries = (newQueries: DatabaseQueryPredefined) => {
        setQueries(newQueries);
    };

    const resetQueries = () => {
        clearQueries();
    };

    useEffect(() => {
        if (queries) return;
        getListPredefinedQueries()
            .then((response) => {
                setQueries(response);
            })
            .catch((error) => {
                console.error("Error fetching predefined queries:", error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        queries,
        updateQueries,
        resetQueries,
    };
};