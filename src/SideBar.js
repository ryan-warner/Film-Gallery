import SideBarItem from "./SideBarItem";
import { HeartIcon, FilmIcon } from "@heroicons/react/outline";

function SideBar(props) {
    const primaryLabels = ["My Library", "Favorites", "Albums"]
    const albums = props.albums

    if (props.albums === undefined) {
        return <div className="w-1/6 h-full"></div>
    }

    return (
        <div className="flex flex-col w-1/6 h-full">
            <div className="flex flex-col gap-1 text-xl text-left pb-4">
                <div className={(props.selectedAlbum === "My Library" ? "bg-gray-300" : "bg-transparent") + " flex gap-1 justify-start items-center rounded-md px-2 py-1"}>
                    <FilmIcon className="h-6 aspect-square" />
                    <button className="w-min min-w-fit" onClick={() => props.onClick("My Library")}>My Library</button>
                </div>
                <div className={(props.selectedAlbum === "Favorites" ? "bg-gray-300" : "bg-transparent") + " flex gap-1 justify-start items-center rounded-md px-2 py-1"}> 
                    <HeartIcon className="h-6 aspect-square" />
                    <button className="w-min min-w-fit" onClick={() => props.onClick("Favorites")}>Favorites</button>
                </div>
            </div>
            {albums.map((item, index) => <SideBarItem label={item.albumName} key={index} onClick={props.onClick} />)}
        </div>
    )
}

export default SideBar;