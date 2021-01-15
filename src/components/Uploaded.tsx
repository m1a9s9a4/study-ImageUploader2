import React from 'react';
import {makeStyles} from "@material-ui/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  url: string;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
  },
  uploadedDiv: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '85%',
    margin: '0 auto 20px',
    padding: "35px 20px",
    border: '1px dashed #97bef4',
    borderRadius: '12px',
    background: '#f6f8fb',
  },
  uploadedText: {
    textAlign: 'center',
  },
  imageContainer: {
    width: '80%',
    objectFit: 'contain',
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
  },
  urlInput: {
    borderRadius: '5px',
    border: '1px solid #696B6E',
    width: '70%',
    padding: '10px',
  },
  copyBtn: {
    borderRadius: '5px',
    backgroundColor: '#0d98de',
    border: '1px solid #fff',
    color: '#fff',
    padding: '10px',
  },
  title: {
    color: '#219653',
    fontSize: '40px',
  }
}));


function Uploaded({url}: Props) {
  const classes = useStyles();
  const imageId = 'imageUrl';
  const onClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    const target = document.getElementById(imageId) as HTMLInputElement;
    target.select();
    document.execCommand('copy');
  }

  return (
    <div className={classes.wrapper}>
      <h2>
        <FontAwesomeIcon className={classes.title} icon={faCheckCircle} />
      </h2>
      <p>Your Image has been uploaded!</p>
      <div className={ classes.uploadedDiv }>
        <img src={ url } alt="uploaded" className={classes.imageContainer}/>
        <div className={classes.inputWrapper}>
          <input id={imageId} value={url} className={classes.urlInput} readOnly />
          <button onClick={onClick} className={classes.copyBtn}>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default Uploaded;