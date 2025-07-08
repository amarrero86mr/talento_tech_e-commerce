
const User = () => {
    const local = localStorage
    console.log(local)
    return(
        <>
        <h2>Bienvenido, {local.name}</h2>
        
        </>
    )
}

export default User;