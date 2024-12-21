import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Importing useAuth from AuthContext

function Navbar() {
  const { isAuthenticated, logout } = useAuth(); // Using isAuthenticated and logout from AuthContext

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          {/* Add logo or icon here */}
        </NavLink>
        <div className="flex md:order-2 space-x-3">
          {!isAuthenticated ? (
            <>
              <button
                type="button"
                className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                <NavLink to="/login" activeClassName="text-orange-500">
                  Login
                </NavLink>
              </button>
              <button
                type="button"
                className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                <NavLink to="/register" activeClassName="text-orange-500">
                  Register
                </NavLink>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={logout}
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Logout
            </button>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? 'text-orange-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/quizzes"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-orange-500'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500'
                    }`
                  }
                >
                  Quizzes
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? 'text-orange-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500'
                  }`
                }
              >
                Leaderboard
              </NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-orange-500'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500'
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
