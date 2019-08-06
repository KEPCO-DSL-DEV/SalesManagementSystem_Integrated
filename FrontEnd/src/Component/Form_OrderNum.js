import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //backgroundColor:"#eeeeee"

  },
  margin: {
    margin: theme.spacing(0.5),
  //  marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 170,
  },
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();

  //const {params} = props.params;
  const readprops = (props.readonly==="true"); 

  return (
<div className={classes.root}>
    <h3 className={clsx(classes.margin, classes.textField)}>{props.title}</h3>
  
      <TextField
        id="Form_OrderNum_Mver"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="M-ver."
        value={props.OrderNum_Mver}
        onChange ={props.Mverhandler}
    
        
        InputProps={{
          endAdornment: <InputAdornment position="end">{props.placeholder}</InputAdornment>,
          readOnly: readprops,
        }}
      />
      <TextField
        id="Form_OrderNum_Sver"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="S-ver"
        value={props.OrderNum_Sver}
        onChange ={props.Sverhandler}
        
        InputProps={{
          endAdornment: <InputAdornment position="end">{props.placeholder}</InputAdornment>,
          readOnly: readprops,
        }}
      />
 
        <TextField
          id="Form_OrderNum_SAver" 
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="SA-ver"
          value={props.OrderNum_SAver}
          onChange ={props.SAverhandler}
          
          InputProps={{
            endAdornment: <InputAdornment position="end">{props.placeholder}</InputAdornment>,
            readOnly: readprops,
          }}
        />

        <TextField
          id="Form_OrderNum_MPack" 
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="M-pack"
          value={props.OrderNum_MPack}
          onChange ={props.MPackhandler}
          
          InputProps={{
            endAdornment: <InputAdornment position="end">{props.placeholder}</InputAdornment>,
            readOnly: readprops,
          }}
        />
      
      
        </div>
  );
}