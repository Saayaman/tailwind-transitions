import { useState } from "react";

const Button = ({ className, children }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      className={`px-3 py-2 rounded border-2 flex items-center ${className}`}
      onClick={() => setCount(count + 1)}
    >
      {children}
      Hover me
    </button>
  );
};

export default Button;
