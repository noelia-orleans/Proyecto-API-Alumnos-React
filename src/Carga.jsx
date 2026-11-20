import { useState } from 'react';
import Boton from './Boton.jsx';
import Lista from './Lista.jsx';

function Carga(){ 
    const [usuarios, setUsuarios] = useState([]);
    
    function cargarUsuarios() {
        fetch('http://localhost:3000/api/usuarios')
            .then(res => res.json())
            .then(datos => setUsuarios(datos));
    }
    return(
        <div>
            <Boton cargarUsuarios={cargarUsuarios} />
            <Lista usuarios={usuarios} />
        </div>
    )
}

export default Carga;