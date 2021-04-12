import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timeStamp} from '../firebase/config';

const UseStorage=(file)=>{
    const [progress, setProgress]= useState(0);
    const [error, setError]=useState(null);
    const [url, setUrl]=useState(null)

    useEffect(()=>{
        //references
        const storageRef=projectStorage.ref(file.name)
        const collectionRef=projectFirestore.collection('images')
        

       
    }, [file])

    return {progress, url, error}
}

export default UseStorage;



