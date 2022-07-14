import Exposure from "./Exposure";
import Perforations from "./Perforations";
import { useState, useRef } from "react";

function Filmstrip(props) {
    const filmstripBackgroundColor = "bg-[rgba(48,30,30,255)]";
    const filmstripPrimaryTextColor = "bg-[rgba(215,192,143,255)]";
    const filmstripSecondaryTextColor = "bg-[rgba(160,3,38,255)]";
    const images = ["artLoeb.jpeg","tent.jpeg", "sunrise.jpeg","group.jpeg", "landscape.jpeg", "driving.jpeg"]

    const perforationsArray = [];
    const topLabelArray = [];
    const bottomLabelArray =[];
    const exposuresArray = [];
    const exposureNum = 26;
    const filmLabel = "KODAK PORTRA 400";

    const width = window.innerWidth;
    const numPerforations = width / 12 / 2 * 1.2;

    for (let i = 0; i < numPerforations; i++) {
        perforationsArray.push(<Perforations key={i} />);
    }

    for (let i = 0; i < 18; i++) {
        i % 2 === 0 ?
            topLabelArray.push(
                <div className="w-full flex-1 flex justify-center overflow-hidden">
                    <p className="text-sm font-semibold text-[rgba(215,192,143,255)] h-4 w-full text-center blur-[0.5px]" key={i}>{filmLabel}</p>
                </div>
            ) :
            topLabelArray.push(
                <div className="w-full flex-1 flex justify-center overflow-hidden">
                    <p className="text-sm font-semibold text-[rgba(215,192,143,255)] h-4 w-full text-center blur-[0.5px]" key={i}>{exposureNum + Math.round(i/2)}</p>
                </div>
            );
    }

    for (let i = 15; i > 0; i--) {
        i % 2 === 0 ?
            bottomLabelArray.push(
                <div className="flex items-center gap-1">
                    <p className="text-sm font-semibold text-[rgba(215,192,143,255)] blur-[0.5px]">{Math.round(i/2) + 7}</p>
                <div className="h-2 flex justify-center">
                    <svg className="h-2 w-4">
                        <path className="fill-[rgba(215,192,143,255)] blur-[0.5px]" d="M0 0 L16 4 L0 8 Z" />
                    </svg>
                </div>
                </div>
            ) :
            bottomLabelArray.push(
                <div className="h-2 flex items-center justify-center">
                    <svg className="h-2 w-4">
                        <path className="fill-[rgba(215,192,143,255)] blur-[0.5px]" d="M0 0 L16 4 L0 8 Z" />
                    </svg>
                </div>
            )

    }

    images.forEach((element, index) => {
        exposuresArray.push(<Exposure imagePath={element} key={index} />);
    })

    return (
            <div className="bg-[rgba(48,30,30,0.975)] w-[105%] -rotate-6 h-[18rem] shadow-lg">
                <div className="h-full flex flex-col justify-between gap-[6px]">
                    <div className="flex flex-col gap-[2px]">
                        <div className="flex justify-evenly">
                            {topLabelArray}
                        </div>
                        <div className="flex gap-4">
                            {perforationsArray}
                        </div>
                    </div>
                    <div className="grow-1 h-full w-full relative flex gap-3 overflow-hidden justify-center">
                        {exposuresArray}
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <div className="flex gap-4">
                            {perforationsArray}
                        </div>
                        <div className="flex justify-evenly items-center">
                            {bottomLabelArray} 
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Filmstrip;