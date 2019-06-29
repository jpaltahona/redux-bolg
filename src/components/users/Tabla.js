import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Tabla = (props) => {
    const ponerfilas = () => props.usuarios.map((usuario, key)=> (
        <tr key={usuario.id}>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.website}</td>
            <td> 
                <Link to={`/publicaciones/${key}`}>
                    {key} ver
                </Link>
            </td>
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