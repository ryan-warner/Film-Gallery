import { useRef, useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";

function AlbumItem(props) {
    const imageRef = useRef(null)
    const [isFavorite, setIsFavorite] = useState()
    const [updateFavorite, setUpdateFavorite] = useState(false)
    var AR = 0.9

    useEffect(() =>{
        const imageWidth = imageRef.current.clientWidth;
        const imageHeight = imageRef.current.clientHeight;
        AR = props.albumExpanded ? Math.max(imageWidth / imageHeight, imageHeight / imageWidth): 0.9
        imageRef.current.style.transform = `scaleX(${AR}) scaleY(${AR})`
    },[props.albumExpanded])

    useEffect(() => {
        if (updateFavorite) {
            const favorite = isFavorite ===  undefined ? props.thumbnail.favorite : isFavorite
            const photoID = props.thumbnail.imageID
            const result = fetch(
                "/api/v1/photo/favorite",
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("filmstripToken")
                    },
                    method: "POST",
                    mode: "cors",
                    body: JSON.stringify(
                        {
                        "setFavorite": !favorite,
                        "photoID": photoID
                    })
                }
            )
            result.then((response) => response.json()).then((body) => (setIsFavorite(body.isFavorite), setUpdateFavorite(false)))
        }
    }, [updateFavorite])

    function handleFavorite() {
        setUpdateFavorite(true)
    }

    return (
        <div className="w-full aspect-square flex items-center justify-center overflow-hidden relative group">
            {
                props.thumbnail.type === "png" ? <img src={"data:image/png;base64," + props.thumbnail.image} className={(props.thumbnail.orientation === "portrait" ? "h-full": "w-full") + " rounded-xl duration-200 ease-in"} ref={imageRef}></img> : 
                <img src={"data:image/jpeg;base64," + props.thumbnail.image} className={(props.thumbnail.orientation === "portrait" ? "h-full": "w-full") + " rounded-xl duration-200 ease-in"} ref={imageRef}></img>
            }
            <div className="absolute inset-0">
                <button title={(props.thumbnail.favorite ? "Remove from Favorites" : "Add to Favorites")} onClick={() => handleFavorite()}>
                    <HeartIcon className={(isFavorite !== undefined ? (isFavorite ? "visible fill-white" : "invisible group-hover:visible fill-transparent") : (props.thumbnail.favorite ? "visible fill-white" : "invisible group-hover:visible fill-transparent")) + " h-5 aspect-square absolute bottom-0 right-0 m-2 stroke-white"} />
                </button>
            </div>
        </div>
    )
}

export default AlbumItem;