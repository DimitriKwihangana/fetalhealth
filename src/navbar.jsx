import React from 'react';
import { NavLink } from 'react-router-dom';
import theicon from './assets/fetal.png';

function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={theicon} className="h-20" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Fetal Health
            </span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 bg-gray-100 md:bg-transparent md:text-blue-700'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                    } dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/predict"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 bg-gray-100 md:bg-transparent md:text-blue-700'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                    } dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Predict
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/retrain"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 bg-gray-100 md:bg-transparent md:text-blue-700'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                    } dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Retrain & Fine tune
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/findings"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 bg-gray-100 md:bg-transparent md:text-blue-700'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                    } dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`
                  }
                >
                  Findings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Placeholder div for spacing */}
      <div className="h-24"></div>
    </div>
  );
}

export default Navbar;
