import AlbumHeader from "./AlbumHeader";
import AlbumItem from "./AlbumItem";
import { useState } from "react";

function Album(props) {
    const [albumExpanded, setAlbumExpanded] = useState(false);

    const temp = [1,2,3,4,5,6,7,8,9,10]

    function handleClick() {
        setAlbumExpanded(!albumExpanded)
    }


    return (
        <div>
            <AlbumHeader setAlbumExpanded={handleClick} albumExpanded={albumExpanded} />
            <div className="grid grid-cols-4 gap-1">
                {temp.map((index) => <AlbumItem key={index} albumExpanded={albumExpanded} /> )}
            </div>
        </div>
    )
}

export default Album;