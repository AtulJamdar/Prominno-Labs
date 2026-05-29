export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) {

  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800",

    secondary:
      "border border-gray-300 text-black hover:border-black",

    white:
      "bg-white text-black hover:bg-gray-200",
  };

  const sizes = {
    sm: "h-[49px] px-8 text-sm rounded-md",
    md: "h-[52px] px-10 text-base rounded-md",
    lg: "h-[56px] px-12 text-base rounded-md",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}