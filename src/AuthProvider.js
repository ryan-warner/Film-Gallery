import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

function AuthProvider(props) {
    const navigate = useNavigate();

    const login = (username, password) => {
        const content = {"userIdentifier": username, "password": password};
        const response = fetch(
            "http://127.0.0.1:5000/api/v1/auth/login", 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                },
                method: "POST",
                mode: "cors",
                body: JSON.stringify(content)
            }
        )
        response.then(response => {if (response.status !== 200) {response.reject("Problem with the request")} else {return response.json()}})
        .then(body => {
            localStorage.setItem("filmstripToken", body.token);
            
            console.log(localStorage.getItem("filmstripToken"));
            navigate("/portfolio");
        })
    }
    const register = () => {console.log("register")}
    const logout = () => {console.log("logging out")}
    const verifyLogin = (token) => {
        const result = async () =>  { 
            try {
                const response = await fetch(
                    "http://127.0.0.1:5000/api/v1/auth/verify",
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "http://localhost:3000",
                            'Accept': 'application/json',
                            'Content-Type': 'application/json; charset=utf-8',
                            "Authorization": "Bearer " + token
                        },
                        method: "GET",
                        mode: "cors"
                    }
                )
                if (!response.ok) {
                    return false
                } else if (response.status === 200) {
                    return true
                } else {
                    return false
                }
            } catch {
                return false;
            }
        }
        return result();
    }

    return (
        <AuthContext.Provider value={{login, register, logout, verifyLogin}} {...props} />
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }