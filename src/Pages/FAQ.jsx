import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className=" relative dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-anchor="#ankor"
            className="text-lg font-medium lg:text-3xl lg:font-bold text-center"
          >
            Frequently Asked Questions
          </h1>
          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-anchor="#ankor"
            className="relative mt-6 mb-12 border border-indigo-500 rounded-3xl"
          >
            <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search Any FAQ Tags..."
              className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-anchor="#ankor"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Registration
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Support
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Account
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Features
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Contact us
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Assignment
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Collaboration
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Privacy
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Progress
            </a>
            {/* Add three more FAQ links */}
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Terms of Service
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Security
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:scale-125 hover:text-indigo-500 flex items-center justify-center p-2 border border-indigo-600 rounded-lg"
            >
              Integration
            </a>
          </div>
        </div>
        <div id="ankor" className="absolute   right-0 bottom-[30%]"></div>
      </section>
    </div>
  );
};

export default FAQ;
