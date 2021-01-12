import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import Upload from './components/Upload';

const classes = makeStyles({

});

const App = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState('');
  const storeImage = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const files =  e.target.files || e.dataTransfer.files;
  }
  return (
    <div>
      <Upload setIsUploading={setIsUploading} setImage={setImage} />
    </div>
  );
}

export default App;
