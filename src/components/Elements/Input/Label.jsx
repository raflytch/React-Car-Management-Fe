const Label = ({ children, htmlFor }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-md font-medium text-gray-700"
      >
        {children}
      </label>
    </>
  );
};
export default Label;
