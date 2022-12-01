import { useEffect } from "react";

const Files = ({crumbs, getFiles}) =>{
    useEffect(() => {
        const files = getFiles(crumbs[crumbs.length-1]);
        console.log(files);
    })
    
    return(
        <ul>
            assa
        </ul>
    )
};

export default Files;