import SideBarItem from "./SideBarItem";

function SideBar(props) {
    const primaryLabels = ["My Library", "Favorites", "Albums"]
    const albums = ["Album 1", "Album 2", "Album 3", "Album 4", "Much longer album test"]


    return (
        <div className="flex flex-col w-1/6 h-full">
            {albums.map((item, index) => <SideBarItem label={item} key={index} onClick={props.onClick} />)}
        </div>
    )
}

export default SideBar;