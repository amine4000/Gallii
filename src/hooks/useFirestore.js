import {useEffect, useState} from 'react';
import {projectStorage, projectFirestore} from '../firebase/config'

const useFirestore=(collection)=>{
    const [docs, setDocs]= useState([]);

    useEffect(()=>{
        const unsub=projectFirestore.collection(collection).orderBy('createdAt', 'desc').onSnapshot((snap)=>{
            let documents=[];

            return(
                snap.forEach(doc=>{
                    documents.push({
                        ...doc.data(),
                        id:doc.id,
                    })
                }),
                setDocs(documents)
            )

        }, )

        return ()=>{ unsub()}
    }, [collection])

    return {docs}
}

export default useFirestore