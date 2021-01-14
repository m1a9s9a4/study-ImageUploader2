import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Line} from 'rc-progress';

type Props = {
  percent: number
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
  },
  uploadingDiv: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '85%',
    margin: '0 auto 20px',
    padding: "35px 20px",
    border: '1px dashed #97bef4',
    borderRadius: '12px',
    background: '#f6f8fb',
  },
  uploadingText: {
    textAlign: 'center',
  }
}));

function Uploading({percent}: Props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2>Uploading your image...</h2>
      <p>Wait until the process finish...</p>
      <div className={classes.uploadingDiv}>
        <p className={classes.uploadingText}>
          Uploading... {percent}%
        </p>
        <Line percent={percent} strokeWidth={4} strokeColor="#97bef4" />
      </div>
    </div>
  )
}

export default Uploading;