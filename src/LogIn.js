import Button from "./Button"

function LogIn(props) {
    return (
        <div className="flex flex-col justify-center items-center w-full divide-y-2 divide-gray-500 gap-4">
            <div className="flex flex-col justify-center items-center w-full gap-3">
                <p className="text-2xl">Welcome Back!</p>
                <input className="text-2xl p-2 bg-primaryColor border-2 border-primaryAccent rounded-xl" placeholder="Username"></input>
                <input className="text-2xl p-2 bg-primaryColor border-2 border-primaryAccent rounded-xl" placeholder="Password"></input>
                <Button label="Log In" primaryButton={true} />
            </div>
            <div className="w-full">
                Hi
            </div>
        </div>
    )
}

export default LogIn;