import Filmstrip from "./Filmstrip";

function Home() {
    return (
        <div className="h-full w-full relative overflow-hidden bg-[#F6F6F4]">
            <div className="p-8 flex items-center h-[60%]">
                <div className="h-full flex flex-col justify-start gap-4 shrink-0 w-2/3">
                    <div className="bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent text-7xl font-semibold align-middle min-w-fit w-min pb-2 drop-shadow-lg">
                        Welcome to Filmstrip
                    </div>
                    <div className="flex flex-col gap-2 text-2xl bg-transparent">
                        <p>
                            In a world full of instant gratification, film is a break from reality. It is a medium where opportunities are chosen carefully and results are revealed in time. Like vinyl records, film photography is different, catching our eyes for some unknown reason. 
                        </p>
                        <p>
                            That is why we created <div className="inline font-bold">Filmstrip</div>.
                        </p>
                        <p>
                            We wanted a way for people to showcase their work, to share it with the world, and build modern solutions to streamline the process of shooting film. We hope you'll like it as much as we do. 
                        </p>
                    </div>
                    <div className="bg-blue-200 h-16 text-2xl w-1/3">
                        
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] overflow-visible">
            <Filmstrip />
            </div>
        </div>
    )
}

export default Home;