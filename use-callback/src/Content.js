import { memo } from "react";

function Content({handleClick}) {
  console.log("render Content");

  return (
    <div>
      <h2>Hello mn</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default memo(Content);
