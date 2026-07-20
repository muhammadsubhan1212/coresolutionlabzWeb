import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100";

const variantStyles: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-primary text-white hover:bg-secondary shadow-[0_1px_2px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_24px_-8px_rgba(37,99,235,0.45)]",
  secondary:
    "bg-white text-primary border border-border hover:border-secondary hover:text-secondary",
  ghost: "text-primary hover:text-secondary",
};

const sizeStyles: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, href, onClick, ...rest } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const isAnchor = href.startsWith("#");
    if (isAnchor) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement> | undefined}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
