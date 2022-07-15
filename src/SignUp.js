import Button from "./Button"

function SignUp(props) {
    return (
        <div className="flex flex-col justify-center items-center w-full divide-y-2 divide-gray-500 gap-4">
        <div className="flex flex-col justify-center items-center w-full gap-3">
            <p className="text-3xl font-semibold min-w-fit w-min">Welcome to Filmstrip!</p>
            <input className="text-xl p-2 bg-primaryColor border-2 border-primaryAccent rounded-xl" placeholder="Username"></input>
            <input className="text-xl p-2 bg-primaryColor border-2 border-primaryAccent rounded-xl" placeholder="Password"></input>
            <Button label="Log In" primaryButton={true} />
        </div>
        <div className="w-full">
            Hi
        </div>
    </div>
    )
}

export default SignUp;