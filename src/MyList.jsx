import React from "react";
function MyList(props) {
  return (
    <li>
      <button
        onClick={() => {
          props.select(props.id);
        }}
      >
        x{" "}
      </button>{" "}
      {props.text}
    </li>
  );
}
export default MyList;
