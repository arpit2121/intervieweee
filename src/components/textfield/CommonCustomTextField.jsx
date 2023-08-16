import React, { useCallback, useMemo, useState } from "react";
import ErrorIcon from "../icons/textfield/ErrorIcon";
import WarningIcon from "../icons/textfield/WarningIcon";
import SuccessIcon from "../icons/textfield/SuccessIcon";
// import LoadingIcon from "../../assets/cancel.svg";
import CustomAllTypography from "../typography/CustomTypography";
import { makeStyles } from "@mui/styles";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material";
import _ from "lodash";
import SearchIcon from "../icons/SearchIcon";
import CountryList from "country-list-with-dial-code-and-flag";
// import { darkspacetheme } from "../../theme/theme";
import useResponsiveStyles from "../../utils/MediaQuery";

const CustomSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  height: "2.5rem",
  borderRadius: "1rem",
  fontSize: "16px",
  padding: "0.5rem",
  fontFamily: "nunito",
  // boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  // "&.MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
  //   width:'200px !important'
  // },
}));

const useStyles = makeStyles({
  mainContainer: {
    width: (props) => (props?.width ? props?.width : "100%"),
    display: "flex",
    flexDirection: "column",
    pointerEvents: (props) => (props?.disabled ? "none" : "auto"),
  },
  searchIcon: {
    marginRight: "0.62rem",
  },
  containerStyles: {
    padding: (props) => (props?.type == "dropdown" ? "0rem" : "0rem 1.25rem"),
    height: "3.5rem",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    outline: "none",
    position: "relative",
    backgroundColor: (props) =>
      props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD",
    "&:hover": {
      border: "1px solid #E8E6F8",
    },
    "&:focus-within": {
      border: "1px solid #605DEC",
    },
    border: (props) =>
      `1px solid ${
        props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD"
      }`,
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
    color: (props) => (props?.disabled ? "#F7F7FD" : "#212121"),
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.5rem",
    backgroundColor: (props) =>
      props?.status ? props?.getStatusColor(props?.status) : "#F7F7FD",
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
  countryCode: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
  },
  countryCode2: {
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
  },
  title: {
    position: "absolute",
    left: "1.25rem",
    transition: "opacity 1500ms",
    transition: "display 1500ms",
    transition: "position 1500ms",
  },
  menuPaper: {
    maxHeight: "400px !important",
    width: (props) =>
      props.responsive.isMobile ? "100% !important" : "400px !important",
  },
});

