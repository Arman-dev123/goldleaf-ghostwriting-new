import React from "react";
import { motion } from "motion/react";
import { Link } from "@/src/lib/next-compat";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-700 to-blue-950 text-white hover:from-blue-800 hover:to-blue-950 border border-blue-900",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md",
    outline: "bg-transparent text-blue-900 border border-blue-200 hover:bg-blue-50 hover:border-blue-300",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} group ${className}`;

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={combinedClasses}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
