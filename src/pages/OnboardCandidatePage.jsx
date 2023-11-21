import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import {
  CustomInputButton,
} from "../components/button/CustomButton.jsx";
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
import { useDispatch, useSelector } from "react-redux";
import { getJobDetails, onboardAction } from "../store/slices/interviewee/actions";
import { fetchProfessions } from "../store/slices/global/actions";
import axios from "axios";
import config from "../common/config";
import { setIntervieweeData, setLoading } from "../store/slices/interviewee/intervieweeSlice";
import { useLocation, useParams } from 'react-router-dom';
import { useFormik } from "formik";
import { onBoardingSchema } from "../common/schema";


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
  const dispatch = useDispatch()
  const location = useLocation()
  const { param1, param2, param3 } = useParams();
  const intervieweeName = useSelector((state) => state.rootReducer.interviewee.name);
  const intervieweeData = useSelector((state) => state.rootReducer.interviewee.data);
  const navigate = useNavigate()
  const responsive = useResponsiveStyles();
  const classes = useStyle();

  const onSubmit = async (data) => {
    console.log("Final Submit Clicked", data)
    dispatch(setIntervieweeData(data))
    console.log("FINAL DATA", data)
    const myFile = resume?.file
    let formData = new FormData();
    formData.append('json_data', JSON.stringify(data));
    formData.append('resume', newResume);
    for (const a of formData.values()) {
      console.log(a);
    }
    for (const a of formData.keys()) {
      console.log(a);
    }
    try {
      dispatch(setLoading(true))
      const response = await axios.post(`${config.interviewService}/v1/interviewee`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully', response);
      if (response.status === 200) {
        dispatch(setLoading(false))
        console.log("SUCCESSFULLY USER ONBOARD-------", response.data)
        sessionStorage.setItem("tokenCode", response.data?.code);
        const getJobDetailsRes = await dispatch(getJobDetails({ jobPostId: data.jobPostId , adminId: data.adminId}))
        console.log("RESPONSE FROM GET JOB DETAILS", getJobDetailsRes.payload.data)
        console.log("Now naviagte to ",`/${location.pathname.split('/')[1]}/${location.pathname.split('/')[2]}/${location.pathname.split('/')[3]}/${response.data.id}/interview-details` )
        navigate(`/${location.pathname.split('/')[1]}/${location.pathname.split('/')[2]}/${location.pathname.split('/')[3]}/${response.data.id}/interview-details`, {
          state: getJobDetailsRes.payload.data
        })
      }
    } catch (error) {
      setLoading(false)
      console.error('Error uploading Form', error);
    }
  }

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        profession: "",
        email: "",
        currentCompany: "",
        experience: "",
        adminId: location.pathname.split('/')[1],
        jobPostId: location.pathname.split('/')[2]
      },
      validationSchema: onBoardingSchema,
      onSubmit,
      validateOnBlur: true,
    });

  const menu = [
    { label: "ten", value: 10 },
    { label: "twenty", value: 20 },
    { label: "thirty", value: 30 },
  ];
  //getting params from url 
  //const queryParameters = new URLSearchParams(window.location.search)
  // const adminId = queryParameters.get("adminId")
  // const jobPostId = queryParameters.get("jobPostId")

  const onGetStarted = () => {
    console.log("DATA=---===>", data)
    // navigate('/interviewDetails')
  }

  const [professions, setProfessions] = useState()

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    experience: "",
    currentCompany: "",
    profession: "",
    adminId: location.pathname.split('/')[1],
    jobPostId: location.pathname.split('/')[2]
  })
  const resume = useSelector((state) => state.rootReducer.interviewee.resume);

  const [newResume, setNewResume] = useState(resume)

  const handleDataChange = (name, val) => {
    const dataObj = JSON.parse(JSON.stringify(data));
    dataObj[name] = val
    setData(dataObj)
  }

  useEffect(() => {
    console.log("TOUCHED---->", touched)
  }, [touched])


  useEffect(() => {
      console.log("Location---->", location.pathname)

    const getJobDetailsFun = async () => {
      const res = await dispatch(getJobDetails({ jobPostId: location.pathname.split('/')[2], adminId: location.pathname.split('/')[1]}))
      console.log("RES JOB DETAILS", res)
      // if (res?.payload?.data?.status === "ACTIVE") {
      //   navigate("/expired");
      // }
      if(res?.payload?.status===400){
        navigate('/not-found')
      }
      else if(res?.payload?.data?.status !== "ACTIVE"){
        navigate("/expired");
      }
    }
    getJobDetailsFun()
  }, [])

  useEffect(() => {
    const fetchAllProfessions = async () => {
      const res = await dispatch(fetchProfessions({}))
      console.log("RESPONSE FECTH==-======", res.payload.data)
      const allProfessions = res.payload.data
        .map((categoryData) => categoryData.professions)
        .reduce((acc, professions) => acc.concat(professions), []);
      console.log("ALL", allProfessions)
      setProfessions(allProfessions)
    }
    fetchAllProfessions()
  }, [])

  useEffect(() => {
    setNewResume(resume?.file)
  }, [resume])


  return (
    <CustomContainer>
      <div className={classes.parent}>
        <div
          style={{
            position: "absolute",
            ...(responsive.isMobile
              ? { display: "flex", justifyContent: "center" }
              : { paddingBlockStart:'1rem', paddingInlineStart:'1rem'}),
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
              name={`Tell us about yourself.`}
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
              <CommonCustomizedTextField
                value={values.fullName}
                title="Full Name"
                name='fullName'
                status={errors.fullName && touched.fullName ? "error" : ""}
                message={errors.fullName && touched.fullName ? errors.fullName : ""}
                handleChange2={handleChange}
                handleBlur2={handleBlur}
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                value={values.phoneNumber}
                startIcon={<PhoneIcon />}
                extraText={"+91"}
                placeholder="Mobile no."
                name="phoneNumber"
                status={errors.phoneNumber && touched.phoneNumber ? "error" : ""}
                message={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ""}
                handleChange2={handleChange}
                handleBlur2={handleBlur}
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                name="email"
                placeholder={"Email ID"}
                startIcon={<MailIcon />}
                value={values.email}
                status={errors.email && touched.email ? "error" : ""}
                message={errors.email && touched.email ? errors.email : ""}
                handleChange2={handleChange}
                handleBlur2={handleBlur}
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                title={"Current Company name"}
                name="currentCompany"
                handleChange2={handleChange}
                value={values.currentCompany}
                status={errors.currentCompany && touched.currentCompany ? "error" : ""}
                message={errors.currentCompany && touched.currentCompany ? errors.currentCompany : ""}
                handleBlur2={handleBlur}
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                placeholder={"Your Profession"}
                options={professions}
                type="dropdown"
                value={values.profession}
                name="profession"
                handleInputChange={handleChange("profession")}
                // handleDataChange={handleDataChange}
                // setValue={setData.profession}
                status={errors.profession && touched.profession ? "error" : ""}
                message={errors.profession && touched.profession ? errors.profession : ""}
                handleBlur2={handleBlur}
              />
            </div>
            <div className={classes.textfieldContainer}>
              <CommonCustomizedTextField
                value={values.experience}
                name="experience"
                placeholder={"Work Experience"}
                options={workExperienceList}
                type="dropdown"
                handleInputChange={handleChange("experience")}
                status={errors.experience && touched.experience ? "error" : ""}
                message={errors.experience && touched.experience ? errors.experience : ""}
                handleBlur2={handleBlur}
              />
            </div>

            <ResumeDropzone />
            


            <div style={{ height: "2.69rem", width: "100%" }}></div>
            <CustomInputButton
              responsive={responsive}
              width={"100%"}
              size="small"
              onClick={() => handleSubmit(values)}
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
