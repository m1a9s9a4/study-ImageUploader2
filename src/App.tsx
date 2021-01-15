import React, {useState} from 'react';
import Upload from './components/Upload';
import Uploading from './components/Uploading';
import Uploaded from './components/Uploaded';
import firebase, { storage } from './firebase/config';
import {v4 as uuidv4} from 'uuid';

const uploadToStore = (
  file: File,
  setPercent: (p: number) => void,
  setImageUrl: (url: string) => void,
  setIsUploading: (isUploading: boolean) => void
) => {
  if (!file) {
    console.log('ファイルが選択されていません');
    setIsUploading(false);
    setPercent(0);
    return;
  }
  const newFileName = uuidv4() + '-' + Date.now();
  const uploadTask = storage.ref(`/images/${newFileName}`).put(file);

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
        .child(newFileName)
        .getDownloadURL()
        .then(firebaseUrl => {
          setImageUrl(firebaseUrl);
          setIsUploading(false);
          setPercent(0);
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
