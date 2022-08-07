import SideBarItem from "./SideBarItem";
import { HeartIcon, FilmIcon, CollectionIcon } from "@heroicons/react/outline";

function SideBar(props) {
    const albums = props.albums

    if (props.albums === undefined) {
        return <div className="w-1/6 h-full shrink"></div>
    }

    return (
        <div className="flex flex-col w-1/6 h-full shrink">
            <p className="font-semibold">Filmstrip</p>
            <div className="flex flex-col gap-1 text-xl text-left pb-2">
                <div className={(props.selectedAlbum.albumName === "My Library" ? "bg-gray-300" : "bg-transparent") + " flex gap-1 justify-start items-center rounded-md px-2 py-1"}>
                    <CollectionIcon className="h-6 aspect-square" />
                    <button className="w-min min-w-fit" onClick={() => props.onClick("My Library", null)}>My Library</button>
                </div>
                <div className={(props.selectedAlbum.albumName === "Favorites" ? "bg-gray-300" : "bg-transparent") + " flex gap-1 justify-start items-center rounded-md px-2 py-1"}> 
                    <HeartIcon className="h-6 aspect-square" />
                    <button className="w-min min-w-fit" onClick={() => props.onClick("Favorites", null)}>Favorites</button>
                </div>
                <div className={(props.selectedAlbum.albumName === "Portfolio" ? "bg-gray-300" : "bg-transparent") + " flex gap-1 justify-start items-center rounded-md px-2 py-1"}> 
                    <FilmIcon className="h-6 aspect-square" />
                    <button className="w-min min-w-fit" onClick={() => props.onClick("Portfolio", null)}>Portfolio</button>
                </div>
            </div>
            <p className="font-semibold">Albums</p>
            {albums.map((item, index) => <SideBarItem selectedAlbum={props.selectedAlbum} albumID={item.albumID} label={item.albumName} key={index} onClick={props.onClick} />)}
        </div>
    )
}

export default SideBar;