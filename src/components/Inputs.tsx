interface InputQueryProps {
    query: string;
    setQuery: (query: string) => void;
    error: string | null;
    setError: (error: string | null) => void;
    placeholder?: string;
    disabled?: boolean;
}

export const InputQuery = (props: InputQueryProps) => {
    const { query, setQuery, placeholder = "Introduce tu consulta aqui", disabled = false, error, setError } = props;


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        const normalized = input.trim().toLowerCase();

        const errors: string[] = [];

        // Validaciones en orden lógico
        if (!normalized.startsWith("select")) {
            errors.push("La consulta debe comenzar con 'SELECT'.");
        }
        if (input.length > 1000) {
            errors.push("La consulta no puede exceder los 1000 caracteres.");
        }
        if (/--|\/\*|\*\//.test(input)) {
            errors.push("La consulta no puede contener comentarios (--, /*, */).");
        }
        if (input.includes(";")) {
            errors.push("La consulta no puede contener punto y coma (;).");
        }
        if (/\b(drop|delete|update)\b/i.test(input)) {
            errors.push("La consulta no puede contener comandos peligrosos como 'DROP', 'DELETE' o 'UPDATE'.");
        }

        // Manejo de errores
        if (errors.length > 0) {
            setError(errors.join("\n"));
        } else {
            setError("");
        }

        // Actualiza el estado de la consulta
        setQuery(input);
    };

    return (
        <div className="w-4/5 my-6">
            <textarea
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                className="w-full field-sizing-content p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
                error && (
                    <div className="mt-2 text-red-600">
                        <p>Error en la consulta:</p>
                        <pre className="whitespace-pre-wrap">{error}</pre>
                    </div>
                )
            }
        </div>

    );
}