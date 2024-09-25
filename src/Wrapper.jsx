
const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 bg-[whitesmoke] p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
