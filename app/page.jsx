import React from "react";

const Page = () => {
  return (
    <div>
      <nav className="flex justify-end gap-8 mb-10 bg-gray-200">
        <a
          href="#"
          className="text-gray-400 hover:text-red-500 transition duration-300 ease-in-out text-xl"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-red-500 transition duration-300 ease-in-out text-xl"
        >
          Acerca
        </a>
      </nav>

      <div className="flex items-center justify-center h-screen relative">
  <div className="inline-block bg-gradient-to-r from-yellow-300 to-pink-400 to-orange-500 shadow-xl rounded-lg p-8">
    <h1 className="text-4xl italic text-blue-900 relative z-10 mt-6">
            Perez Lopez Angel Yahir
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
