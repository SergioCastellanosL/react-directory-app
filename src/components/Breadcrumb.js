
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
                    <button key={crumb} disabled={disabled} className={`crumb ${disabled}`} onClick={()=>props.selected(crumb)}>{crumb}</button>
                );
            })}
        </nav>
    )
};

export default Breadcrumb;