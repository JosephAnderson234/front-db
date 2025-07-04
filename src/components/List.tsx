import { DatabaseItem, DatabaseResponse } from '../interfaces/Database';

interface ListableProps {
    children: React.ReactNode;
}

export const Listable = ({children}: ListableProps) => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
            {children}
        </div>
    );
}

interface ListableDatabaseProps {
    data: DatabaseResponse;
    selectedState: DatabaseItem | null;
    onChange: (data: DatabaseItem) => void;
}

export const ListableDatabase = (props: ListableDatabaseProps) => {
    const {data, onChange, selectedState} = props;

    return (
        <select name="databaseItem" value={selectedState?.name}>
            {data.databases.map((item, index) => (
                <option key={index} value={item.name} onClick={() => onChange(item)}>
                    {item.name}
                </option>
            ))}
        </select>
    )
}