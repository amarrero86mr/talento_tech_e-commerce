import { useUserContext } from "../components/context/user_admin_context";

const User = () => {
    const { loggedUser, isAuth } = useUserContext();

    /* useEffect(()=>{
       if (isAuth) {
        navigate('/admin')
       } 
       },[]) */

    // console.log(loggedUser)
    return(
        <>
        <h2>Bienvenido, {loggedUser.name}</h2>
        
        <p>estos son tus datos</p>

        <h3>ultimas Compras</h3>

        </>
    )
}

export default User;