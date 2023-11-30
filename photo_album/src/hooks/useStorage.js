import { useState, useEffect } from "react";
import {projectStorage} from '../firebase/config';

const useStorage = (file) => {
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    // first parameter is used to render all the files and second parameter is for dependencies
    useEffect( ()=>{
        //references: location where the file will be saved
        const storageRef=projectStorage.ref(file.name);
        
        //this put is async function, takes some time, so we take action once the state changes
        //storageRef.put(file)

        //when file is uploading or when state changes we fire a function which has a snapshot object, using snapshot object of that particular time,we calculate progress
        storageRef.put(file).on('state_change', (snap)=>{
            let percentage= (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err)
        }, async ()=>{                       //this function will fire when upload is fully complete 
           const url=await storageRef.getDownloadURL();
           setUrl(url);
        })
    },[file]);

    return {progress, url, error}
}

export default useStorage;

