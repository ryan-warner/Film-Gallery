import Exposure from "./Exposure";
import Perforations from "./Perforations";
import { useState, useRef } from "react";

function Filmstrip(props) {
    const filmstripBackgroundColor = "rgba(48,30,30,255)";
    const filmstripPrimaryTextColor = "rgba(215,192,143,255)";
    const filmstripSecondaryTextColor = "rgba(160,3,38,255)";

    const exposuresArray = [];

    return (
        <div className="flex justify-center h-full w-2/3 overflow-visible">
            <div className="bg-red-200 w-96 self-center h-[110%] rotate-6"></div>
        </div>
    )
}

export default Filmstrip;