const CommonCustomTextField = ({
  style = {},
  width,
  extraText,
  options = [],
  type,
  startIcon,
  endIcon,
  placeholder = "Write here",
  title,
  value = "",
  setValue = () => {},
  searchInput,
  status,
  curvedBorder = true,
  onClick = () => {},
  type1,
  borderStyle = {},
}) => {
  let allCountryList = CountryList.getAll();
  const responsive = useResponsiveStyles();
  const inputRef = React.createRef();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const statusIconStyle = { marginRight: "0.75rem" };

  const statusMap = {
    error: { color: "#FFD8D8", icon: <ErrorIcon style={statusIconStyle} /> },
    warning: { color: "#FFEAC1", icon: <WarningIcon style={statusIconStyle} /> },
    // loading: { color: "#AAAAAA", icon: <LoadingIcon/> },
    success: { color: "#AAAAAA", icon: <SuccessIcon style={statusIconStyle} /> },
  };
  const getStatusColor = (status) => {
    return statusMap?.[status]?.color || "#AAAAAA";
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
    setValue(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setValue(e);
  };
  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };
  const classes = useStyles({
    getStatusColor,
    status,
    curvedBorder,
    type,
    isFocused,
    responsive,
  });
  let timeout;
  const handleDebounce = (e) => {
    setSearchText(e.target.value);
  };
  const containsText = (text, searchText) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  const displayedOptions = useMemo(
    () =>
      allCountryList.filter(
        (option) =>
          containsText(option.dial_code, searchText) ||
          containsText(option.name, searchText) ||
          containsText(option.code, searchText)
      ),
    [searchText]
  );

  return (
    <div className={classes.mainContainer} style={style}>
      <div
        className={classes.containerStyles}
        onClick={handleClick}
        style={borderStyle}
      >
        {startIcon && (
          <div
            className={classes.iconStyles}
            style={{ marginRight: "0.62rem" }}
          >
            {startIcon}
          </div>
        )}
        {extraText && (
          <div
            style={{
              width: "max-content",
              marginRight: "0.62rem",
              position: "relative",
            }}
          >
            <CustomSelect
              IconComponent={() => null}
              // MenuProps={{ autoFocus: false }}
              labelId="search-select-label"
              id="search-select"
              inputProps={{ sx: { padding: "0 !important", color: "#9D99AC" } }}
              sx={{ padding: 0, height: "max-content" }}
              renderValue={() => countryCode}
              value={countryCode}
              onChange={handleCountryChange}
              className={classes.countryList}
              onClick={(e) => e.stopPropagation()}
              onClose={() => setSearchText("")}
              MenuProps={{
                classes: { paper: classes.menuPaper },
                autoFocus: false,
              }}
            >
              <ListSubheader>
                <TextField
                  size="small"
                  // Autofocus on textfield
                  autoFocus
                  placeholder="Type to search..."
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleDebounce}
                  onKeyDown={(e) => {
                    if (e.key !== "Escape") {
                      // Prevents autoselecting item while typing (default Select behaviour)
                      e.stopPropagation();
                    }
                  }}
                />
              </ListSubheader>

              {displayedOptions?.map((elem, index) => (
                <MenuItem key={index} value={elem?.dialCode}>
                  <div className={classes.countryCode}>
                    <div className={classes.countryCode2}>
                      <span>{elem?.flag}</span>
                      <CustomAllTypography
                        name={elem?.name}
                        sx={{
                          fontSize: "0.875rem",
                          width: "60%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        variant="body3"
                        color="#9D99AC"
                      />

                      <CustomAllTypography
                        sx={{
                          fontSize: "0.875rem",
                        }}
                        name={`(${elem?.code})`}
                        variant="body3"
                        color="#9D99AC"
                      />
                    </div>
                    <CustomAllTypography
                      sx={{ fontSize: "0.875rem" }}
                      name={elem?.dial_code}
                      variant="body3"
                      color="#9D99AC"
                    />
                  </div>
                </MenuItem>
              ))}
            </CustomSelect>
          </div>
        )}
        {searchInput && <SearchIcon className={classes.searchIcon} />}
        <div className={classes.inputdiv}>
          <div
            className={classes.title}
            style={{
              position: isFocused || !!value ? "static" : "absolute",
              opacity: title ? 1 : 0,
            }}
          >
            <CustomAllTypography
              name={_.startCase(_.toLower(title))}
              variant="caption"
              sx={{ fontSize: "1rem " }}
              textcolor="#9D99AC"
            />
          </div>

          {type != "dropdown" ? (
            <input
              onChange={handleChange}
              type={type1 ? type1 : "text"}
              label={title}
              // value={value}
              placeholder={title ? "" : placeholder}
              ref={inputRef}
              className={classes.textBoxStyles}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="new-user-street-address"
            />
          ) : (
            <CustomSelect
              value={value}
              displayEmpty
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <CustomAllTypography
                      sx={{ fontSize: "1rem", fontWeight: 400 }}
                      name={placeholder}
                      variant="body3"
                      textcolor="#9D99AC"
                    />
                  );
                }

                return selected?.join(", ");
              }}
              onChange={handleChangeSelect}
              sx={{ background: "none", border: "none" }}
            >
              {options?.map((menuItem, index) => (
                <MenuItem key={index} value={MenuItem}>
                  {menuItem}
                </MenuItem>
              ))}
            </CustomSelect>
          )}
        </div>
        {endIcon && (
          <div
            className={classes.iconStyles}
            style={{ marginLeft: "0.62rem" }}
            onClick={onClick}
          >
            {endIcon}
          </div>
        )}
      </div>
      {status && (
        <div className={classes.textfieldStatusBoxStyles}>
          {/* <img
            src={statusMap?.[status]?.icon || ""}
            alt={`${status}-icon`}
            width="16px"
            height="16px"
            style={{ marginRight: "0.75rem" }}
          /> */}
          <span>{statusMap?.[status]?.icon || ""}</span>
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

export default CommonCustomTextField;
