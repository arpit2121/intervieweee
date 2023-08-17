import { makeStyles } from "@mui/styles";
import React from "react";
import {
  CustomInputButton,
} from "../components/button/CustomButton";
import CustomContainer from "../components/container/customContainer";
import ResumeDropzone from "../components/dropzone/ResumeDropzone";
import MailIcon from "../components/icons/MailIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import QuickConnectIcon from "../components/icons/QuickConnectIcon";
import Vector1Icon from "../components/icons/Vector1Icon";
import VectorLargeIcon from "../components/icons/VectorLargeIcon";
import CommonCustomizedTextField from "../components/textfield/CommonCustomTextField";
import {
  professionList,
  workExperienceList,
} from "../components/textfield/textfield.utils";
import CustomAllTypography from "../components/typography/CustomTypography";
import useResponsiveStyles from "../utils/MediaQuery";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer/Timer";

const useStyle = makeStyles((theme) => ({
  parent: {
    backgroundColor: "#E5E4FF",
    width: "100%",
    background:
      "linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%,#F8F5F6 100%)",
    position: "relative",
  },
  vectorBoxRight: {
    position: "absolute",
    right: "0",
    top: "0",
  },
  vectorBoxLeft: {
    position: "absolute",
    left: "0",
    bottom: "0",
    maxWidth: "40rem",
  },
  cardBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6.25rem 0",
    [theme.breakpoints.down("sm")]: {
      padding: "2.25rem 0 0 0",
    },
  },
  cardContainer: {
    maxWidth: "31.8rem",
    padding: "3.25rem 4.75rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3.25rem 1rem",
    },
  },
  textfieldContainer: {
    padding: "0 0 1.5rem 0",
  },
  dropZone: {
    padding: "2.5rem 8.75rem 3.75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed",
  },
  dropZoneContentBox: {
    maxWidth: "20.1rem",
    textAlign: "center",
  },
}));

const OnBoardingPage = () => {
  const navigate=useNavigate()
  const responsive = useResponsiveStyles();
  const classes = useStyle();
  const menu = [
    { label: "ten", value: 10 },
    { label: "twenty", value: 20 },
    { label: "thirty", value: 30 },
  ];

  const onGetStarted=()=>{
navigate('/interviewDetails')
  }

  return (
    <CustomContainer>
      <div className={classes.parent}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            ...(responsive.isMobile
              ? { display: "flex", justifyContent: "center" }
              : { left: "2rem", top: "1rem" }),
          }}
        >
          <QuickConnectIcon />
        </div>
        <div className={classes.vectorBoxRight}>
          {!responsive.isMobile ? <Vector1Icon width={"100%"} /> : ""}
        </div>
        <div className={classes.vectorBoxLeft}>
          <VectorLargeIcon width={responsive.isMobile ? "50%" : "100%"} />
        </div>
        <div className={classes.cardBox}>
          <div
            style={{
              padding:
                responsive.isMobile || responsive.isTablet ? "1.5rem" : "4rem",
              borderRadius: "1.125rem",
              marginTop: responsive.isTablet ? "" : "0.78rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              background: "white",
              width: responsive.isMobile ? "75%" : "35%",
              zIndex: 1,
              justifyContent: "space-between",
            }}
          >
            <CustomAllTypography
              name={"Tell us about yourself."}
              variant={"h3"}
            />
            <CustomAllTypography
              name={
                "Request you to provide us with some necessary information before starting the interview."
              }
              variant={"body2"}
            />
            <div style={{ width: "100%", height: "2.69rem" }}></div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField title="Full Name" />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                startIcon={<PhoneIcon />}
                extraText={"+91"}
                placeholder="Mobile no."
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                placeholder={"Email ID"}
                startIcon={<MailIcon />}
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField title={"Current Company name"} />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                placeholder={"Your Profession"}
                options={professionList}
                type="dropdown"
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                placeholder={"Work Experience"}
                options={workExperienceList}
                type="dropdown"
              />
            </div>
            <ResumeDropzone />
            <div style={{ height: "2.69rem", width: "100%" }}></div>
            <CustomInputButton
              responsive={responsive}
              width={"100%"}
              size="small"
              onClick={onGetStarted}
            >
              Get Started
            </CustomInputButton>
            {/* <Timer/> */}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default OnBoardingPage;
