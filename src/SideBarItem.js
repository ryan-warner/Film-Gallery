function SideBarItem(props) {
    return (
        <button
            className="text-xl truncate w-full text-left"
            onClick={() => props.onClick(props.label)}
            disabled={props.disabled ? true : false}
        >
            {props.label}
        </button>
    )
}

export default SideBarItem;