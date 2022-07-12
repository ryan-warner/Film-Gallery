import Filmstrip from "./Filmstrip";

function Home() {
    return (
        <div className="px-8 flex items-center h-full">
            <div className="h-full flex flex-col justify-center gap-4 shrink-0 w-2/3">
                <div className="bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent text-5xl align-middle pb-2">
                    Capture, Develop, Share
                </div>
                <div className="bg-transparent">
                    More Hi
                </div>
            </div>
            <div className="overflow-hidden w-full h-full">
                <Filmstrip />
            </div>
        </div>
    )
}

export default Home;