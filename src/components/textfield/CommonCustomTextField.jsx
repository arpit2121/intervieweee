import React, { useState } from "react";
import ErrorIcon from '../icons/textfield/ErrorIcon'
import WarningIcon from '../icons/textfield/WarningIcon'
import SuccessIcon from '../icons/textfield/SuccessIcon'
import LoadingIcon from '../icons/textfield/ErrorIcon'
import CustomAllTypography from "../typography/CustomTypography";
import { makeStyles } from "@mui/styles";
import _ from "lodash";

const useStyles = makeStyles({
  mainContainer: {
    width:props=>props?.width?props?.width:'100%',
    display: "flex",
    flexDirection: "column",
  },
  containerStyles: {
    padding: "1rem 1.25rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    outline: "none",
    backgroundColor: (props) => props?.getStatusColor(props?.status),
    "&:hover": {
      border: "1px solid #E8E6F8",
    },
    "&:focus-within": {
      border: "1px solid #605DEC",
    },
    border: (props) => `1px solid ${props?.getStatusColor(props?.status)}`,
    borderRadius: (props) => (props?.curvedBorder ? "1.125rem" : "unset"),
  },
  iconStyles: {
    color: "#212121",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textBoxStyles: {
    height: "1.5rem",
    width: "100%",
    border: "none",
    outline: "none",
    color: "#212121",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.5rem",
    backgroundColor: (props) => props?.getStatusColor(props?.status),
  },
  inputdiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
  },

  textfieldStatusBoxStyles: {
    paddingTop: "0.5rem",
    height: "1rem",
    display: "flex",
    alignItems: "center",
  },
});

const CommonCustomizedTextField = ({
  width,
  startIcon,
  endIcon = ErrorIcon,
  placeholder = "Write here",
  title = "Title",
  data = "",
  setData = () => {},
  status = "warning",
  curvedBorder = true,
}) => {
  const inputRef = React.createRef();

  const [isFocused, setIsFocused] = useState(false);

  const [textfieldStatus, setTextfieldStatus] = useState({
    loading: false,
    warning: false,
    error: false,
    success: false,
  });
  const statusMap = {
    error: { color: "#FFD8D8", icon: ErrorIcon },
    warning: { color: "#FFEAC1", icon: WarningIcon },
    loading: { color: "#AAAAAA", icon: LoadingIcon },
    success: { color: "#AAAAAA", icon: SuccessIcon },
  };
  const getStatusColor = (status) => {
    return statusMap?.[status]?.color || "#AAAAAA";
  };

  const handleFocus = (event) => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };
  const classes = useStyles({ getStatusColor, status, curvedBorder });

  return (
    <div className={classes.mainContainer}>
      <div className={classes.containerStyles} onClick={handleClick}>
        {startIcon && (
          <img
            className={classes.iconStyles}
            style={{ marginRight: "0.62rem" }}
            src={startIcon}
            alt="Start Icon"
            width="15px"
            height="15px"
          />
        )}
        <div className={classes.inputdiv}>
          <CustomAllTypography
            name={_.startCase(_.toLower(status))}
            variant="caption"
            color="#AAAAAA"
          />
          <input
            // onChange={handleChange}
            type="text"
            label={title}
            // value={data}
            placeholder={placeholder}
            ref={inputRef}
            className={classes.textBoxStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="true"
          />
        </div>
        {endIcon && (
          <img
            className={classes.iconStyles}
            src={endIcon}
            style={{ marginLeft: "0.62rem" }}
            alt="End Icon"
            width="15px"
            height="15px"
          />
        )}
      </div>
      {status && (
        <div className={classes.textfieldStatusBoxStyles}>
          <img
            src={statusMap?.[status]?.icon || ""}
            alt={`${status}-icon`}
            width="16px"
            height="16px"
            style={{ marginRight: "0.75rem" }}
          />
          <CustomAllTypography
            name={_.startCase(_.toLower(status))}
            variant="caption"
            color="#AAAAAA"
          />
        </div>
      )}
    </div>
  );
};

export default CommonCustomizedTextField;