import React from 'react';
import {makeStyles} from "@material-ui/styles";
import logo from '../images/upload.svg';

type Props = {
  setIsUploading: (uploading: boolean) => void,
  setImage: (url: string) => void,
}

const useStyles = makeStyles((theme) => ({
  uploadDiv: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '85%',
    margin: '0 auto 20px',
    paddingTop: '35px',
    paddingBottom: '35px',
    border: '1px dashed #97bef4',
    borderRadius: '12px',
    background: '#f6f8fb',
  },
  wrapper: {
    textAlign: 'center',
    color: '#4e4d4d',
  },
  uploadText: {
    color: '#ababab',
  }
}));

function Upload({setIsUploading, setImage}: Props) {
  const classes = useStyles();
  const onDrop = (e: any): void => {
    e.preventDefault();
    setIsUploading(true);
    console.log('hello');
  }

  const onDragOver = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();
    console.log('on drag over');
  }

  return (
    <div className={classes.wrapper} draggable={true} onDrop={onDrop} onDragOver={onDragOver}>
      <h2>Upload your image</h2>
      <p>File should be Jpeg, Png...</p>
      <div className={classes.uploadDiv}>
        <img src={logo} alt="upload image here" />
        <p className={classes.uploadText}>Drag & Drop your image here</p>
      </div>
    </div>
  )
}

export default Upload;