import Album from "./Album"
import PortfolioHeader from "./PortfolioHeader";
import SideBar from "./SideBar"
import { useState, useEffect  } from "react";

function Library(props) {
    const [selectedAlbum, setSelectedAlbum] = useState("My Library")
    const [albums, setAlbums] = useState()
    const [thumbnails, setThumbnails] = useState()

    useEffect(() => {
        if (albums === undefined) {
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
                        return response
                    }
                } catch {
                    return null;
                }
            }
            const albums = async () => result().then(response => {return response.json()}).then((body) => {setAlbums(body)})
            albums()
        }
    })

    useEffect(() => {
        if (thumbnails === undefined) {
            const result = async () => {
                try {
                    const response = await fetch("/api/v1/photos", {
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
                        return response
                    }
                } catch {
                    return null;
                }
            }
            const thumbnails = async () => result().then(response => {return response.json()}).then((body) => {setThumbnails(body.data)})
            thumbnails()
        }
    })

    return (
        <div className="py-6 px-8 bg-primaryColor h-full relative">
            <PortfolioHeader 
                selectedAlbum={selectedAlbum}
            />
            <div className="flex py-2 divide-x-2 gap-2">
                <SideBar albums={albums} selectedAlbum={selectedAlbum} onClick={setSelectedAlbum}/>
                <div className="grow">
                    <Album thumbnails={thumbnails} />
                </div>
            </div>
            
        </div>
    )
}

export default Library;