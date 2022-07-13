import Exposure from "./Exposure";
import Perforations from "./Perforations";
import { useState, useRef } from "react";

function Filmstrip(props) {
    const filmstripBackgroundColor = "bg-[rgba(48,30,30,255)]";
    const filmstripPrimaryTextColor = "bg-[rgba(215,192,143,255)]";
    const filmstripSecondaryTextColor = "bg-[rgba(160,3,38,255)]";
    const images = ["artLoeb.jpeg","tent.jpeg", "sunrise.jpeg","landscape.jpeg", "driving.jpeg"]

    const perforationsArray = [];
    const topLabelArray = [];
    const bottomLabelArray =[];
    const exposuresArray = [];
    const exposureNum = 26;
    const filmLabel = "KODAK PORTRA 400";

    const height = window.innerHeight;
    const numPerforations = height / 16 / 2 * 1.4;

    for (let i = 0; i < numPerforations; i++) {
        perforationsArray.push(<Perforations key={i} />);
    }

    for (let i = 0; i < 6; i++) {
        i % 2 === 0 ?
            topLabelArray.push(
                <div className="w-4 flex-1 flex justify-center overflow-hidden">
                    <div className="h-full aspect-square relative">
                        <div className="absolute top-1/2 -rotate-90 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center flex-col">
                            <p className="text-sm text-[rgba(215,192,143,255)] h-4 w-full text-center" key={i}>{filmLabel}</p>
                        </div>
                    </div>
                </div>
            ) :
            topLabelArray.push(
                <div className="w-4 flex-1 flex justify-center overflow-hidden">
                    <div className="h-full aspect-square relative">
                        <div className="absolute top-1/2 -rotate-90 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center flex-col">
                            <p className="text-sm text-[rgba(215,192,143,255)] h-4 w-full text-center" key={i}>{exposureNum - i}</p>
                        </div>
                    </div>
                </div>
            );
    }

    for (let i = 5; i > 0; i--) {
        i % 2 === 0 ?
            bottomLabelArray.push(
                <div className="flex flex-col gap-1">
                    <p className="-rotate-90 text-sm text-[rgba(215,192,143,255)]">{i}</p>
                <div className="w-4 flex justify-center">
                    <svg className="h-4 w-2">
                        <path className="fill-[rgba(215,192,143,255)]" d="M4 0 L8 16 L0 16 Z" />
                    </svg>
                </div>
                </div>
            ) :
            bottomLabelArray.push(
                <div className="w-4 flex justify-center">
                    <svg className="h-4 w-2">
                        <path className="fill-[rgba(215,192,143,255)]" d="M4 0 L8 16 L0 16 Z" />
                    </svg>
                </div>
            )

    }

    images.forEach((element, index) => {
        exposuresArray.push(<Exposure imagePath={element} key={index} />);
    })

    return (
        <div className="absolute inset-y-0 right-0 h-full w-3/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 bg-[rgba(48,30,30,255)] w-96 h-[120%] rotate-12">
                <div className="flex justify-between gap-2">
                    <div className="flex gap-1">
                        <div className="flex flex-col justify-evenly">
                            {topLabelArray}
                        </div>
                        <div className="flex flex-col gap-4">
                            {perforationsArray}
                        </div>
                    </div>
                    <div className="grow-1 w-full flex flex-col gap-4">
                        {exposuresArray}
                    </div>
                    <div className="flex gap-1">
                        <div className="flex flex-col gap-4">
                            {perforationsArray}
                        </div>
                        <div className="flex flex-col justify-evenly">
                            {bottomLabelArray} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filmstrip;