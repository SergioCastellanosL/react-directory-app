
const Breadcrumb = (props) =>{
    const isDisableBtn = (index)=>{
        if(index === props.crumbs.length -1)
            return true;
        return props.disableBtn;
    }
    return(
        <nav>
            {
            props.crumbs.map((crumb, index)=>{
                const disabled = isDisableBtn(index) ? 'disabled':'';
                return (
                    <button key={index} disabled={disabled} className={`crumb ${disabled}`} onClick={()=>props.selected(index)}>{crumb}</button>
                );
            })}
        </nav>
    )
};

export default Breadcrumb;