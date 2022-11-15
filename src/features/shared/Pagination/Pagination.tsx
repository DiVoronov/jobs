import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function Pagination() {

  const pages = ["/", "2", "3", "4"];
  const [ numberPage, setNumberPage ] = useState("/");

  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <NavLink
              to={numberPage === "/" ? "" : numberPage === "2" ? "/" : `/${parseInt(numberPage) - 1}` }
              onClick={ () => setNumberPage(numberPage === "/" ? "/" : numberPage === "2" ? "/" : (parseInt(numberPage) - 1).toString())}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </NavLink>
            <NavLink
              to={`${pages[0]}`}
              onClick={ () => setNumberPage(`${pages[0]}`)}
              aria-current={numberPage === "/" ? "page" : "false"}
              className={`relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 ${numberPage === "/" ? "border-indigo-500 bg-indigo-50" : "border-gray-300 bg-white"}`}
            >
              1
            </NavLink>
            <NavLink
              to={`/${pages[1]}`}
              onClick={ () => setNumberPage(`${pages[1]}`)}
              aria-current={numberPage === "2" ? "page" : "false"}
              className={`relative inline-flex items-center border ${numberPage === "2" ? "border-indigo-500 bg-indigo-50" : "border-gray-300 bg-white"} px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`}
            >
              2
            </NavLink>
            <NavLink
              to={`/${pages[2]}`}
              onClick={ () => setNumberPage(`${pages[2]}`)}
              aria-current={numberPage === "3" ? "page" : "false"}
              className={`relative items-center border ${numberPage === "3" ? "border-indigo-500 bg-indigo-50" : "border-gray-300 bg-white"} px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex`}
            >
              3
            </NavLink>
            <NavLink
              to={`/${pages[3]}`}
              onClick={ () => setNumberPage(`${pages[3]}`)}
              aria-current={numberPage === "4" ? "page" : "false"}
              className={`relative items-center border ${numberPage === "4" ? "border-indigo-500 bg-indigo-50" : "border-gray-300 bg-white"} px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex`}
            >
              4
            </NavLink>
            <NavLink
              to={numberPage === "4" ? "/4" : numberPage === "/" ? "/2" : `/${parseInt(numberPage) + 1}` }
              onClick={ () => setNumberPage(numberPage === "4" ? "4" : numberPage === "/" ? "2" : (parseInt(numberPage) + 1).toString())}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};