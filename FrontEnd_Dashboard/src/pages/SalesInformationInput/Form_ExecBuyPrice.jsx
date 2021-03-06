import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import numberWithCommas from '../../utils/numberWithCommas';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    height: 33,
    //backgroundColor:"#eeeeee"
  },
  margin: {
    margin: theme.spacing(0),
    //  marginTop: theme.spacing(3)
  },
  subjectText: {
    flexBasis: 0,
  },

  textField: {
    flexBasis: 150,
    height: 36,
  },
}));

export default function OutlinedInputAdornments(props) {
  const classes = useStyles();

  //const {params} = props.params;
  const readprops = props.readonly === 'true';

  return (
    <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.subjectText)}>
        {props.title}
      </h3>

      <TextField
        InputLabelProps={{ shrink: true }}
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_ExecBuyPrice_Mver"
        type="text"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="M-ver."
        value={
          props.ExecBuyPrice_Mver
            ? numberWithCommas(props.ExecBuyPrice_Mver)
            : ''
        }
        onChange={props.Mverhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      {'\u00A0'}
      {'\u00A0'}
      <TextField
        InputLabelProps={{ shrink: true }}
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_ExecBuyPrice_Sver"
        type="text"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="S-ver"
        value={
          props.ExecBuyPrice_Sver
            ? numberWithCommas(props.ExecBuyPrice_Sver)
            : ''
        }
        onChange={props.Sverhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      {'\u00A0'}
      {'\u00A0'}
      <TextField
        InputLabelProps={{ shrink: true }}
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_ExecBuyPrice_SAver"
        type="text"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="SA-ver"
        value={
          props.ExecBuyPrice_SAver
            ? numberWithCommas(props.ExecBuyPrice_SAver)
            : ''
        }
        onChange={props.SAverhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}

      {'\u00A0'}
      {'\u00A0'}
      <TextField
        InputLabelProps={{ shrink: true }}
        //InputLabelProps={{ shrink: props.shrink }}
        id="Form_ExecBuyPrice_MPack"
        type="text"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="M-pack"
        value={
          props.ExecBuyPrice_MPack
            ? numberWithCommas(props.ExecBuyPrice_MPack)
            : ''
        }
        onChange={props.MPackhandler}
        InputProps={{
          className: classes.textField,
          endAdornment: (
            <InputAdornment position="end">{props.placeholder}</InputAdornment>
          ),
          readOnly: readprops,
        }}
      />
    </div>
  );
}
