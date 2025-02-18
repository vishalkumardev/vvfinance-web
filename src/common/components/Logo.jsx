import { BrainCircuit } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/dashboard" className="flex items-center">
      <span className="text-xl font-bold">
        <BrainCircuit color="#2563EB" size={30} />
      </span>
    </Link>
  );
}

export default Logo;
