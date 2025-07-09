import { useUserContext } from "../components/context/user_admin_context";

const User = () => {
    const { loggedUser } = useUserContext();

    console.log(loggedUser)
    return(
        <>
        <h2>Bienvenido, {loggedUser.name}</h2>
        
        </>
    )
}

export default User;