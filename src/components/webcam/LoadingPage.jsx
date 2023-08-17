import React from "react";
import styled from "styled-components";
import CustomLogo from "./CustomLogo";
import CustomAllTypography from "../typography/CustomTypography";
import Countdown from "./Countdown";

const LoadingContainer = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const Container1 = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));
const LoadingPage = () => {
  return (
    <LoadingContainer>
      <CustomLogo />
      <Container1>
        <Container1>
          <Countdown showRocket={true} />
          <CustomAllTypography variant="h2" name={"Get ready for some fun!"} />
          <CustomAllTypography
            variant="body2"
            name={
              "The Interview round is just about to start,and you've got only 10 seconds left.Wishing you all the best and may the fun begin! 🚀🎉"
            }
          />
        </Container1>
        <Container1>
          <a>https://lottiefiles.com/animations/rocket-animation-a90gCcdDEy</a>
          <a>https://lottiefiles.com/animations/countdown-1-YtFR9f9eDm</a>
        </Container1>
      </Container1>
    </LoadingContainer>
  );
};

export default LoadingPage;
