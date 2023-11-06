import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../components/button/CustomButton";
import QuickConnectShortIcon from "../components/icons/QuickConnectShortIcon";
import CustomAllTypography from "../components/typography/CustomTypography";
import useResponsiveStyles from "../utils/MediaQuery";
import { useDispatch } from "react-redux";
import {
  moveToNextQuestion,
  setPracticeMode,
  setRecordState,
} from "../store/slices/InterviewPageSlice";
import { getJobDetails, is360Complete } from "../store/slices/interviewee/actions";
const useStyle = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    display: "flex",
    padding: "1.7rem 0rem",
    boxShadow: (props) =>
      props.responsive.isMobile
        ? ""
        : "inset 0px -5px 5px -5px rgba(0, 0, 0, 0.5)",
    position: "sticky",
    top: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "6.2rem",
    backgroundColor: "#fff",
  },
  headerBox: {
    padding: "0 0 2.5rem 0",
  },
  descriptionBox: {
    padding: "0 0 2.5rem 0",
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    marginTop: "4.9rem",
    gap: "1.19rem",
  },
}));

const InterviewDetails = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);
  const responsive = useResponsiveStyles();
  const navigate = useNavigate();
  const classes = useStyle({ responsive });
  const dispatch = useDispatch();

  const onLetsStart = () => {
    // console.log("ritik", location.pathname.split('/')[4]);
    //console.log("03003003030",`${location.pathname.split('/')[1]}/${location.pathname.split('/')[2]}/${location.pathname.split('/')[3]}/${location.pathname.split('/')[4]}/interview-page`)
    navigate(`/${location.pathname.split('/')[1]}/${location.pathname.split('/')[2]}/${location.pathname.split('/')[3]}/${location.pathname.split('/')[4]}/interview-page`);
  };
  const onPracticeMode = () => {
    // dispatch(moveToNextQuestion());
    dispatch(setRecordState(""))
    dispatch(setPracticeMode(true));
    navigate(`/${location.pathname.split('/')[1]}/${location.pathname.split('/')[2]}/${location.pathname.split('/')[3]}/${location.pathname.split('/')[4]}/interview-page`);
  };

  useEffect(()=>{
    const getJobDetailsFun= async()=>{
      console.log("Location.state", location.state)
      //const res= await dispatch(getJobDetails({jobPostId:location.pathname.split('/')[2]}))
      //setData(res.payload.data)
      const is360= await dispatch(is360Complete({intervieweeId: location.pathname.split('/')[4]}))
    }
    getJobDetailsFun()
  },[])

  return (
    <div>
      <div className={classes.navbar}>
        <QuickConnectShortIcon style={{ marginLeft: "1.5rem" }} />

        <CustomAllTypography name={"Video Interview"} variant={"h3"} />
      </div>
      <div
        style={{
          padding: responsive.isDesktop
            ? "3.94rem 10.75rem"
            : responsive.isTablet
            ? "3.94rem 5rem"
            : "3.94rem 2rem",
        }}
      >
        <div className={classes.headerBox}>
          <CustomAllTypography
            name={`${data?.jobTitle}`}
            variant={"h3"}
            fontWeight={"700"}
          />
          <CustomAllTypography name={`Office: ${data?.hiringLocation}`} variant={"body2"} />
          <CustomAllTypography name={`Exp.:${data?.requiredExperience}` } variant={"body2"} />
        </div>
        <div className={classes.descriptionBox}>
          <CustomAllTypography name={"Job Description"} variant={"h6"} />
          <CustomAllTypography

// var convertedJobDesc = (jobInfo?.jobDescription)?.replace(/<[^>]+>/g, '');
            name={
              `${data?.jobDescription?.replace(/<[^>]+>/g, '')}`
            }
            variant={"body2"}
          />
        </div>
        <div style={{ paddingBottom: "1.1rem" }}>
          <CustomAllTypography
            name={"Interview Duration: 20m (Approx)"}
            variant={"h6"}
            color={"red"}
            fontWeight={"400"}
          />
        </div>
        <div className={classes.tips}>
          <CustomAllTypography name={"Attention:"} variant={"h6"} />
          <CustomAllTypography
            name={
              "Prior to initiating the interview, please ensure a stable internet connection. Once you commence, it is crucial that you avoid from skipping or closing the browser. Failure to complete the interview for any reason will result in disqualification from the next round. Upon successful completion of the interview, our team will reach out to you via email or phone to proceed with the next steps."
            }
            variant={"body2"}
          />
          <div style={{ paddingTop: "2rem" }}>
            <CustomAllTypography name={"Tips:"} variant={"h6"} />
            <div style={{ padding: "0.8rem" }}>
              <ul>
                <li>
                  <CustomAllTypography
                    name={
                      "Don’t worry we are not storing any of your recording in Practice mode, hence utilise the Practice mode to acquaint yourself with the software."
                    }
                    variant={"body2"}
                  />
                </li>
                <li>
                  <CustomAllTypography
                    name={"Avoid recording the video in noisy environment."}
                    variant={"body2"}
                  />
                </li>
                <li>
                  <CustomAllTypography
                    name={
                      "Verify that both your audio and video recordings are functioning seamlessly in Practice mode."
                    }
                    variant={"body2"}
                  />
                </li>
                <li>
                  <CustomAllTypography
                    name={
                      "We will ask you to capture a comprehensive 360° view of your room to prevent any potential malpractices."
                    }
                    variant={"body2"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.buttonsContainer}>
          <CustomButton
            name="Practice Mode"
            variant="outlined"
            size={"small"}
            onClick={onPracticeMode}
          />

          <CustomButton
            name="Lets Start"
            variant="contained"
            width={"9.125rem"}
            onClick={onLetsStart}
            size={"small"}
          />
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
