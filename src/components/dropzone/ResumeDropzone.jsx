import React from "react";
import { makeStyles } from "@mui/styles";
import {useDropzone} from 'react-dropzone'
import useResponsiveStyles from "../../utils/MediaQuery";
import UploadIcon from "../icons/UploadIcon";

const useStyle = makeStyles((theme) => ({
    parent: {
        backgroundColor: '#E5E4FF',
        width: '100%',
        background: 'linear-gradient(337deg, #E3E5FB 0%, #E6E7FA 12.50%,#F8F5F6 100%)',
        position: 'relative',
    },
    vectorBoxRight: {
        position: 'absolute',
        right: '0',
        top: '0'
    },
    vectorBoxLeft: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        maxWidth: '40rem'
    },
    cardBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6.25rem 0'
    },
    cardContainer: {
        maxWidth: "31.8rem",
        padding: '3.25rem 4.75rem 4.25rem 3.44rem'
    },
    textfieldContainer: {
        padding: '0 0 1.5rem 0',
    },
    dropZone: {
        padding: '2.5rem 8.75rem 3.75rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px dashed',
        [theme.breakpoints.down("md")]: {
            padding: '1.5rem 5.75rem',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '1.5rem 3.75rem',
        },
    },
    dropZoneContentBox: {
        maxWidth: {xs:'100%',md:'20.1rem'},
        textAlign: 'center',
    }
}));

const ResumeDropzone = () => {
    const classes = useStyle();
    const responsive = useResponsiveStyles();
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
    return (
      <div className={classes.dropZone}  {...getRootProps()}>
        <input {...getInputProps()} />
        { acceptedFiles.length === 0 ? 
            <div className={classes.dropZoneContentBox}>
                <UploadIcon />
                {
                    !responsive.isMobile ?
                    <div style={{ textAlign: "center", color: "#212121" }}>
                    <span>Upload your resume here</span>
                    <br />
                    <span>(PDF, Word format only, File Size: 3 MB max)</span>
                    </div>
                    :
                    ""
                }
            </div>
            :""
        }
        {/* Display selected files list */}
        {acceptedFiles.length > 0 && (
          <div >
              {acceptedFiles.map((file) => (
                <h6 style={{width:{md:'max-content',xs:'100%'}}}>{file.name}</h6>
              ))}
          </div>
        )}
      </div>
    );
  };
  
  export default ResumeDropzone;