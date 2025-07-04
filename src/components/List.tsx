import { DatabaseItem } from '../interfaces/Database';
import { useDatabaseList } from '@hooks/useDatabaseList';
interface ListableProps {
    children: React.ReactNode;
}

export const Listable = ({children}: ListableProps) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg ">
            {children}
        </div>
    );
}

interface ListableDatabaseProps {
    selectedState: DatabaseItem | null;
    onChange: (data: DatabaseItem| null) => void;
}

export const ListableDatabase = (props: ListableDatabaseProps) => {
    const { onChange, selectedState} = props;
    const { databases: data } = useDatabaseList();

    return (
        <select
            name="databaseItem"
            value={selectedState?.name}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        >
            <option value="Seleccionar DB" onClick={()=>onChange(null)}>Seleccionar DB</option>
            {data && data.databases.map((item, index) => (
            <option key={index} value={item.name} onClick={() => onChange(item)}>
                {item.name}
            </option>
            ))}
        </select>
    )
}