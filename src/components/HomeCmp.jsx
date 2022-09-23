import React,{useState} from 'react'
//import { WebcamCapture } from './WebcamCapture';
import { Grid, Button, Paper,makeStyles } from "@material-ui/core";
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import './homeCmp.css'
import Webcam from "react-webcam";


const useStyles = makeStyles(theme => ({
  topGrid:{
    padding:"1em", margin:"1em", backgroundColor: "rgba(236, 236, 236, 0.2)",borderRadius:"1em",
    border:"1px solid #cccccc", marginBottom:"3em"
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridTemplateRows: "2fr 1fr 1fr 1fr",
    gridGap:"0.5em",
    background:"none",
    padding: "1em",
  },
  gridItem: {
    textAlign: "center"
  },
  boldTitle:{
    paddingLeft:'5em',
    paddingTop:'1em',
    fontWeight:"bolder",
    textAlign:"left !important",
    // border:"1px solid #000"

  },
  normalTitle:{
    paddingTop:'1em',
    textAlign:"left !important",
    // border:"1px solid #000"
  },
  titleTab:{
    fontSize:"18px", 
    fontWeight:"bolder",
    textAlign:"center",
    fontStyle:"SF Pro Rounded"
  },
  summaryCards: {
    marginBottom:"3em",
    display: "flex",
    padding: "0em 5em",
    flexWrap: "wrap",
  },
  summaryCard: {
    borderRadius:"1em",
    padding: "5em",
  },
  root: {
    flexGrow: 1,
    padding:"1em"
  },
  activeTab: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: "#fff",
    background:"#2C313D",
    borderRadius:"1em",
    padding: "3em 2em",
  },
  inActiveTab:{
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: "#fff",
    background: theme.palette.text.secondary,
    borderRadius:"1em",
    padding: "3em 2em",
  },
  paperTitle: {
    padding: "2em 5em",
    textAlign: 'center',
    border:"none",
    background:"none",
    margin:"0 auto",
    justifyContent:"center",
    color: theme.palette.text.secondary,
  },
  roundedBorder: {
    border: "2px solid #039BE5",
    borderRadius: "50%",
    width: "120px",
    padding:"5em",
    height: "120px",
    margin: "0 auto"
}
}));



const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const Home = () => {
//
const classes = useStyles();
const submitForm = () =>
{
    alert("Form submitted")
}

const [image,setImage]=useState('');
const [takePic,setTakePic]=useState(false);
const webcamRef = React.useRef(null);


const capture = React.useCallback(
    () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc)
    setTakePic(false)
});
const deletePic = () => {
  setImage("")
  setTakePic(false)
};



return (
<div className="home-container">
 <div className="container">
   <div className="text">
    <h1 style={{textAlign:"center"}}>Fill up this form!</h1>
   <form className="form">


   <Paper className={classes.paperTitle}>
      <span className={classes.titleTab}>
        Upload Selfie Picture
      </span><br/>
      <span>
        Please upload a high-quality image of your selected ID. <br/>
        We use your selfie to compare with your ID Photo
      </span><br/><br/>
      <>
        { takePic?
        <>
          <Webcam
              audio={false}
              height={200}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={220}
              videoConstraints={videoConstraints}
          /> <br/>
          <button onClick={(e) => {
                  e.preventDefault();
                  capture();
              }}
                  className="webcam-btn">
                  Capture
          </button>
        </>
        :
        <div>
        {image != ''?
        <>
          <img src={image} />

          <br/>
          <button onClick={(e) => {
                  e.preventDefault();
                  deletePic();
              }}
                  className="webcam-btn">
                  Delete Selfie
          </button>
        </>
        :
        <>
        <div className={classes.roundedBorder}>
          <PhotoCameraOutlinedIcon size="small"></PhotoCameraOutlinedIcon><br/>
          <Button variant="contained" fullWidth={true} color="primary" style={{width:"100%",background:"#039BE5"}}
          onClick={() => setTakePic(true)}>
            <span style={{textTransform: "capitalize"}}>Take Selfie</span>
          </Button>
              </div><br/><br/>  
        </>}
     
        </div> 
        }
      </>
     
  </Paper>
      </form>
    </div>
 </div>
</div>
)
}
export default Home