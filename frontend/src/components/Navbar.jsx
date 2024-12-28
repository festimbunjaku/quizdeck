import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M919.579055 285.271858h-45.680644v28.668789h45.680644c7.722143 0 10.633049 8.355928 10.633049 16.078071v378.207881c0 38.616859-28.046267 67.48633-66.663125 67.486329h-280.155503c-23.172573 0-45.330475 21.402275-45.330475 44.574848v4.571648h-56.313693v-4.571648c0-23.172573-15.259987-44.574848-38.432559-44.574848H163.16227c-38.616859 0-73.561041-28.869471-73.561041-67.486329V330.018718c0-7.722143 9.808821-16.078071 17.530964-16.078071h38.782729v-28.668789H107.132193c-23.172573 0-45.175868 21.573264-45.175868 44.74686v378.207881c0 54.068312 47.138656 95.131233 101.205945 95.131233h280.154479c7.722143 0 10.787656 9.207801 10.787655 16.929944v7.003375c0 15.45043 15.784216 25.212152 31.23567 25.212153h56.0311c15.45043 0 24.337754-9.761723 24.337755-25.212153v-7.003375c0-7.722143 9.963428-16.929944 17.685571-16.929944H863.547955c54.068312 0 94.30803-41.063945 94.308029-95.131233V330.018718c0-23.172573-15.104356-44.74686-38.276929-44.74686z" fill="#FF7415"></path><path d="M271.852816 285.271858h167.917194v28.668789h-167.917194zM271.852816 348.752748h167.917194v27.644903h-167.917194zM271.852816 411.209753h167.917194v28.668789h-167.917194zM580.042299 285.271858h167.917194v28.668789h-167.917194zM580.042299 348.752748h167.917194v27.644903h-167.917194zM580.042299 411.209753h167.917194v28.668789h-167.917194z" fill="#FF7415"></path><path d="M842.536804 229.98205h-17.784888v-5.021134c0-30.894716-21.358248-58.459757-52.252964-58.459756H604.405651c-38.92812 0-72.900635 21.329579-91.050027 52.867295-18.149391-31.537716-52.121906-52.867295-91.050026-52.867295H254.21332c-30.894716 0-59.150879 27.564017-59.150879 58.459756v5.021134h-10.886973c-27.030573 0-52.593917 27.118627-52.593917 58.013343v378.20788c0 38.616859 33.415521 67.530357 70.10338 67.530357h255.640617c23.172573 0 42.023325 20.477706 42.023325 41.979298h28.01555c0-21.501592 18.849729-41.979298 42.023326-41.979298h255.640616c36.687859 0 63.205465-28.913498 63.205465-67.530357V287.995393c-0.002048-30.894716-18.667477-58.013343-45.697026-58.013343z m-238.131153-35.835986h168.092277c15.45043 0 24.60806 15.363399 24.60806 30.814852v399.219032c0 15.45043-9.15763 25.595085-24.60806 25.595085H604.405651c-30.453421 0-59.175452 15.523125-80.677045 36.292639V273.987617c0-42.481002 38.195018-79.841554 80.677045-79.841553zM222.706321 224.960916c0-15.45043 16.055546-30.814853 31.505975-30.814852H422.304574c42.481002 0 73.779129 37.359528 73.779129 79.841553v411.914186c-14.334395-20.717296-43.369735-36.12677-73.779129-36.12677H254.21332c-15.45043 0-31.505975-10.143632-31.505975-25.595085V224.960916z m-21.022414 481.12781c-21.237429 0-42.458477-16.71288-42.458476-39.885453V287.995393c0-15.184219 13.560337-30.368439 24.949013-30.368439h10.886973v366.552994c0 30.894716 28.256163 53.239989 59.150879 53.239989H422.304574c26.733646 0 50.311677 14.026205 64.132081 34.760907-8.879134-4.081207-18.718672-6.092118-29.113155-6.092118H201.683907z m657.879086-39.885453c0 23.172573-13.299246 39.885453-34.536676 39.885453H569.385701c-10.394484 0-20.234022 2.011935-29.114179 6.092118 13.820404-20.734702 37.399459-34.760907 64.133105-34.760907h168.092277c30.894716 0 52.252964-22.345273 52.252964-53.239989V257.626954h17.784888c11.387653 0 17.027213 15.184219 17.027213 30.368439v378.20788z" fill="#262626"></path><path d="M439.77001 544.642488c0 7.736478-6.271298 14.007775-14.007775 14.007775H285.860592c-7.736478 0-14.007775-6.271298-14.007776-14.007775v-55.943046c0-7.736478 6.271298-14.007775 14.007776-14.007775h139.901643c7.736478 0 14.007775 6.271298 14.007775 14.007775v55.943046zM747.959493 544.642488c0 7.736478-6.271298 14.007775-14.007776 14.007775H594.050074c-7.736478 0-14.007775-6.271298-14.007775-14.007775v-55.943046c0-7.736478 6.271298-14.007775 14.007775-14.007775h139.901643c7.736478 0 14.007775 6.271298 14.007776 14.007775v55.943046z" fill="#E0E0E0"></path></g></svg>
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
