function Lista({usuarios}){
    return(
        <div className="lista">
            <h2>Listado de usuarios</h2>
            <ul>
                {usuarios.map(u => (
                <li key={u.id}>
                    <img src={u.urlImagen} alt={u.nombre} width="50" />
                    {u.nombre} {u.apellidos} - {u.fechaNacimiento}
                </li>
                ))}
            </ul>
    </div>
    )
}

export default Lista;