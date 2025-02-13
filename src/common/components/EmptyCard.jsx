import React from "react";
import { AlertCircle } from "lucide-react";

function EmptyCard({ message = "No data found" }) {
  return (
    <div className="flex flex-col h-[35vh] items-center justify-center gap-4 rounded-lg  p-6 text-center">
      <div className="rounded-full bg-gray-100 p-4">
        <AlertCircle className="h-8 w-8 text-gray-500" />
      </div>
      <h2 className="text-lg font-semibold ">{message}</h2>
    </div>
  );
}

export default EmptyCard;
