import { useState, useRef } from "react";
import UploadItem from "./UploadItem";
import { CloudUploadIcon } from "@heroicons/react/outline";

function FileUpload() {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [draggedOver, setDraggedOver] = useState(false);


    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setDraggedOver(false);
        var newFiles = [...e.dataTransfer.files];
        const existingFiles = [...files];
        for (var file in newFiles) {
            console.log(file.name)
        }
        newFiles = newFiles.filter(file => (!existingFiles.includes(file.name) && file.type.includes("image")));
        setFiles([...files, ...newFiles]);
    }
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        setDraggedOver(true);
        e.dataTransfer.dropEffect = 'copy';
    }

    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        setDraggedOver(false);
    }

    function handleUpload() {
        console.log("upload the thing")
    }

    function handleClick() {
        fileInputRef.current.click();
    }
    
    return (
        <div className={(draggedOver ? "border-primaryAccent" : "") + (" border-2 border-dashed rounded-xl w-full h-full flex justify-center items-center")} onDragLeave={e => handleDragLeave(e)} onDragOver={e => handleDragOver(e)} onDrop={e => handleDrop(e)}>
            {
                files.length === 0 ?            
                <button onClick={() => handleClick()} className="w-full h-full">
                    <div className="flex flex-col justify-center gap-2" >
                        <CloudUploadIcon className={(draggedOver ? "stroke-primaryAccent" : "") + " h-16 stroke-[1.5px]"} />
                        <p className={(draggedOver ? "text-primaryAccent" : "") + " text-4xl select-none"}>Upload Files</p>
                        <p className={(draggedOver ? "text-primaryAccent" : "") + " text-center select-none"}>Browse or Drop Image</p>
                    </div>
                </button> : 
                <div className="grid grid-cols-4 w-full gap-4 place-self-start m-6 row-auto">
                    {files.map((file, index) => <UploadItem file={file} key={index} />)}
                </div>
                }
            <input ref={fileInputRef} className="invisible absolute" type="file" multiple onChange={e => setFiles(e.target.files)} />
        </div>
    )
}

export default FileUpload;