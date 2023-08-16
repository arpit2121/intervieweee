import React from "react";

const SuccessIcon = ({style={}}) => {
  return (
    <svg
    style={style}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6668 7.38662V7.99995C14.666 9.43757 14.2005 10.8364 13.3397 11.9878C12.4789 13.1393 11.269 13.9816 9.8904 14.3892C8.51178 14.7968 7.03834 14.7479 5.68981 14.2497C4.34128 13.7515 3.18993 12.8307 2.40747 11.6247C1.62501 10.4186 1.25336 8.99199 1.34795 7.55749C1.44254 6.12299 1.9983 4.7575 2.93235 3.66467C3.8664 2.57183 5.12869 1.81021 6.53096 1.49338C7.93323 1.17656 9.40034 1.32151 10.7135 1.90662"
        stroke="#439F6E"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SuccessIcon;
