function HeaderItem(props) {
    return (
    <div>
        <button 
            disabled={props.disabled ? true : false} 
            className={props.classProps + " text-md font-light"} 
            onClick={props.click}>
                <p>{props.item.heading}</p>
            </button>
    </div>
    );
}

export default HeaderItem;