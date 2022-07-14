import { useAuth0 } from "@auth0/auth0-react";

function UserHome() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (!isAuthenticated) {
        return <div>Not authenticated</div>;
    }

    if (isAuthenticated) {
        return (
            <div className="h-screen w-full bg-green-400">
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
        )
    }
   
}

export default UserHome;