import { ChevronUpIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";


function ExpandButton(props) {
    return (
        <button onClick={props.setAlbumExpanded} className="flex aspect-[3/4] items-center relative h-full">
            <div className={"h-[40%] w-full duration-200 rounded-lg border-4 border-primaryAccent ease-in"}></div>
            {props.albumExpanded ? <ChevronDownIcon className="absolute inset-x-0 duration-200 h-1/3 w-full top-0 stroke-[4px] stroke-primaryAccent" /> : <ChevronUpIcon className="absolute inset-x-0 duration-200  h-1/3 w-full top-0 stroke-[4px] stroke-primaryAccent" />}
            {props.albumExpanded ? <ChevronUpIcon className="absolute inset-x-0 duration-200 h-1/3 w-full bottom-0 stroke-[4px] stroke-primaryAccent" /> : <ChevronDownIcon className="absolute inset-x-0 duration-200  h-1/3 w-full bottom-0 stroke-[4px] stroke-primaryAccent" />}
        </button>
    )
}

export default ExpandButton