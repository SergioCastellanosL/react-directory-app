import { useEffect} from "react";

const Files = ({crumbs, setFiles, files, selected, disableBtn, setDisableBtn}) =>{
    useEffect(() => {
        setDisableBtn(true);
        let requestURL = `https://parsehub-challenge-api.vercel.app`;
        for(let i=0;i<crumbs.length;i++){
            requestURL = requestURL + `/${crumbs[i]}`
        }
        let request = new Request(requestURL);
        fetch(request).then((response) => response.json())
        .then((data) => {
            setFiles(data.response);
            setDisableBtn(false);
        });
    },[crumbs])
    
    return(
        <ul>
            {
            Array.isArray(files) ?
            files.map((file, index)=>{
                const disabled= disableBtn ? 'disabled': '';
                return (
                    <button key={index} disabled={disabled} className={`files`} onClick={()=>{selected(file)}}>{file}</button>
                );
            }) : <p>{crumbs[crumbs.length-1]}: is a file</p>
            }
        </ul>
    )
};

export default Files;