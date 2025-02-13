import React from "react";

const ShimmerLoader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-50">
        <div className="flex flex-col items-center space-y-4 ">
          {/* Card Placeholder */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-md bg-white">
            <div className="w-full h-48 skeleton skeleton-rounded" />
            <div className="mt-4">
              <div className="w-3/4 h-4 skeleton skeleton-rounded" />
              <div className="mt-2 w-1/2 h-4 skeleton skeleton-rounded" />
            </div>
          </div>

          {/* Another Placeholder */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-md bg-white">
            <div className="w-full h-48 skeleton skeleton-rounded" />
            <div className="mt-4">
              <div className="w-3/4 h-4 skeleton skeleton-rounded" />
              <div className="mt-2 w-1/2 h-4 skeleton skeleton-rounded" />
            </div>
          </div>

          {/* Add more placeholders as needed */}
        </div>
      </div>
    );
  }
};

export default ShimmerLoader;
