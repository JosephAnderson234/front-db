import { NavLink } from "react-router";
import { usePredefinedQueries } from "@hooks/usePredefinedQueries";

const Navbar = () => {
    const { queries } = usePredefinedQueries();
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-xl font-bold">
                Mi app
            </div>
            <ul className="flex space-x-4 mt-2 transition-all">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white font-bold"
                                : "text-gray-300 hover:text-white" 
                                + " transition-all duration-300"
                        }
                    >
                        Inicio
                    </NavLink>
                </li>
                {queries && queries.queries.map((query, id) => (
                    <li key={id}>
                        <NavLink
                            to={`/query/${query.key}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white font-bold"
                                    : "text-gray-300 hover:text-white"
                                    + " transition-all duration-300"
                            }
                        >
                            Consulta {id + 1}
                        </NavLink>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}

export default Navbar; 