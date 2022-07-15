import Filmstrip from "./Filmstrip";
//import Button from "./Button";
import InternalButton from "./InternalButton";

function Home() {

    return (
        <div className="h-full w-full relative overflow-hidden bg-primaryColor">
            <div className="p-8 flex items-center h-[60%]">
                <div className="h-full flex flex-col justify-start gap-4 shrink-0 w-full select-none">
                    <div className="flex justify-between items-top">
                        <div className="bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent text-7xl font-semibold align-middle min-w-fit w-min pb-2 drop-shadow-lg">
                            Welcome to Filmstrip
                        </div>
                            <InternalButton to="/login" primaryButton={false} label="Log In"/> 
                    </div>
                    <div className="flex flex-col gap-2 text-2xl bg-transparent w-2/3">
                        <p>
                            In a world full of instant gratification, film is a break from reality. It is a medium where opportunities are chosen carefully and results are revealed in time. Like vinyl records, film photography is different, catching our eyes for some unknown reason. 
                        </p>
                        <p>
                            That is why we created <span className="inline font-bold">Filmstrip</span>.
                        </p>
                        <p>
                            We wanted a way for people to showcase their work, to share it with the world, and build modern solutions to streamline the process of shooting film. We hope you'll like it as much as we do. 
                        </p>
                    </div>
                    <div className="flex gap-4 w-min">
                        <InternalButton to="/signup" primaryButton={true} label="Sign Up"/>
                        <InternalButton to="/about" primaryButton={false} label="Learn More"/>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] overflow-visible">
            <Filmstrip />
            </div>
            <p className="my-4 mx-6 absolute bottom-0 right-0 font-semibold text-xl">{"Made with \u2764 by "} <span><a className="hover:underline" rel="noreferrer" href="https://ryanwarner.app" target="_blank">Ryan Warner</a></span></p>
        </div>
    )
}

export default Home;