import AlbumHeader from "./AlbumHeader";
import AlbumItem from "./AlbumItem";
import { useState } from "react";

function Album(props) {
    const [albumExpanded, setAlbumExpanded] = useState(false);

    const thumbnails = props.thumbnails

    function handleClick() {
        setAlbumExpanded(!albumExpanded)
    }

    if (thumbnails === undefined) {
        return <div></div>
    }

    return (
        <div>
            <AlbumHeader setAlbumExpanded={handleClick} albumExpanded={albumExpanded} />
            <div className="grid grid-cols-4 gap-1">
                {thumbnails.map((thumbnail,index) => <AlbumItem thumbnail={thumbnail} key={index} albumExpanded={albumExpanded} /> )}
            </div>
        </div>
    )
}

export default Album;