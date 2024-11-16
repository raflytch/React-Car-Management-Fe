const Label = ({ children, htmlFor }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-md font-medium text-red-600"
      >
        {children}
      </label>
    </>
  );
};
export default Label;
