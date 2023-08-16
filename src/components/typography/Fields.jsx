import React from "react";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";


export const TextTitle = styled(Typography)(({ color }) => ({
  fontFamily: 'Nunito Sans',
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: 400,
  fontColor: color ? color : "",
}));

export const TextDescription = styled(Typography)(({ color }) => ({
  fontFamily: 'Nunito Sans',
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: 400,
  fontColor: color ? color : "",
}));

export const TextPlaceholder = styled(Typography)(({ color }) => ({
  fontFamily: 'Nunito Sans',
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: 400,
  fontColor: color ? color : "",
}));

export const Body3 = styled(Typography)(({color}) => ({
  fontFamily: 'Nunito Sans',
  fontSize: "0.75rem",
  fontWeight: 400,
  lineHeight: "120%",
  fontColor: color ? color : "",
}));

export const Body4 = styled(Typography)(({color}) => ({
  fontFamily: 'Nunito Sans',
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: "120%",
  fontColor: color ? color : "",
}));
