import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div className="w-full flex justify-center">
      <Link to="/projects" className="flex gap-1">
        <ArrowLeftCircle className="text-blue w-4" />
        <span className="font-body font-semibold text-blue">projects</span>
      </Link>
    </div>
  );
}
