import SideBarItem from "./SideBarItem";

function SideBar(props) {
    const primaryLabels = ["My Library", "Favorites", "Albums"]
    const albums = props.albums

    if (props.albums === undefined) {
        return <div className="w-1/6 h-full"></div>
    }

    return (
        <div className="flex flex-col w-1/6 h-full">
            {albums.map((item, index) => <SideBarItem label={item.albumName} key={index} onClick={props.onClick} />)}
        </div>
    )
}

export default SideBar;