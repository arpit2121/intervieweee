import React from "react";

const VolumeIcon = ({
  type = "default",
  onClick = () => {},
  height = 10,
  width = 10,
  className,
  color = "white",
  style = {},
}) => {
  return (
    <>
      {type === "default" ? (
        <svg
          onClick={onClick}
          style={style}
          width={width}
          height={height}
          className={className}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="24/ outlined / player / volume / level 2">
            <path
              id="Vector"
              d="M11 5L6 9H2V15H6L11 19V5Z"
              stroke={color}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M19.07 4.93005C20.9447 6.80533 21.9979 9.34841 21.9979 12.0001C21.9979 14.6517 20.9447 17.1948 19.07 19.0701M15.54 8.46005C16.4774 9.39769 17.004 10.6692 17.004 11.9951C17.004 13.3209 16.4774 14.5924 15.54 15.5301"
              stroke={color}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ) : (
        (type == "lowSound" ? (
          <svg
            onClick={onClick}
            style={style}
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="24/ outlined / player / volume / level 1">
              <path
                id="Vector"
                d="M11 5L6 9H2V15H6L11 19V5Z"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M15.54 8.45996C16.4774 9.3976 17.004 10.6691 17.004 11.995C17.004 13.3208 16.4774 14.5923 15.54 15.53"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        ) : type == "mute" ? (
          <svg
          onClick={onClick}
          style={style}
          width={width}
          height={height}
          className={className}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="24/ outlined / player / volume / mute">
              <path
                id="Vector"
                d="M11 5L6 9H2V15H6L11 19V5Z"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M23 9L17 15"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M17 9L23 15"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        ) : (
          <svg
            onClick={onClick}
            style={style}
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="24/ outlined / player / volume / level 0">
              <path
                id="Vector"
                d="M11 5L6 9H2V15H6L11 19V5Z"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        ))
      )}
    </>
  );
};
export default VolumeIcon;
