import { useState, useEffect } from "react";
import exifr from 'exifr';
import { FilmIcon } from "@heroicons/react/outline"


function UploadItem(props) {
    const [fileRead, setFileRead] = useState(false);
    const [orientationData, setOrientationData] = useState();
    const [file, setFile] = useState();
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        if (orientationData === undefined) {
            var fileData = {}
            exifr.parse(props.file, {pick: ['ExifImageWidth','ExifImageHeight','Orientation']}).then(output => {if (output === undefined) {fileData = {orientation:1}}else {fileData = output}}).then(() => {return exifr.orientation(props.file)}).then(orientationOutput => {if (orientationOutput !== undefined) {fileData.orientation = orientationOutput}}).then(() => {setOrientationData(fileData)});
        }
    }, [orientationData])

    useEffect(() => {
        if (orientationData !== undefined) {
            const tempFile = new File([props.file], props.file.name, {type: props.file.type});
            setFile(URL.createObjectURL(tempFile));
            setTimeout(() => {
                setFileRead(true);
            }, 350)
        }
    },[props.file, orientationData])


    return (
        <div className="aspect-square relative place-self-center flex justify-center align-middle rounded-xl overflow-hidden drop-shadow-lg">
            <img className={(orientationData !== undefined && orientationData.orientation === 6 && (!orientationData.Orientation === "Rotate 90 CW") ? "-rotate-90" : (orientationData !== undefined && (orientationData.ExifImageWidth > orientationData.ExifImageHeight) && orientationData.orientation === 3 ? "-rotate-90" : "")) + " z-10 w-full h-full object-cover"} src={file}></img>
            {!fileRead ? <div className="absolute inset-0 z-20 bg-primaryColor flex justify-center items-center">
                <div className="aspect-square animate-[spin_2s_ease-in-out_infinite]">
                    <FilmIcon className="h-8 stroke-[1.5px] aspect-square" />
                </div>
            </div> : null}
        </div>
    )
}

export default UploadItem;

