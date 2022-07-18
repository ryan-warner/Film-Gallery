import Album from "./Album"
import PortfolioHeader from "./PortfolioHeader";
import SideBar from "./SideBar"
import { useState } from "react";

function Portfolio(props) {
    const [selectedAlbum, setSelectedAlbum] = useState("My Library")

    return (
        <div className="py-6 px-8 bg-primaryColor h-full relative">
            <PortfolioHeader 
                selectedAlbum={selectedAlbum}
            />
            <div className="flex py-2 divide-x-2 gap-2">
                <SideBar onClick={setSelectedAlbum}/>
                <div className="grow">
                    <Album />
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio;