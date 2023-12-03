import React from "react";

const Card5 = ({ author, role, quote, image }) => {
  return (
    <div >
      <div className="max-w-sm w-72 h-auto p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <p className="mb-3 font-semibold text-xl text-yellow-700 dark:text-gray-400">
          {quote}
        </p>
        <ul role="list" className="py-6 divide-y divide-slate-200">
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src={image}
              alt=""
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">{author}</p>
              <p className="text-sm text-slate-500 truncate">{role}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card5;
