import ExpandButton from "./ExpandButton";
import AlbumToolbar from "./AlbumToolbar";
//{props.albumExpanded ? <ChevronUpIcon className={(props.albumExpanded ? "visible " : "invisible ") + "absolute inset-x-0 duration-200 h-1/4 w-full top-0 my-[2px]"} /> : <ChevronDownIcon className="absolute inset-x-0 duration-200  h-1/4 w-full top-0" />}

function AlbumHeader(props) {
    return (
        <div className="flex justify-between w-full h-12 overflow-visible z-20">
            <AlbumToolbar />
            <ExpandButton albumExpanded={props.albumExpanded} setAlbumExpanded={props.setAlbumExpanded} />
        </div>
    )
}

export default AlbumHeader;