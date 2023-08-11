import { createTheme } from "@mui/material/styles";

export const colors = {
  primary : "",
  secondary : "",
  main : ""
}

export const theme = createTheme({
  breakpoints: {
    xs: '0px',       // Extra small devices
    sm: '600px',     // Small devices
    md: '768px',     // Medium devices
    lg: '1024px',    // Large devices
    xl: '1280px',    // Extra large devices
    custom: '1440px' // Custom breakpoint with your desired value
  },
  overrides: {
    MuiSelect: {
      root: {
        // Add your custom styles here to override the default root styles of MuiSelect
        // For example, you can remove the outline:
        outline: "none",
        // Or you can remove the box-shadow:
        boxShadow: "none",
        // You can set the border to none:
        border: "none",
        // You can set the background color to transparent:
        backgroundColor: "transparent",
      },
    },
  },
});
export default theme;