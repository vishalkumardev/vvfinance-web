import React, { useState } from "react";

function MaintenanceMode() {
  const isMaintenance = false;

  if (isMaintenance) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Site Under Maintenance</h1>
          <p className="mt-2">
            We'll be back shortly. Thank you for your patience.
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export default MaintenanceMode;
