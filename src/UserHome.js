import Album from "./Album"
import PortfolioHeader from "./PortfolioHeader";
import SideBar from "./SideBar"
import FileUpload from "./FileUpload";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function Library(props) {
    const [selectedAlbum, setSelectedAlbum] = useState({albumName: "My Library", albumID: null})
    const [albums, setAlbums] = useState()
    const [thumbnails, setThumbnails] = useState()
    const [albumsNeedRefresh, setAlbumsNeedRefresh] = useState(false)
    const [thumbnailsNeedRefresh, setThumbnailsNeedRefresh] = useState(false)

    useEffect(() => {
        if (albums === undefined) {
            const result = async () => {
                try {
                    const response = await fetch("/api/v1/user/albums", {
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
            var result = null
            if (selectedAlbum.albumName === "My Library" || selectedAlbum.albumName === "Favorites") {
                result = async () => {
                    try {
                        const response = await fetch(
                            "/api/v1/photos?" + new URLSearchParams({
                                favorites: (selectedAlbum.albumName === "Favorites" ? true : false)
                            }), {
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
            } else {
                result = async () => {
                    try {
                        const response = await fetch("/api/v1/albums?" + new URLSearchParams({
                            albumID: selectedAlbum.albumID
                        }), {
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
            }
            const thumbnails = async () => result().then(response => {return response.json()}).then((body) => {setThumbnails(body.data)})
            thumbnails()
        }
    })

    function handleClick(album, albumID) {
        setThumbnails(undefined)
        const albumObj = {albumName: album, albumID: albumID}
        setSelectedAlbum(albumObj)
    }

    return (
        <div className="py-6 px-8 bg-primaryColor min-h-full w-full flex flex-col">
            <PortfolioHeader 
                selectedAlbum={selectedAlbum.albumName}
            />
            <div className="flex py-2 divide-x-2 gap-6 grow">
                <SideBar albums={albums} selectedAlbum={selectedAlbum} onClick={handleClick}/>
                <div className="pl-6 flex-1">
                    <Routes>
                        <Route path="/" element={<Album selectedAlbum={selectedAlbum} thumbnails={thumbnails} />} />
                        <Route path="/upload" element={<FileUpload />}/>
                    </Routes>
                </div>
            </div>
            
        </div>
    )
}

export default Library;