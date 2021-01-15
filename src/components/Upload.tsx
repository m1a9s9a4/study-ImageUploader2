import React, {FormEvent} from 'react';
import {makeStyles} from "@material-ui/styles";
import logo from '../images/upload.svg';

type Props = {
  setIsUploading: (uploading: boolean) => void,
  storeImage: (e: any) => void,
}

const useStyles = makeStyles((theme) => ({
  uploadDiv: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '338px',
    height: '218.9px',
    margin: '0 auto 20px',
    paddingTop: '35px',
    paddingBottom: '35px',
    border: '1px dashed #97BEF4',
    borderRadius: '12px',
    background: '#f6f8fb',
  },
  wrapper: {
    textAlign: 'center',
    color: '#4e4d4d',
  },
  uploadText: {
    color: '#BDBDBD',
  },
  textBetween: {
    margin: '30px 0',
    color: '#BDBDBD',
  },
}));

function Upload({setIsUploading, storeImage}: Props) {
  const classes = useStyles();
  const onDrop = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsUploading(true);
    storeImage(e);
  }
  const onChange = (e: FormEvent): void => {
    e.preventDefault();
    setIsUploading(true);
    storeImage(e);
  }

  const onDragOver = (e: React.MouseEvent): void => {
    e.preventDefault();
  }

  return (
    <div className={classes.wrapper} draggable={true}>
      <h2>Upload your image</h2>
      <p>File should be Jpeg, Png...</p>
      <div className={classes.uploadDiv} onDrop={onDrop} onDragOver={onDragOver}>
        <img src={logo} alt="upload here" />
        <p className={classes.uploadText}>Drag & Drop your image here</p>
      </div>
      <p className={classes.textBetween}>
        Or
      </p>
      <input type="file" onChange={onChange} placeholder="Upload file" />
    </div>
  )
}

export default Upload;