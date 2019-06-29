import React from 'react';
import { connect } from 'react-redux';

const Tabla = (props) => {
    const ponerfilas = () => props.usuarios.map((usuario)=> (
        <tr key={usuario.id}>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.website}</td>
        </tr>
   ));
    return(
        <table className="tabla">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>corre</th>
                    <th>Enlace</th>
                </tr>
            </thead>
                <tbody>
                {ponerfilas()}
                </tbody>
        </table>
    )
}
const mapStateToProps = (reducers) => {
    return reducers.usuariosReducers
}
export default connect(mapStateToProps,) (Tabla) ;