
const Breadcrumb = (props) =>{
    console.log(props);
    const isLast = (index)=>{
        return index === props.crumbs.length -1;
    }
    return(
        <nav>
            {props.crumbs.map((crumb, index)=>{
                const disabled = isLast(index) ? 'disabled':'';
                return (
                    <button className={`bt ${disabled}`} onClick={()=>props.selected(crumb)}>{crumb}</button>
                );
            })}
        </nav>
    )
};

export default Breadcrumb;