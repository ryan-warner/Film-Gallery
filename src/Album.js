import AlbumHeader from "./AlbumHeader";
import AlbumItem from "./AlbumItem";
import { useState } from "react";

function Album(props) {
    const [albumExpanded, setAlbumExpanded] = useState(true);

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
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-1">
                {thumbnails.map((thumbnail,index) => <AlbumItem editFavorites={props.selectedAlbum !== "Favorites"} thumbnail={thumbnail} key={index} albumExpanded={albumExpanded} /> )}
            </div>
        </div>
    )
}

export default Album;