import Filmstrip from "./Filmstrip";

function Home() {
    return (
        <div className="h-full w-full relative overflow-hidden">
            <div className="px-8 flex items-center h-2/3">
                <div className="h-full flex flex-col justify-center gap-4 shrink-0 w-2/3">
                    <div className="bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent text-5xl font-semibold align-middle pb-2">
                        Capture, Develop, Share
                    </div>
                    <div className="bg-transparent text-2xl">
                        Film is making a comeback. 
                    </div>
                    <div className="bg-transparent text-2xl">
                        Some more text! 
                    </div>
                    <div className="bg-transparent text-2xl">
                        Maybe some buttons
                    </div>
                </div>
            </div>
            <div className="z-30 absolute left-1/2 -translate-x-1/2 bottom-[20%]">
            <Filmstrip />
            </div>
        </div>
    )
}

export default Home;