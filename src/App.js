import React, {useState} from 'react';
import ImageGrid from './comps/imageGrid';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm'

function App() {

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
