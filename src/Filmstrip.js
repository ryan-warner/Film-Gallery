import Exposure from "./Exposure";
import Perforations from "./Perforations";
import { useState, useRef } from "react";

function Filmstrip(props) {
    const filmstripBackgroundColor = "rgba(48,30,30,255)";
    const filmstripPrimaryTextColor = "rgba(215,192,143,255)";
    const filmstripSecondaryTextColor = "rgba(160,3,38,255)";

    const exposuresArray = [];

    const height = window.innerHeight;
    const numPerforations = height / 16 / 2 * 1.2;

    for (let i = 0; i < numPerforations; i++) {
        exposuresArray.push(<Perforations key={i} />);
    }

    return (
        <div className="absolute inset-y-0 right-0 h-full w-3/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 bg-[rgba(48,30,30,255)] w-96 h-[120%] rotate-12">
                <div className="flex justify-between px-4">
                    <div className="flex flex-col gap-4">
                        {exposuresArray}
                    </div>
                    <div className="flex flex-col gap-4">
                        {exposuresArray}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filmstrip;