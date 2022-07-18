import ExpandButton from "./ExpandButton";
//{props.albumExpanded ? <ChevronUpIcon className={(props.albumExpanded ? "visible " : "invisible ") + "absolute inset-x-0 duration-200 h-1/4 w-full top-0 my-[2px]"} /> : <ChevronDownIcon className="absolute inset-x-0 duration-200  h-1/4 w-full top-0" />}

function AlbumHeader(props) {
    return (
        <div className="flex justify-end w-full h-12">
            <ExpandButton albumExpanded={props.albumExpanded} setAlbumExpanded={props.setAlbumExpanded} />
        </div>
    )
}

export default AlbumHeader;