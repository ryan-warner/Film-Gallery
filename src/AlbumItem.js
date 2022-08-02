import { useRef, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/outline";

function AlbumItem(props) {
    const imageRef = useRef(null)
    var AR = 1

    useEffect(() =>{
        const imageWidth = imageRef.current.clientWidth;
        const imageHeight = imageRef.current.clientHeight;
        AR = props.albumExpanded ? Math.max(imageWidth / imageHeight, imageHeight / imageWidth): 0.9
        imageRef.current.style.transform = `scaleX(${AR}) scaleY(${AR})`
    },[props.albumExpanded])

    return (
        <div className="w-full aspect-square flex items-center justify-center overflow-hidden relative group">
            {
                props.thumbnail.type === "png" ? <img src={"data:image/png;base64," + props.thumbnail.image} className={(props.thumbnail.orientation === "portrait" ? "h-full": "w-full") + " rounded-xl duration-200 ease-in"} ref={imageRef}></img> : 
                <img src={"data:image/jpeg;base64," + props.thumbnail.image} className={(props.thumbnail.orientation === "portrait" ? "h-full": "w-full") + " rounded-xl duration-200 ease-in"} ref={imageRef}></img>
            }
            <div className="absolute inset-0">
            <p>{!props.thumbnail.favorite ? "TRUE" : "FALSE"}</p>
                <HeartIcon className="invisible group-hover:visible h-5 aspect-square absolute bottom-0 right-0 m-2 fill-red-500 stroke-red-500" />
            </div>
        </div>
    )
}

export default AlbumItem;