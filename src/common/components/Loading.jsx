import React from "react";

export default function Loading({ isLoading }) {
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-50">
        <div className="flex flex-col items-center space-y-4 ">
          {/* Spinner */}
          <div className="loader"></div>

          {/* Loading Message */}
          <p className="text-lg font-semibold text-white">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }
}
