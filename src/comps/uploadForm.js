import React, { useState } from 'react';
import ProgressBar from './progressBar'
const UploadForm=()=>{

    const [file, setFile]=useState(null);
    const [error, setError]=useState(null)

    const types=['image/png', 'image/jpeg']

    const changeHandler=(e)=>{
        let selected=e.target.files[0]
        console.log(e.target.files[0])
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        } else{
            setFile(null);
            setError('please select an image png or jpeg')
        }
        //console.log(e.target.files)
    }



    return(
        <form>
          <input type="file" onChange={changeHandler}/>
          <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div >{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
          </div>
        </form>
    )

}

export default UploadForm;


// import React, { useState } from 'react';
// import ProgressBar from './progressBar';


// const UploadForm=()=>{

//     const [file, setFile]=useState(null);
//     const [error,setError]=useState(null);

//     const types=['image/jpeg', 'image/png'];

//     const changeHandler=(e)=>{
//         const selected=e.target.files[0];
//         if(selected && types.includes(selected.type)){
//             setFile(selected)
//             setError('')
//         } else{
//             setFile(null)
//             setError('please select a supported file: jpg, png')
//         }
//     }

//     return(
//         <form>
//             <input type="file" onChange={changeHandler}/>
//             {error && <div className="error">{error}</div>}
//             {file && <div>{file.name}</div>}
//             {file && <ProgressBar file={file} setFile={setFile}/>}
//         </form>
//     )
// }

// export default UploadForm;



// import React, { useState } from 'react'
// import ProgressBar from '../comps/progressBar'
// const UploadForm=()=>{

//     const [file,setFile]=useState(null);
//     const [error, setError]= useState(null)

//     const types=['image/png','image/jpeg']

//     const changeHandler=(e)=>{
//         let file=e.target.files[0];
//         if(types.includes(e.target.files[0].type)){
//             setFile(file)
//             setError(null)
//         } else{
//             setError('please select supported file type: png or jpeg')
//         }
//     }
//     return(
//         <form>
//             <input type="file" onChange={changeHandler}/>
//             {file ?<p>{file.name}</p>:null}
//             {error ?<p>{error}</p>:null}
//             {file && <ProgressBar file={file} setFile={setFile} />}
//         </form>
//     )
// }

// export default UploadForm;























