import React from "react";

const PlayButtonIcon = ({ onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M5 3L19 12L5 21V3Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlayButtonIcon;
