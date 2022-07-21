import Button from "./Button"
import { useRef } from "react"
import { useAuth } from "./AuthProvider"


function LogIn(props) {
    const userIdentifierInput = useRef(null);
    const passwordInput = useRef(null);
    const { login } = useAuth()

    function handleClick() {
        const username = userIdentifierInput.current.value;
        const password = passwordInput.current.value;

        login(username, password)
    }

    return (
        <div className="flex flex-col justify-center items-center w-full divide-y-2 divide-gray-500 gap-4">
            <div className="flex flex-col justify-center items-center w-full gap-3">
                <p className="text-2xl">Welcome Back!</p>
                <input ref={userIdentifierInput} className="text-2xl p-2 bg-primaryColor border-2 border-primaryAccent rounded-xl" placeholder="Username"></input>
                <input ref={passwordInput} className="text-2xl p-2 bg-primaryColor border-2 border-primaryAccent rounded-xl" placeholder="Password"></input>
                <Button label="Log In" primaryButton={true} onClick={() => handleClick()} />
            </div>
        </div>
    )
}

export default LogIn;