import { useState } from 'react';
import Breadcrumb from './components/Breadcrumb'
import Files from './components/Files'

function App() {
  const [crumbs, setCrumbs] = useState(['root']);
  const [files, setFiles] = useState([]);
  const getFiles = async (parentName) => {
    let requestURL = `http://localhost:3001/${parentName}`;
    let request = new Request(requestURL);
    let response = await fetch(request);
    return await response.json();
  };
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <div>
      <header>
        <h1>Title</h1>
        <Breadcrumb
          crumbs={crumbs}
          selected={selected}
        />
      </header>
      <section>
        <Files 
          crumbs={crumbs}
          getFiles={getFiles}
        />
      </section>
    </div>
  );
}

export default App;
