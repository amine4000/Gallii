import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const useFirestore=(collection)=>{
    const [docs, setDocs]= useState([])

    useEffect(()=>{
        const unsub=projectFirestore.orderBy('createdAt', 'desc').onSnapshot((snap)=>{
           
            setDocs(documents)
            return ()=>unsub()
        })
    }, [collection])

    return {docs}
}