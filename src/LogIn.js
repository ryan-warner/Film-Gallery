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
            <div className="w-full h-12 bg-blue-200">
                <div id="g_id_onload"
                    data-client_id="251936842865-fd8t06catfk0bhb2bu3nm9oakd1ts6e0.apps.googleusercontent.com"
                    data-login_uri="http://localhost:3000/login"
                    data-auto_prompt="false">
                </div>
                <div class="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="signup_with"
                    data-shape="rectangular"
                    data-logo_alignment="left">
                </div>
            </div>
        </div>
    )
}

export default LogIn;