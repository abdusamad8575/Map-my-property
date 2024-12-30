"use client";
import { useRouter } from "next/navigation";
import React from "react";
import cn from "@/utils/cn";

interface CustomButtonProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  children,
  className,
  href,
  onClick,
}) => {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e);
    } else if (href) {
      router.push(href);
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        `gap-2 flex items-center z-50 h-fit text-sm py-2 pl-8 pr-5 rounded-lg border ${
          type === "primary"
            ? "bg-[#0C0E0D] text-white border-stone-600"
            : "border-[#8E7D3A] bg-[#F2E6B8] text-black"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
