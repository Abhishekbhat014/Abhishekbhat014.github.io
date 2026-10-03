import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import "./button-with-icon.css";

const ButtonWithIconDemo = ({
  children,
  text,
  className = "",
  onClick,
  ...props
}) => {
  const content = text || children || "Let's Collaborate";

  return (
    <Button
      onClick={onClick}
      className={`relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer button-with-icon ${className}`}
      {...props}
    >
      <span className="relative z-10 transition-all duration-500 button-icon-text">
        {content}
      </span>
      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 button-icon-circle">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export default ButtonWithIconDemo;
export { ButtonWithIconDemo };
