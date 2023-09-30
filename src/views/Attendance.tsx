import React from "react";

const Attendance = () => {
  return (
    <>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Attendances
            </p>
          </div>
        </div>
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                href=" javascript:void(0)"
              >
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              {/* <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Done</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Pending</p>
                </div>
              </a> */}
            </div>
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                Add Task
              </p>
            </button>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Customer ID</th>
                  <th>Employee ID</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="focus:outline-none h-16 border border-gray-100 rounded-lg hover:bg-sky-100 transition-all duration-150 ease-linear">
                  <td>
                    {/* <div className="ml-5">
                      <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input
                          placeholder="checkbox"
                          type="checkbox"
                          className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                        />
                        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                          <svg
                            className="icon icon-tabler icon-tabler-check"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </div>
                      </div>
                    </div> */}
                    1
                  </td>
                  <td className="">
                    <div className="flex items-center pl-5">1</div>
                  </td>
                  <td className="pl-24">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <circle
                          cx="7.50004"
                          cy="7.49967"
                          r="1.66667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></circle>
                      </svg>
                      <p className="text-sm leading-none text-gray-600 ml-2">
                        Urgent
                      </p>
                    </div>
                  </td>
                  <td className="pl-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.5 5H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.5 10H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.5 15H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 5V5.00667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 10V10.0067"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 15V15.0067"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm leading-none text-gray-600 ml-2">
                        04/07
                      </p>
                    </div>
                  </td>
                  <td className="pl-5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10 9.1665V9.17484"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M6.66669 9.1665V9.17484"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.3333 9.1665V9.17484"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p className="text-sm leading-none text-gray-600 ml-2">
                        23
                      </p>
                    </div>
                  </td>
                  <td className="pl-4">
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
