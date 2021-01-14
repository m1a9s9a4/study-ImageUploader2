import React from 'react';
import {makeStyles} from "@material-ui/styles";

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
  }
}));


function Uploaded({url}: Props) {
  const classes = useStyles();
  const imageId = 'imageUrl';
  const onClick = (e: React.MouseEvent): void => {

  }

  return (
    <div className={classes.wrapper}>
      <h2>Upload Success!!</h2>
      <p>Your Image has been uploaded!</p>
      <div className={ classes.uploadedDiv }>
        <img src={ url } alt="uploaded" className={classes.imageContainer}/>
        <input id={imageId} placeholder={url} />
        <button onClick={onClick} type="button">Copy</button>
      </div>
    </div>
  )
}

export default Uploaded;