import React, { useEffect } from "react";
import { makeStyles, styled } from "@mui/styles";
import useResponsiveStyles from "../../utils/MediaQuery";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import UploadIcon from "../icons/UploadIcon";
import { Slider } from "@mui/material";
import { useState } from "react";
import SuccessIcon from "../icons/textfield/SuccessIcon";
import CustomAllTypography from "../typography/CustomTypography";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import { CloseOutlined } from "@mui/icons-material";
import CloseIcon from "../icons/CloseIcon";
import PdfImage from "../../assets/pdfImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setResume } from "../../store/slices/interviewee/intervieweeSlice";

const CustomSoundBar = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-root": {
    "@media (pointer: coarse)": {
      padding: "0px !important",
    },
  },
  "& .MuiSlider-track": {
    backgroundColor: "black", //color of track
    border: "none",
    opacity: 1,
    // width:'2%',
  },
  "& .MuiSlider-rail": {
    background: "white", ////color of the slider outside teh area between thumbs
    opacity: 1,
  },
}));

const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles },
}) => {

  const dispatch=useDispatch()

  // useEffect(()=>{
  //   console.log("FILE UPLOAD", files[0]?.meta?.status)
  //   if(files[0]?.meta?.status==='done'){
  //     console.log("DONE UPLOAD------------>>>>>", files[0])
  //     dispatch(setResume(files[0]))
  //   }
  // },[files])
  
  return (
    <div>
      {files.length == 0 && (
        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
      )}
      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "0.62rem",
            border: "1px dotted black",
            padding: "1rem",
            // marginTop: "2.31rem",
            alignItems: "center",
            justifyContent: files.length == 1 ? "space-around" : "",
          }}
        >
          {previews}
        </div>
      )}
    </div>
  );
};
const Preview = ({ meta, files }, ...props) => {
  const [loaded, setLoaded] = useState(0);
  const [doneLoading, setDoneLoading] = useState(false);
  const responsive = useResponsiveStyles();
  const width = !responsive.isMobile ? "6.87rem" : "5rem";
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setLoaded(meta?.percent);
    if (meta.percent===100) {
      setTimeout(() => {
        console.log("loaed");
        setDoneLoading(true);
      }, 1000);
    }
  }, [meta]);
  const onMouseOver = (e) => {
    e.stopPropagation();
    console.log("hoverr");
    doneLoading && setHovered(true);
  };

  return (
    <div
      style={{
        height: width,
        width: width,
        display: "flex",
        position: "relative",
      }}
    >
      <img
        onMouseOver={onMouseOver}
        style={{ height: "100%", width: "100%", zIndex: 9 }}
        src={meta?.previewUrl ? meta?.previewUrl : PdfImage}
      />

      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          display: doneLoading ? "none" : "flex",
          height: width,
          zIndex: 10,
          width: width,
          position: "absolute",
          top: 0,
          alignItems: "center",
          justifyContent: "center",
          left: 0,
        }}
      >
        {loaded < 100 ? (
          <CustomSoundBar
            sx={{ height: "10px", padding: "0px !important", width: "80%" }}
            aria-label="Volume"
            value={loaded}
          />
        ) : (
          <SuccessIcon />
        )}
      </div>
      {hovered && (
        <div
          onMouseOut={(e) => {
              e.stopPropagation();
            setHovered(false);
          }}
          style={{
            background: "rgba(0,0,0,0.4)",
            zIndex: 10,
            height: width,
            width: width,
            position: "absolute",
            top: 0,
            display: "flex ",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            left: 0,
          }}
        >
          <CloseIcon
            onClick={() =>
              files.forEach((f) => {
                console.log(f,meta)
                if (f?.meta?.id == meta?.id) f.remove();
              })
            }
          />
          <CustomAllTypography
            name={meta.name}
            textcolor={"white"}
            sx={{
              fontSize: "0.75rem",
              maxWidth: "100%",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          />
          <CustomAllTypography
            name={`${Math.ceil(meta.size / 1000)}KB`}
            textcolor={"white"}
            sx={{ fontSize: "6px" }}
          />
        </div>
      )}
    </div>
  );
};
const Input = ({ accept, onFiles, files, getFilesFromEvent }) => {
  const text = files.length > 0 ? "Add more files" : "Choose files";
  const responsive = useResponsiveStyles();


  return (
    <label
      style={{
        color: "#fff",
        cursor: "pointer",
        borderRadius: 3,
        minHeight: "10.62rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UploadIcon />
      <div style={{ textAlign: "center", color: "#212121" }}>
        <CustomAllTypography
          name={"Upload your resume here"}
          sx={{ fontSize: "0.75rem" }}
          textcolor={"#8A8894"}
        />
        <CustomAllTypography
          name={"PDF, Word format only, File Size: 3 MB max"}
          sx={{ fontSize: "0.75rem" }}
          textcolor={"#8A8894"}
        />
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        accept={accept}
        onChange={(e) => {
          getFilesFromEvent(e).then((chosenFiles) => {
            onFiles(chosenFiles);
          });
        }}
      />
    </label>
  );
};
const CustomLayout = ({status, message}) => {
  const dispatch= useDispatch()
  const getUploadParams = () => ({ url: "https://httpbin.org/post" });
  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };

  const resume = useSelector((state) => state.rootReducer.interviewee.resume);
  const handleSubmit = (files, allFiles) => {
    console.log("AFTER SUBMIT",files.map((f) => f));
    allFiles.forEach((f) => f.remove());
  };


  const  fileToBase64=(file)=> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const base64Data = reader.result.split(',')[1]; // Extract base64 data portion
        resolve(base64Data);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }

  const handleChangeStatus = async (files, status) => {
    if (status === 'done') {
      console.log("FILE AFTER DONE",files)
      dispatch(setResume(files))
      // const base64Data = await fileToBase64(files.file);
      //dispatch(setResume({ id: files.file.id, name: files.file.name, data: base64Data }));
    }
  };

  return (<>

    <Dropzone
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
      PreviewComponent={Preview}
      multiple={false}
      maxFiles={5}
      disabled={(files) =>
        files.some((f) =>
          ["preparing", "getting_upload_params", "uploading"].includes(
            f.meta.status
          )
        )
      }
      accept=" image/*,audio/*,video/*,.pdf"
      //   accept=".pdf,.doc"
      styles={{
        dropzone: {
          border: `1px dotted ${status==="error"?'red': "black"}`,
          minHeight: "10.62rem",
          maxHeight: 100,
        },
      }}
      InputComponent={Input}
      getFilesFromEvent={getFilesFromEvent}
      onChangeStatus={handleChangeStatus}
    />
      </>
  );
};
const ResumeDropzone = ({ multiple = false , isTouched, status, message}) => {
  return <>
  <CustomLayout status={status} message={message}/>
  {/* {
    <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', 'alignItems':'center'}}>
      <CustomAllTypography name={"Required Resume"} textcolor={'red'}></CustomAllTypography>
    </div>
  } */}
  </>;
};

export default ResumeDropzone;
