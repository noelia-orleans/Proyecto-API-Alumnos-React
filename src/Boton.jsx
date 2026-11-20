function Boton({cargarUsuarios}){
    return(
        <div className="boton">
            <button onClick={cargarUsuarios}>
                Mostrar usuarios
            </button>
        </div>
    )
}

export default Boton;