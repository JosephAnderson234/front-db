import { create } from "zustand";
import { DatabaseResponse } from '../interfaces/Database';

interface DatabaseListStore {
    databases: DatabaseResponse | null;
    setDatabases: (databases: DatabaseResponse) => void;
    clearDatabases: () => void;
}

export const useDatabaseListStore = create<DatabaseListStore>((set) => ({
    databases: null,
    setDatabases: (databases: DatabaseResponse) => set({ databases }),
    clearDatabases: () => set({ databases: null }),
}));