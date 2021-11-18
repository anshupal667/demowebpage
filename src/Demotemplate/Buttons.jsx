import React from "react";
import { Button, Divider, Grid, Typography,makeStyles } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({

  button:{
      height:"15vh",
      width:"25vw",
      marginLeft:"200px",
  },
  btn:{
      textTransform:"capitalize",
      margin:"0px"
  }
}
));
 
const Buttons=()=>{
    const classes = useStyles();
    return(
        <>
        <div className={classes.button}>
        
        <Button className={classes.btn}>About</Button>
       
       
        <Button className={classes.btn}>Accessibility</Button>
        
        <Button className={classes.btn}>Help center</Button>
      
        <Button className={classes.btn} endIcon={<ExpandMoreIcon/>}>Privacy & terms</Button>
       
        <Button className={classes.btn}>Ad choices</Button>
       
        <Button className={classes.btn}>Advertising</Button>
       
        <Button className={classes.btn} endIcon={<ExpandMoreIcon/>}>Business services</Button>
       
        <Button className={classes.btn}>Get the linkedin appt</Button>
        
        <Button className={classes.btn} endIcon={<MoreHorizIcon/>}></Button>
       
        <Divider/>
        <Button className={classes.btn} endIcon={<LinkedInIcon color="primary"/>}>Linked</Button>
       
       
        </div>
        </>
    );
};
export default Buttons; 