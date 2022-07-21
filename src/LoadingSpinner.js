import { FilmIcon } from "@heroicons/react/outline";

function LoadingSpinner() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-primaryColor">
            <div className="w-[7.5%] aspect-square rotate-90">
                <FilmIcon className="stroke-[1.25px] animate-[spin_2s_ease-in-out_infinite] fill-primaryColor" />
            </div>
        </div>
    )
}

export default LoadingSpinner;