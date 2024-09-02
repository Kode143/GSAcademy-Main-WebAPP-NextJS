import React from "react";

const CustomButton = ({ isLoading, children, ...props }) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
      disabled={isLoading}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default CustomButton;