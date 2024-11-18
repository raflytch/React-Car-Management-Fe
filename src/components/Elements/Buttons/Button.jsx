const Button = ({
  children,
  type,
  onAction,
  color = "indigo",
  width = "full",
}) => {
  const baseStyles = `block rounded px-12 py-3 text-sm font-medium text-center focus:outline-none focus:ring transition ease-in-out duration-300`;
  const colorStyles = {
    indigo: `border border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 active:text-indigo-500`,
    red: `border border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-600 active:text-red-500`,
    green: `border border-green-600 bg-green-600 text-white hover:bg-transparent hover:text-green-600 active:text-green-500`,
    teal: `border border-teal-600 bg-teal-600 text-white hover:bg-transparent hover:text-teal-600 active:text-teal-500`,
    gray: `border border-gray-600 bg-gray-600 text-white hover:bg-transparent hover:text-gray-600 active:text-gray-500`,
  };

  const widthStyles = {
    full: "w-full",
    auto: "w-auto",
    sm: "w-24",
    md: "w-36",
    lg: "w-48",
  };

  return (
    <button
      type={type || "button"}
      onClick={onAction}
      className={`${baseStyles} ${colorStyles[color]} ${widthStyles[width]}`}
    >
      {children}
    </button>
  );
};

export default Button;
