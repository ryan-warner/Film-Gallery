import { useState } from "react";
import { 
        FilterIcon, //Filter
        CloudUploadIcon, //Upload Image
        CloudDownloadIcon, //Download Image
        TrashIcon, //Delete Image - Prompt for album/library deletion, and/or general confirmation
        ExternalLinkIcon, // Add photo to album/change albums it is in
        SortAscendingIcon, //Sort ascending
        SortDescendingIcon //Sort descending
    } from "@heroicons/react/outline";

// Actions:
// Sort by camera, date, film, name?
// Filter by camera, date, film.
// Search?
// Add/remove from album
// Upload photos
// remove from favorites

// Types?
// album
// favorites
// library

function AlbumToolbar(props) {
    const [selectedTool, setSelectedTool] = useState(false)
    return (
        <div className="w-full overflow-visible">
            <div className="w-min h-min relative">
                <button onClick={() => setSelectedTool(!selectedTool)} className="bg-primaryAccent text-white w-24 h-12 rounded-lg">Test</button>
                <div className={(selectedTool ? "visible" : "invisible") + " bg-secondaryAccent absolute top-full left-0 w-[150%] h-8 my-2 rounded-lg drop-shadow-lg"}>
                    <button onClick={() => console.log("Yuh")} className="w-full h-full text-left mx-2">More Test</button>
                </div>
            </div>
        </div>
    )
}

export default AlbumToolbar;