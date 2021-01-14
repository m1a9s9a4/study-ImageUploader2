import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import Upload from './components/Upload';
import Uploading from './components/Uploading';
import Uploaded from './components/Uploaded';
import firebase, { storage } from './firebase/config';

const classes = makeStyles({

});

const uploadToStore = (
  file: File,
  setPercent: (p: number) => void,
  setImageUrl: (url: string) => void,
  setIsUploading: (isUploading: boolean) => void
) => {
  if (!file) {
    console.log('ファイルが選択されていません');
    return;
  }
  const uploadTask = storage.ref(`/images/${file.name}`).put(file);

  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    (next) => {
      const percent = (next.bytesTransferred / next.totalBytes) * 100;
      setPercent(percent);
    },
    (err) => {
      console.error(err);
    },
    async () => {
      storage
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then(firebaseUrl => {
          setImageUrl(firebaseUrl);
          setIsUploading(false);
        })
    },
  )
}

const App = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [percent, setPercent] = useState(0);

  const storeImage = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const files =  e.target.files || e.dataTransfer.files;
    if (!files || files.length <= 0) {
      return;
    }

    uploadToStore(files[0], setPercent, setImageUrl, setIsUploading);
  }

  const UploadComponent = () => {
    if (isUploading) {
      return (<Uploading percent={percent} />)
    }

    if (imageUrl) {
      return (<Uploaded url={imageUrl} />)
    }

    return (<Upload setIsUploading={setIsUploading} storeImage={storeImage} />)
  }

  return (
    <>
      {UploadComponent()}
    </>
  );
}

export default App;
