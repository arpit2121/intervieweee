import React from "react";

const SearchIcon = ({height=24,width=24,className,onClick,style={}}) => {
  return (
    <svg
      width={height}
      onClick={onClick}
      height={width}
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="24/ outlined / action / main / search">
        <path
          id="Vector"
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokelinejoin="round"
        />
        <path
          id="Vector_2"
          d="M21 21L16.65 16.65"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokelinejoin="round"
        />
      </g>
    </svg>
  );
};
export default SearchIcon;
