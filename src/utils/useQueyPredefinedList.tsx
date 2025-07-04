import { DatabaseQueryPredefined } from "@interfaces/Database";
import { create } from "zustand";

interface QueryPredefinedListStore {
    queries: DatabaseQueryPredefined | null;
    setQueries: (queries: DatabaseQueryPredefined) => void;
    clearQueries: () => void;
}

export const useQueryPredefinedListStore = create<QueryPredefinedListStore>((set) => ({
    queries: null,
    setQueries: (queries: DatabaseQueryPredefined) => set({ queries }),
    clearQueries: () => set({ queries: null }),
}));