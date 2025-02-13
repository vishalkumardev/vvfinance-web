import React, { useEffect, useState } from "react";

function InternetStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initialize with current status

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Dependency array is empty because no dependencies are used

  return (
    !isOnline && (
      <div className="fixed top-0 left-0 w-full bg-red-500 text-white p-4 text-center z-50">
        No internet connection. Please check your network.
      </div>
    )
  );
}

export default InternetStatus;
