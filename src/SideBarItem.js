function SideBarItem(props) {
    return (
        <div className={(props.selectedAlbum === props.label ? "bg-gray-300" : "bg-transparent") + " flex gap-1 justify-start items-center rounded-md px-2 py-1"}>
            <button
                className="text-xl truncate w-full text-left"
                onClick={() => props.onClick(props.label, props.albumID)}
                disabled={props.disabled ? true : false}
            >
                {props.label}
            </button>
        </div>
    )
}

export default SideBarItem;