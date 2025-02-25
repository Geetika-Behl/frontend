import { Link } from "react-router-dom"; // Use Link from react-router-dom
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export function CtaButton({ text, to, className }) {
  return (
    <Link
      to={to}
      className={cn("no-underline")} // Add "no-underline" class to the Link
    >
      <Button
        size="lg" // Set size to large
        className={cn(
          "group flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600",
          className
        )}
      >
        {text}
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
      </Button>
    </Link>
  );
}
