import clsx from "clsx";

interface TagProps {
  label: string;
  variant?: "default" | "accent";
  className?: string;
}

export default function Tag({ label, variant = "default", className }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
        variant === "accent"
          ? "bg-accent-muted text-accent"
          : "bg-[#F4F4F5] text-muted hover:bg-[#E4E4E7]",
        className
      )}
    >
      {label}
    </span>
  );
}
