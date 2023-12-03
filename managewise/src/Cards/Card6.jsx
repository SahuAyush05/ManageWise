import React from "react";

const Card6 = () => {
  return (
    <div>
      <div class="  w-68 p-4 bg-purple-50 border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl w-16 border-white rounded-lg text-orange-600 pl-2 font-medium text-gray-500 dark:text-gray-400 bg-white ">
          Free
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-5xl font-semibold">$</span>
          <span class="text-5xl font-extrabold tracking-tight">0</span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" class="space-y-3 my-7">
          <li class="flex items-center">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              color='var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {"name":"Green"} */'
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Access to all basic features
            </span>
          </li>
          <li class="flex">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              color='var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {"name":"Green"} */'
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Reporting and analytics
            </span>
          </li>
          <li class="flex">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              color='var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {"name":"Green"} */'
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Up to 5 individual users
            </span>
          </li>
          <li class="flex">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              color='var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {"name":"Green"} */'
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">
            Chat and email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          class="text-black bg-white  w-32 font-normal hover:border hover:border-black-200 font-bold focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default Card6;
