import { useState } from 'react';
import './App.css';
import Breadcrumb from './components/Breadcrumb';
import Files from './components/Files';

function App() {
  const [crumbs, setCrumbs] = useState(['root']);
  const [files, setFiles] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);
  const selectedFile = (crumb) => {
    setCrumbs([...crumbs,crumb]);
    
  };
  const selectedCrumb = (index) => {
    let newCrumbs= [];
    for(let i=0;i<index+1;i++){
        newCrumbs[i] = crumbs[i];
    }
    setCrumbs([...newCrumbs])
    
  };
  return (
    <div>
      <header>
        <h1>Directory App</h1>
        <Breadcrumb
          crumbs={crumbs}
          selected={selectedCrumb}
          disableBtn={disableBtn}
        />
      </header>
      <section>
        <Files 
          files={files}
          setFiles={setFiles}
          crumbs={crumbs}
          selected={selectedFile}
          disableBtn={disableBtn}
          setDisableBtn={setDisableBtn}
        />
      </section>
    </div>
  );
}

export default App;
