import Album from "./Album"
import PortfolioHeader from "./PortfolioHeader";
import SideBar from "./SideBar"
import { useState, useEffect  } from "react";

function Library(props) {
    const [selectedAlbum, setSelectedAlbum] = useState("My Library")
    const [albums, setAlbums] = useState()

    useEffect(() => {
        const result = async () => {
            try {
                const response = await fetch("/api/v1/albums", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("filmstripToken")
                    },
                    method: "GET",
                    mode: "cors"
                })
                if (response.ok) {
                    console.log(response)
                    return response
                }
            } catch {
                return null;
            }
            console.log("Hi")
        }
        result();
        console.log()
    })

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

export default Library;